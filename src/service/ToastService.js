import { useToast } from 'primevue/usetoast';

let toastInstance;

const ToastService = {
    init() {
        // Inicializa a instância do Toast
        if (!toastInstance) {
            toastInstance = useToast(); // Obtém a instância do Toast
        }
    },

    toastSuccess(msg) {
        if (toastInstance) {
            toastInstance.add({
                severity: 'success',
                summary: msg,
                life: 3000,
            });
        }
    },

    toastError(msg) {
        if (toastInstance) {
            toastInstance.add({
                severity: 'error',
                summary: msg,
                life: 3000,
            });
        }
    },
};

export default ToastService;
