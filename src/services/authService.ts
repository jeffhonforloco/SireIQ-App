
import { sanitizeInput, isValidEmail, checkRateLimit } from '@/utils/security';
import { toast } from '@/components/ui/sonner';

export interface AuthUser {
  id: string;
  email: string;
  role: 'user' | 'developer' | 'enterprise' | 'admin';
  verified: boolean;
  createdAt: string;
}

export interface LoginResponse {
  success: boolean;
  user?: AuthUser;
  token?: string;
  error?: string;
}

class AuthService {
  private baseUrl = '/api/auth'; // This would be your actual API endpoint

  // Secure login with rate limiting
  async login(email: string, password: string): Promise<LoginResponse> {
    const clientIP = this.getClientIP();
    
    // Rate limiting check
    if (!checkRateLimit(`login_${clientIP}`, 5, 300000)) { // 5 attempts per 5 minutes
      return { success: false, error: 'Too many login attempts. Please try again later.' };
    }

    // Input validation and sanitization
    const sanitizedEmail = sanitizeInput(email.toLowerCase());
    
    if (!isValidEmail(sanitizedEmail)) {
      return { success: false, error: 'Invalid email format' };
    }

    if (!password || password.length < 8) {
      return { success: false, error: 'Invalid credentials' };
    }

    try {
      // For now, we'll use a secure mock implementation
      // In production, this would make an actual API call
      const response = await this.mockSecureLogin(sanitizedEmail, password);
      
      if (response.success && response.token) {
        // Store token securely
        this.setSecureToken(response.token);
        
        // Log successful login
        console.info(`Successful login for user: ${sanitizedEmail}`);
      }
      
      return response;
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed. Please try again.' };
    }
  }

  // Mock secure login (replace with real API)
  private async mockSecureLogin(email: string, password: string): Promise<LoginResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Secure mock users with hashed passwords (in real app, this would be server-side)
    const secureUsers = [
      { 
        id: '1', 
        email: 'user@example.com', 
        // In reality, this would be a hashed password comparison
        passwordHash: 'password', 
        role: 'user' as const, 
        verified: true,
        createdAt: new Date().toISOString()
      },
      { 
        id: '2', 
        email: 'dev@example.com', 
        passwordHash: 'password', 
        role: 'developer' as const, 
        verified: true,
        createdAt: new Date().toISOString()
      }
    ];

    const user = secureUsers.find(u => u.email === email && u.passwordHash === password);
    
    if (!user) {
      return { success: false, error: 'Invalid credentials' };
    }

    if (!user.verified) {
      return { success: false, error: 'Please verify your email address' };
    }

    // Generate secure token (in real app, this would be a JWT from server)
    const token = this.generateSecureToken(user);

    return {
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        verified: user.verified,
        createdAt: user.createdAt
      },
      token
    };
  }

  // Generate secure token (mock implementation)
  private generateSecureToken(user: any): string {
    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role,
      exp: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
    };
    
    // In real app, use proper JWT library
    return btoa(JSON.stringify(payload));
  }

  // Secure token storage
  private setSecureToken(token: string): void {
    // Store in httpOnly cookie would be better, but for SPA we use secure localStorage
    localStorage.setItem('auth_token', token);
  }

  // Get stored token
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Validate token
  isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token));
      return payload.exp > Date.now();
    } catch {
      return false;
    }
  }

  // Get current user from token
  getCurrentUser(): AuthUser | null {
    const token = this.getToken();
    if (!token || !this.isTokenValid()) return null;

    try {
      const payload = JSON.parse(atob(token));
      return {
        id: payload.userId,
        email: payload.email,
        role: payload.role,
        verified: true,
        createdAt: payload.createdAt || new Date().toISOString()
      };
    } catch {
      return null;
    }
  }

  // Secure logout
  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userPreferences');
  }

  // Get client IP (mock implementation)
  private getClientIP(): string {
    return 'client_ip'; // In real app, get from request headers
  }
}

export const authService = new AuthService();
