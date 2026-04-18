/**
 * Clase Validations
 * Gestiona las validaciones atómicas de campos individuales
 * Todas las validaciones reciben como parámetro el id del elemento HTML a validar
 */
class Validations {
    constructor() {}

    /**
     * Validación requerida
     * @param {string} elementId - ID del elemento a validar
     * @returns {boolean|string} true si es válido o mensaje de error
     */
    static isRequired(elementId) {
        const element = document.getElementById(elementId);
        if (!element) return `Elemento no encontrado: ${elementId}`;
        
        const value = element.value ? element.value.trim() : '';
        if (value === '') {
            return 'Campo requerido';
        }
        return true;
    }

    /**
     * Validación de formato de número entero
     * @param {string} elementId - ID del elemento a validar
     * @returns {boolean|string}
     */
    static isInteger(elementId) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        const value = element.value ? element.value.trim() : '';
        if (value === '') return true; // Si está vacío no validar formato
        
        if (!/^\d+$/.test(value)) {
            return 'Solo se permiten dígitos';
        }
        return true;
    }

    /**
     * Validación de tamaño mínimo
     * @param {string} elementId - ID del elemento a validar
     * @param {number} minSize - Tamaño mínimo requerido
     * @returns {boolean|string}
     */
    static hasMinSize(elementId, minSize) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        const value = element.value ? element.value.trim() : '';
        if (value.length < minSize) {
            return `Mínimo ${minSize} caracteres requerido`;
        }
        return true;
    }

    /**
     * Validación de tamaño máximo
     * @param {string} elementId - ID del elemento a validar
     * @param {number} maxSize - Tamaño máximo permitido
     * @returns {boolean|string}
     */
    static hasMaxSize(elementId, maxSize) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        const value = element.value ? element.value.trim() : '';
        if (value.length > maxSize) {
            return `Máximo ${maxSize} caracteres permitido`;
        }
        return true;
    }

    /**
     * Validación de formato: sin acentos ni ñ
     * @param {string} elementId - ID del elemento a validar
     * @returns {boolean|string}
     */
    static noAccents(elementId) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        const value = element.value ? element.value.trim() : '';
        if (value === '') return true;
        
        // Expresión regular que detecta acentos y ñ
        if (/[áéíóúàèìòùâêîôûäëïöüãõ\ñ]/i.test(value)) {
            return 'No se permiten acentos o ñ';
        }
        return true;
    }

    /**
     * Validación de formato: sin espacios
     * @param {string} elementId - ID del elemento a validar
     * @returns {boolean|string}
     */
    static noSpaces(elementId) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        const value = element.value ? element.value : '';
        if (value === '') return true;
        
        if (/\s/.test(value)) {
            return 'No se permiten espacios';
        }
        return true;
    }

    /**
     * Validación de formato de fecha DD-MM-YYYY
     * @param {string} elementId - ID del elemento a validar
     * @returns {boolean|string}
     */
    static isValidDate(elementId) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        const value = element.value ? element.value.trim() : '';
        if (value === '') return true;
        
        if (!/^\d{2}-\d{2}-\d{4}$/.test(value)) {
            return 'Formato debe ser DD-MM-YYYY';
        }

        const [day, month, year] = value.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        
        if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
            return 'Fecha inválida';
        }
        return true;
    }

    /**
     * Validación de rango de fecha (fecha mínima)
     * @param {string} elementId - ID del elemento a validar
     * @param {number} minYear - Año mínimo permitido
     * @returns {boolean|string}
     */
    static dateNotBefore(elementId, minYear) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        const value = element.value ? element.value.trim() : '';
        if (value === '') return true;
        
        const dateValidation = this.isValidDate(elementId);
        if (dateValidation !== true) return dateValidation;

        const [day, month, year] = value.split('-').map(Number);
        if (year < minYear) {
            return `Año debe ser mayor o igual a ${minYear}`;
        }
        return true;
    }

    /**
     * Validación de rango de fecha (fecha máxima)
     * @param {string} elementId - ID del elemento a validar
     * @param {number} maxYear - Año máximo permitido
     * @returns {boolean|string}
     */
    static dateNotAfter(elementId, maxYear) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        const value = element.value ? element.value.trim() : '';
        if (value === '') return true;
        
        const dateValidation = this.isValidDate(elementId);
        if (dateValidation !== true) return dateValidation;

        const [day, month, year] = value.split('-').map(Number);
        if (year > maxYear) {
            return `Año debe ser menor o igual a ${maxYear}`;
        }
        return true;
    }

    /**
     * Validación de archivo: tipo permitido
     * @param {string} elementId - ID del elemento a validar
     * @param {Array} allowedTypes - Array de tipos MIME permitidos
     * @returns {boolean|string}
     */
    static isValidFileType(elementId, allowedTypes) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        if (!element.files || element.files.length === 0) return true;
        
        const file = element.files[0];
        if (!allowedTypes.includes(file.type)) {
            return `Tipo de archivo no permitido: ${file.type}`;
        }
        return true;
    }

    /**
     * Validación de archivo: tamaño máximo en bytes
     * @param {string} elementId - ID del elemento a validar
     * @param {number} maxSizeBytes - Tamaño máximo en bytes
     * @returns {boolean|string}
     */
    static validateFileSize(elementId, maxSizeBytes) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        if (!element.files || element.files.length === 0) return true;
        
        const file = element.files[0];
        if (file.size > maxSizeBytes) {
            const maxSizeMB = (maxSizeBytes / (1024 * 1024)).toFixed(1);
            return `El archivo no debe superar ${maxSizeMB}MB`;
        }
        return true;
    }

    /**
     * Validación de rango de valores para SELECT
     * @param {string} elementId - ID del elemento a validar
     * @param {Array} validValues - Array de valores válidos
     * @returns {boolean|string}
     */
    static isValidOption(elementId, validValues) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        const value = element.value ? element.value.trim() : '';
        if (value === '') return true;
        
        if (!validValues.includes(value)) {
            return `Valor no válido: ${value}`;
        }
        return true;
    }

    /**
     * Validación personalizada: ejecuta una función personalizada
     * @param {string} elementId - ID del elemento a validar
     * @param {Function} customFunction - Función de validación personalizada
     * @returns {boolean|string}
     */
    static executeCustomValidation(elementId, customFunction) {
        const element = document.getElementById(elementId);
        if (!element) return false;
        
        try {
            return customFunction(element.value);
        } catch (error) {
            return `Error en validación personalizada: ${error.message}`;
        }
    }
}
