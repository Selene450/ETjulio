/**
 * Clase project
 * Contiene validaciones personalizadas para los atributos del proyecto
 */
class Project {
    constructor() {}

    /**
     * Validación personalizada para start_date_project
     * Comprueba que la fecha no es anterior a 1900 y no es posterior a hoy
     * @param {string} value - Valor de la fecha en formato DD-MM-YYYY
     * @returns {boolean|string} true si válido, mensaje de error si no
     */
    start_date_project_personalized_validation(value) {
        if (!value || value.trim() === '') return true;

        // Comprobar formato DD-MM-YYYY
        if (!/^\d{2}-\d{2}-\d{4}$/.test(value.trim())) {
            return 'Formato de fecha inválido (DD-MM-YYYY)';
        }

        const [day, month, year] = value.trim().split('-').map(Number);
        const date = new Date(year, month - 1, day);

        if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
            return 'Fecha no válida';
        }

        // No puede ser anterior a 1900
        if (year < 1900) {
            return 'La fecha de inicio no puede ser anterior a 1900';
        }

        // No puede ser posterior a hoy
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (date > today) {
            return 'La fecha de inicio no puede ser mayor a hoy';
        }

        return true;
    }

    /**
     * Validación personalizada para end_date_project
     * Comprueba que la fecha no es posterior a 2099
     * @param {string} value - Valor de la fecha en formato DD-MM-YYYY
     * @returns {boolean|string} true si válido, mensaje de error si no
     */
    end_date_project_personalized_validation(value) {
        if (!value || value.trim() === '') return true;

        // Comprobar formato DD-MM-YYYY
        if (!/^\d{2}-\d{2}-\d{4}$/.test(value.trim())) {
            return 'Formato de fecha inválido (DD-MM-YYYY)';
        }

        const [day, month, year] = value.trim().split('-').map(Number);
        const date = new Date(year, month - 1, day);

        if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
            return 'Fecha no válida';
        }

        // No puede ser posterior a 2099
        if (year >= 2100) {
            return 'La fecha de fin debe ser menor a 2100';
        }

        return true;
    }
}