
const API_BASE = import.meta.env.VITE_API_URL || 'http://manufacture-advisory-production.up.railway.app';

// Store token in localStorage
const TOKEN_KEY = 'auth_token';

export async function loginAdmin(username: string, password: string): Promise<{ token: string }> {
    const res = await fetch(`${API_BASE}/api/auth/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Login failed');
    }

    const data = await res.json();

    // Store token in localStorage
    if (data.token) {
        localStorage.setItem(TOKEN_KEY, data.token);
    }

    return data;
}

export function logoutAdmin(): void {
    localStorage.removeItem(TOKEN_KEY);
    // Optional: Call logout endpoint
    // fetch(`${API_BASE}/logout/`, { method: 'POST' });
}

export function isAuthenticated(): boolean {
    const token = localStorage.getItem(TOKEN_KEY);
    return !!token; // Returns true if token exists
}

export function getAuthToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}

// Helper to add auth header to fetch requests
export function authHeaders(): HeadersInit {
    const token = getAuthToken();
    return {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Token ${token}` }),
    };
}