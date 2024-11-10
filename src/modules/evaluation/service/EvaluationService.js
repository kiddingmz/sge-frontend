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

export const EvaluationService = {
    async list(data) {
        try {
            const response = await axios.post(`${baseApiUrl}/avaliacao/veravaliacoesturma`, data,{ headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error finding evaluation by ID:", error);
            throw error;
        }
    },
    async listByClass(data) {
        try {
            const response = await axios.post(`${baseApiUrl}/avaliacao/veravaliacao`, data,{ headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error finding evaluation by ID:", error);
            throw error;
        }
    },
    async create(evaluation) {
        try {
            const response = await axios.post(`${baseApiUrl}/avaliacao/adicionaravaliacao`, evaluation, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error creating evaluation:", error);
            throw error;
        }
    },
    async update(evaluation) {
        try {
            const response = await axios.put(`${baseApiUrl}/docente/notasTurma/${evaluation.id}`, evaluation, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error updating evaluation:", error);
            throw error;
        }
    },
    async delete(id) {
        try {
            const response = await axios.delete(`${baseApiUrl}/docente/notasTurma/${id}`, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error deleting evaluation:", error);
            throw error;
        }
    },
    async findById(id) {
        try {
            const response = await axios.get(`${baseApiUrl}/docente/notasTurma/${id}`, { headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error finding evaluation by ID:", error);
            throw error;
        }
    },
    async findYearByCourse(id) {
        try {
            const response = await axios.post(`${baseApiUrl}/avaliacao/veranos`, id,{ headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error finding evaluation by ID:", error);
            throw error;
        }
    },
    async findClassByCourseAndYear(data) {
        try {
            const response = await axios.post(`${baseApiUrl}/avaliacao/verturmas`, data,{ headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error finding evaluation by ID:", error);
            throw error;
        }
    },
    async findAvaliacaoByCurso(id) {
        try {
            const response = await axios.post(`${baseApiUrl}/avaliacao/veravaliacao`, id,{ headers: getHeaders() });
            return response.data;
        } catch (error) {
            console.error("Error finding evaluation by ID:", error);
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