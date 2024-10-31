import { baseApiUrl } from "@/global";
import store from "@/modules/auth/store";
import axios from "axios";
axios.defaults.baseURL = baseApiUrl;

function getHeaders() {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${store.state.token}`,
    };
}

export const UserService = {
    async list() {
        try {
            const response = await axios.get(`${baseApiUrl}/auth/users`, { headers: getHeaders() });
            return response.data.data;
        } catch (error) {
            console.error("Error fetching auth/users:", error);
            throw error;
        }
    },
    async create(User) {
        try {
            const response = await axios.post(`${baseApiUrl}/auth/users`, User, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error creating User:", error);
            throw error;
        }
    },
    async update(id, User) {
        try {
            const response = await axios.put(`${baseApiUrl}/auth/users/${id}`, User, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error updating User:", error);
            throw error;
        }
    },
    async delete(id) {
        try {
            const response = await axios.delete(`${baseApiUrl}/auth/users/${id}`, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error deleting User:", error);
            throw error;
        }
    },
    async findById(id) {
        try {
            const response = await axios.get(`${baseApiUrl}/auth/users/${id}`, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error finding User by ID:", error);
            throw error;
        }
    },
};