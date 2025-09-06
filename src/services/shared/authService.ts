import apiClient from './api';
import type { LoginRequest, LoginResponse, RegisterRequest, User } from '../../types';

export const authService = {
    // Đăng nhập
    async login(credentials: LoginRequest): Promise<LoginResponse> {
        const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
        return response.data;
    },

    // Đăng ký
    async register(userData: RegisterRequest): Promise<LoginResponse> {
        const response = await apiClient.post<LoginResponse>('/auth/register', userData);
        return response.data;
    },

    // Lấy thông tin user hiện tại
    async getCurrentUser(): Promise<User> {
        const response = await apiClient.get<User>('/auth/me');
        return response.data;
    },

    // Refresh token
    async refreshToken(): Promise<LoginResponse> {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await apiClient.post<LoginResponse>('/auth/refresh', {
            refresh_token: refreshToken,
        });
        return response.data;
    },

    // Đăng xuất
    async logout(): Promise<void> {
        await apiClient.post('/auth/logout');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    },

    // Kiểm tra token có hợp lệ không
    isAuthenticated(): boolean {
        const token = localStorage.getItem('access_token');
        return !!token;
    },

    // Lưu token
    saveTokens(accessToken: string, refreshToken: string): void {
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
    },
};
