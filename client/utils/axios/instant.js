import axios from 'axios'

export const axiosInstant = axios.create(
    {
        baseURL: 'http://127.0.0.1:8000/api/v1',
        // withCredentials: true,
        // AccessControlAllowOrigin: 'http://127.0.0.1:8000/api/v1',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
)