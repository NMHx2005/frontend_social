import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { RegisterRequest, User } from '../types';
import { authService } from '../services/shared/authService';
import { AuthContext, type AuthContextType } from './AuthContext';

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    // Tạm thời luôn authenticated
    const isAuthenticated = authService.isAuthenticated();

    useEffect(() => {
        // Tạm thời disable auth calls để tránh lỗi connection
        setIsLoading(false);
        // Mock user data
        setUser({
            id: '1',
            username: 'hungnm22092005',
            email: 'hungnm22092005@gmail.com',
            fullName: 'Hung Nguyen',
            role: 'user',
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    }, []);

    const login = async (email: string, password: string) => {
        // Tạm thời mock login
        console.log('Login with:', email, password);
        setUser({
            id: '1',
            username: 'hungnm22092005',
            email: email,
            fullName: 'Hung Nguyen',
            role: 'user',
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    };

    const register = async (userData: RegisterRequest) => {
        // Tạm thời mock register
        console.log('Register with:', userData);
        setUser({
            id: '1',
            username: userData.username,
            email: userData.email,
            fullName: userData.fullName,
            role: 'user',
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    };

    const logout = async () => {
        // Tạm thời mock logout
        console.log('Logout');
        setUser(null);
    };

    const refreshUser = async () => {
        // Tạm thời mock refresh
        console.log('Refresh user');
        // Không cần làm gì vì user đã được set trong useEffect
    };

    const value: AuthContextType = {
        user,
        isLoading,
        isAuthenticated,
        login,
        register,
        logout,
        refreshUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
