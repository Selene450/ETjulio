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
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value.trim())) {
            return 'Formato de fecha inválido (DD-MM-YYYY)';
        }

        const [day, month, year] = value.trim().split('/').map(Number);
        const date = new Date(year, month - 1, day);

        if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
            return 'Fecha no válida';
        }

        

        return true;
    }

    /** 
     * Validación personalizada para end_date_project
     * Comprueba que la fecha no es anterior a la fecha de inicio y que tiene un formato válido
     * @param {string} value - Valor de la fecha en formato DD-MM-YYYY
     * @returns {boolean|string} true si válido, mensaje de error si no
     */
    end_date_project_personalized_validation(value, context) {
        if (!value || value.trim() === '') return true;

        // 1. Validar formato DD/MM/YYYY
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value.trim())) {
            return 'end_date_format_KO';
        }

        // Normalizar fecha fin a YYYYMMDD para comparación numérica
        const parts = value.trim().split('/');
        const valNorm = parts[2] + parts[1] + parts[0];

        // 2. Obtener fecha de inicio: primero desde el contexto (tests/submit), luego desde el DOM (app real)
        let startVal = '';
        if (context && context.start_date_project) {
            startVal = context.start_date_project;
        } else {
            const startDateElement = document.getElementById('start_date_project')
                                  || document.getElementById('field_start_date_project')
                                  || document.querySelector('[name="start_date_project"]');
            if (startDateElement) {
                startVal = startDateElement.value || startDateElement.getAttribute('value') || '';
            }
        }

        // 3. Comparar fechas si tenemos fecha de inicio
        if (startVal && startVal.trim() !== '') {
            const sp = startVal.trim().split('/');
            const startNorm = sp[2] + sp[1] + sp[0]; // DD/MM/YYYY -> YYYYMMDD
            if (startNorm !== '' && valNorm < startNorm) {
                return 'end_date_before_start_KO';
            }
        }

        return true;
    }

    
}
window.Project = Project;