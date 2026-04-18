/**
 * Clase ValidateFieldsForm
 * Crea campos HTML individuales para cada atributo y ejecuta validaciones
 */
class ValidateFieldsForm {
    constructor(fieldDefinition, value = '') {
        this.field = fieldDefinition;
        this.value = value;
        this.elementId = `field_${fieldDefinition.name || 'default'}`;
    }

    /**
     * Crea el elemento HTML correspondiente al tipo de campo
     * @returns {string} HTML del campo
     */
    createField() {
        const field = this.field;
        const value = this.value || '';

        switch (field.type) {
            case 'input':
                return this.createInputField(value);
            case 'textarea':
                return this.createTextareaField(value);
            case 'select':
                return this.createSelectField(value);
            case 'date':
                return this.createDateField(value);
            case 'file':
                return this.createFileField();
            default:
                return this.createInputField(value);
        }
    }

    /**
     * Crea un campo de texto input
     * @private
     */
    createInputField(value) {
        return `
            <div class="form-group">
                <label for="${this.elementId}">${this.field.name}</label>
                <input 
                    type="text" 
                    id="${this.elementId}" 
                    value="${value || ''}"
                    placeholder="${this.field.name}"
                    data-field-name="${this.field.name}"
                >
            </div>
        `;
    }

    /**
     * Crea un campo de área de texto textarea
     * @private
     */
    createTextareaField(value) {
        return `
            <div class="form-group">
                <label for="${this.elementId}">${this.field.name}</label>
                <textarea 
                    id="${this.elementId}"
                    placeholder="${this.field.name}"
                    data-field-name="${this.field.name}"
                >${value || ''}</textarea>
            </div>
        `;
    }

    /**
     * Crea un campo de selección select
     * @private
     */
    createSelectField(value) {
        const options = this.field.options || [];
        let optionsHTML = '<option value="">-- Seleccionar --</option>';
        
        for (const option of options) {
            const selected = option === value ? 'selected' : '';
            optionsHTML += `<option value="${option}" ${selected}>${option}</option>`;
        }

        return `
            <div class="form-group">
                <label for="${this.elementId}">${this.field.name}</label>
                <select 
                    id="${this.elementId}"
                    data-field-name="${this.field.name}"
                >
                    ${optionsHTML}
                </select>
            </div>
        `;
    }

    /**
     * Crea un campo de fecha
     * @private
     */
    createDateField(value) {
        return `
            <div class="form-group">
                <label for="${this.elementId}">${this.field.name} (DD-MM-YYYY)</label>
                <input 
                    type="text" 
                    id="${this.elementId}"
                    value="${value || ''}"
                    placeholder="DD-MM-YYYY"
                    data-field-name="${this.field.name}"
                >
            </div>
        `;
    }

    /**
     * Crea un campo de archivo
     * @private
     */
    createFileField() {
        return `
            <div class="form-group">
                <label for="${this.elementId}">${this.field.name}</label>
                <input 
                    type="file" 
                    id="${this.elementId}"
                    data-field-name="${this.field.name}"
                >
            </div>
        `;
    }

    /**
     * Obtiene el valor actual del campo
     * @returns {*} Valor del campo
     */
    getValue() {
        const element = document.getElementById(this.elementId);
        if (!element) return null;

        if (this.field.type === 'file') {
            return element.files.length > 0 ? element.files[0] : null;
        }

        return element.value || null;
    }

    /**
     * Establece el valor del campo
     * @param {*} value - Valor a establecer
     */
    setValue(value) {
        const element = document.getElementById(this.elementId);
        if (!element) return;

        if (this.field.type === 'file') {
            // No se puede setear valor de file por seguridad
            return;
        }

        element.value = value || '';
    }

    /**
     * Ejecuta todas las validaciones del campo
     * @param {Object} entityClass - Instancia de la clase de entidad (opcional)
     * @returns {Object} Resultado de las validaciones
     */
    validateField(entityClass = null) {
        const validations = this.field.validations || [];
        const results = {
            fieldName: this.field.name,
            isValid: true,
            errors: [],
            warnings: []
        };

        for (const validation of validations) {
            const result = this.executeValidation(validation, entityClass);
            
            if (result !== true) {
                results.isValid = false;
                results.errors.push({
                    rule: validation.rule,
                    message: result
                });
            }
        }

        return results;
    }

    /**
     * Ejecuta una validación individual
     * @private
     */
    executeValidation(validation, entityClass = null) {
        const rule = validation.rule;
        const params = validation.params || {};

        // Validaciones personalizadas
        if (validation.personalize && entityClass) {
            const methodName = `${this.field.name}_personalized_validation`;
            if (typeof entityClass[methodName] === 'function') {
                try {
                    return entityClass[methodName](this.getValue());
                } catch (error) {
                    return `Error en validación personalizada: ${error.message}`;
                }
            }
        }

        // Validaciones estándar
        switch (rule) {
            case 'required':
                return Validations.isRequired(this.elementId);
            
            case 'integer':
                return Validations.isInteger(this.elementId);
            
            case 'minSize':
                return Validations.hasMinSize(this.elementId, params.size);
            
            case 'maxSize':
                return Validations.hasMaxSize(this.elementId, params.size);
            
            case 'noAccents':
                return Validations.noAccents(this.elementId);
            
            case 'noSpaces':
                return Validations.noSpaces(this.elementId);
            
            case 'validDate':
                return Validations.isValidDate(this.elementId);
            
            case 'dateNotBefore':
                return Validations.dateNotBefore(this.elementId, params.year);
            
            case 'dateNotAfter':
                return Validations.dateNotAfter(this.elementId, params.year);
            
            case 'fileType':
                return Validations.isValidFileType(this.elementId, params.types);
            
            case 'fileSize':
                return Validations.validateFileSize(this.elementId, params.maxBytes);
            
            case 'validOption':
                return Validations.isValidOption(this.elementId, params.values);
            
            default:
                return true;
        }
    }

    /**
     * Limpia el campo
     */
    clear() {
        this.setValue('');
    }

    /**
     * Obtiene el ID del elemento HTML
     * @returns {string} ID del elemento
     */
    getElementId() {
        return this.elementId;
    }
}

// Agregador de estilos para formularios
const formStyles = document.createElement('style');
formStyles.textContent = `
    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 8px;
        color: #333;
    }

    .form-group input,
    .form-group textarea,
    .form-group select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-family: inherit;
        font-size: 14px;
        transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
        outline: none;
        border-color: #667eea;
        box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
    }

    .form-group textarea {
        resize: vertical;
        min-height: 120px;
    }

    .form-group.error input,
    .form-group.error textarea,
    .form-group.error select {
        border-color: #f44336;
        background-color: #ffebee;
    }

    .form-group.success input,
    .form-group.success textarea,
    .form-group.success select {
        border-color: #4caf50;
        background-color: #e8f5e9;
    }
`;
document.head.appendChild(formStyles);
