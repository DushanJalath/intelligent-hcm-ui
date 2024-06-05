import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refresh_token');
            if (!refreshToken) {
                console.error('No refresh token found');
                localStorage.removeItem('token');
                localStorage.removeItem('refresh_token');
                return Promise.reject(error);
            }
            try {
                const { data } = await axios.post('http://127.0.0.1:8000/refresh_token', { refresh_token: refreshToken });
                localStorage.setItem('token', data.access_token);
                api.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
                originalRequest.headers['Authorization'] = `Bearer ${data.access_token}`;
                return api(originalRequest);
            } catch (e) {
                console.error('Failed to refresh token', e);
                localStorage.removeItem('token');
                localStorage.removeItem('refresh_token');
                return Promise.reject({ ...error, isTokenRefreshError: true });
            }
        }
        return Promise.reject(error);
    }
);

export const setAuthorizationHeader = token => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default api;