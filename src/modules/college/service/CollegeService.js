import { baseApiUrl } from "@/global";
import store from "@/modules/auth/store";
import axios from "axios";
axios.defaults.baseURL = baseApiUrl;

function getHeaders() {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${store.state.token}`
    };
}

export const CollegeService = {
    async list() {
        try {
            const response = await axios.get(`${baseApiUrl}/curso/faculdades`, { headers: getHeaders() });
            return response.data.data;
        } catch (error) {
            console.error("Error fetching curso/faculdades:", error);
            throw error;
        }
    },
    async create(college) {
        try {
            const response = await axios.post(`${baseApiUrl}/curso/faculdades`, college, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error creating college:", error);
            throw error;
        }
    },
    async update(college) {
        try {
            const response = await axios.put(`${baseApiUrl}/curso/faculdades/${college.id}`, college, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error updating college:", error);
            throw error;
        }
    },
    async delete(id) {
        try {
            const response = await axios.delete(`${baseApiUrl}/curso/faculdades/${id}`, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error deleting college:", error);
            throw error;
        }
    },
    async findById(id) {
        try {
            const response = await axios.get(`${baseApiUrl}/curso/faculdades/${id}`, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error finding college by ID:", error);
            throw error;
        }
    },
    getRolesData() {
        return [
            {
                id: '1',
                name: 'Administrador',
                permissions: [
                    "ver_estudante",
                    "adicionar_estudante",
                    "eliminar_estudante",
                    "editar_estudante",
                    "ver_docente",
                    "adicionar_docente",
                    "eliminar_docente",
                    "editar_docente",
                    "ver_curso",
                    "adicionar_curso",
                    "eliminar_curso",
                    "editar_curso",
                ]
            },
            {
                id: '2',
                name: 'Secretário',
                permissions: [
                    "ver_estudante",
                    "adicionar_estudante",
                    "eliminar_estudante",
                    "editar_estudante",
                    "ver_docente",
                    "adicionar_docente",
                    "eliminar_docente",
                    "editar_docente",
                    "ver_curso",
                    "adicionar_curso",
                    "eliminar_curso",
                    "editar_curso",
                ]
            },
            {
                id: '3',
                name: 'Docente',
                permissions: [
                    "ver_estudante",
                    "adicionar_estudante",
                    "eliminar_estudante",
                    "editar_estudante",
                    "ver_docente",
                    "adicionar_docente",
                    "eliminar_docente",
                    "editar_docente",
                    "ver_curso",
                    "adicionar_curso",
                    "eliminar_curso",
                    "editar_curso",
                ]
            },
            {
                id: '4',
                name: 'Estudante',
                permissions: [
                    "ver_estudante",
                    "adicionar_estudante",
                    "eliminar_estudante",
                    "editar_estudante",
                    "ver_docente",
                    "adicionar_docente",
                    "eliminar_docente",
                    "editar_docente",
                    "ver_curso",
                    "adicionar_curso",
                    "eliminar_curso",
                    "editar_curso",
                ]
            },
        ]
    },
    getRolesGroupData() {
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
    getRoles() {
        return Promise.resolve(this.getRolesData());
    },
    getRolesGroup() {
        return Promise.resolve(this.getRolesGroupData());
    },
};