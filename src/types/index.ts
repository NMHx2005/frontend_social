// User types
export interface User {
    id: string;
    email: string;
    username: string;
    fullName: string;
    avatar?: string;
    role: 'admin' | 'user' | 'moderator';
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

// Auth types
export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
    refresh_token: string;
    user: User;
}

export interface RegisterRequest {
    email: string;
    password: string;
    username: string;
    fullName: string;
}

// API Response types
export interface ApiResponse<T = unknown> {
    success: boolean;
    data: T;
    message?: string;
    error?: string;
}

// Common types
export interface PaginationParams {
    page: number;
    limit: number;
    search?: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
