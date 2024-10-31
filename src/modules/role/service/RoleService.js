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

export const RoleService = {
    async list() {
        try {
            const response = await axios.get(`${baseApiUrl}/papel/papeis`, { headers: getHeaders() });
            console.log(response.data.data);
            return response.data.data;
        } catch (error) {
            console.error("Error fetching papel/papeis:", error);
            throw error;
        }
    },
    async create(role) {
        try {
            const response = await axios.post(`${baseApiUrl}/papel/papeis`, role, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error creating role:", error);
            throw error;
        }
    },
    async update(role) {
        try {
            const response = await axios.put(`${baseApiUrl}/papel/papeis/${role.id}`, role, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error updating role:", error);
            throw error;
        }
    },
    async delete(id) {
        try {
            const response = await axios.delete(`${baseApiUrl}/papel/papeis/${id}`, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error deleting role:", error);
            throw error;
        }
    },
    async findById(id) {
        try {
            const response = await axios.get(`${baseApiUrl}/papel/papeis/${id}`, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error finding role by ID:", error);
            throw error;
        }
    },
};