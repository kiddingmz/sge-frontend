export const baseApiUrl = process.env.NODE_ENV === 'development' ? `127.0.0.1:8000/api` : `127.0.0.1:8000/api`

export const roles = {
    ADMIN: 'SA',
}

export const authorities = {
    STUDENT_VIEW: "ver_estudante",
    STUDENT_CREATE: "adicionar_estudante",
    STUDENT_DELETE: "eliminar_estudante",
    STUDENT_EDIT: "editar_estudante",
    TEACHER_VIEW: "ver_docente",
    TEACHER_CREATE: "adicionar_docente",
    TEACHER_DELETE: "eliminar_docente",
    TEACHER_EDIT: "editar_docente",
    COURSE_VIEW: "ver_curso",
    COURSE_CREATE: "adicionar_curso",
    COURSE_DELETE: "eliminar_curso",
    COURSE_EDIT: "editar_curso",
    DEPARTMENT_VIEW: "ver_departamento",
    DEPARTMENT_CREATE: "adicionar_departamento",
    DEPARTMENT_DELETE: "eliminar_departamento",
    DEPARTMENT_EDIT: "editar_departamento",
    CLASS_VIEW: "ver_cadeira_no_ano_lectivo",
    CLASS_CREATE: "adicionar_cadeira_no_ano_lectivo",
    ASSISTANT_CREATE: "adicionar_assistente",
    ASSISTANT_VIEW: "ver_assistente",
    ASSISTANT_DELETE: "eliminar_assistente",
    EVALUATION_CREATE: "adicionar_avaliacao",
    EVALUATION_VIEW: "ver_avaliacao",
    EVALUATION_EDIT: "editar_avaliacao",
    GRADE_SUBMIT: "lancar_nota",
    GRADE_VIEW: "ver_nota",
    GRADE_EDIT: "editar_nota"
}