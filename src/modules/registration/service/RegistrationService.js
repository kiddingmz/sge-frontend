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

export const RegistrationService = {
    async list() {
        try {
            const response = await axios.get(`${baseApiUrl}/matricula/estudantes`, { headers: getHeaders() });
            return response.data.data;
        } catch (error) {
            console.error("Error fetching matricula/estudantes:", error);
            throw error;
        }
    },
    async create(User) {
        try {
            const response = await axios.post(`${baseApiUrl}/matricula/estudantes`, User, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error creating User:", error);
            throw error;
        }
    },
    async update(User) {
        try {
            const response = await axios.put(`${baseApiUrl}/matricula/estudantes/${User.id}`, User, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error updating User:", error);
            throw error;
        }
    },
    async delete(id) {
        try {
            const response = await axios.delete(`${baseApiUrl}/matricula/estudantes/${id}`, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error deleting User:", error);
            throw error;
        }
    },
    async findById(id) {
        try {
            const response = await axios.get(`${baseApiUrl}/matricula/estudantes/${id}`, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error finding User by ID:", error);
            throw error;
        }
    },
    getUsersData() {
        return [
            {
                id: '1',
                name: 'Isidro Bata',
                roles: [
                    'Super Administrador'
                ]
            },
            {
                id: '2',
                name: 'Henriqueta Gomes',
                roles: [
                    'Registo Académico'
                ]
            },
            {
                id: '3',
                name: 'Erica Jaqueline da Silva',
                roles: [
                    'Docente',
                    'Registo Académico'
                ]
            },

        ]
    },
    getUsersGroupData() {
        return [
            {
                id: '1',
                name: 'Estudante',
                permissions: [
                    "ver_estudante",
                    "adicionar_estudante",
                    "eliminar_estudante",
                    "editar_estudante",
                ]
            },
            {
                id: '2',
                name: 'Docente',
                permissions: [
                    "ver_docente",
                    "adicionar_docente",
                    "eliminar_docente",
                    "editar_docente",
                ]
            },
            {
                id: '3',
                name: 'Curso',
                permissions: [
                    "ver_curso",
                    "adicionar_curso",
                    "eliminar_curso",
                    "editar_curso",
                ]
            },
        ]
    },
    getUsers() {
        return Promise.resolve(this.getUsersData());
    },
    getUsersGroup() {
        return Promise.resolve(this.getUsersGroupData());
    },
};