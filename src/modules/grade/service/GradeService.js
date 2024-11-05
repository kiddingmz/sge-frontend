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

export const GradeService = {
    async list() {
        try {
            const response = await axios.get(`${baseApiUrl}/docente/notasTurma`, { headers: getHeaders() });
            return response.data.data;
        } catch (error) {
            console.error("Error fetching docente/notasTurma:", error);
            throw error;
        }
    },
    async listWithData(data) {
        try {
            const response = await axios.post(`${baseApiUrl}/docente/notasTurma`, data, { headers: getHeaders() });
            return response.data.data;
        } catch (error) {
            console.error("Error fetching docente/notasTurma:", error);
            throw error;
        }
    },
    async create(grade) {
        try {
            const response = await axios.post(`${baseApiUrl}/docente/notasTurma`, grade, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error creating grade:", error);
            throw error;
        }
    },
    async update(grade) {
        try {
            const response = await axios.put(`${baseApiUrl}/docente/docentes/${grade.id}`, grade, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error updating grade:", error);
            throw error;
        }
    },
    async delete(id) {
        try {
            const response = await axios.delete(`${baseApiUrl}/docente/notasTurma/${id}`, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error deleting grade:", error);
            throw error;
        }
    },
    async findById(id) {
        try {
            const response = await axios.get(`${baseApiUrl}/docente/notasTurma/${id}`, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error finding grade by ID:", error);
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