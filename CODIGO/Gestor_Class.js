/**
 * Clase Gestor
 * Gestiona la carga y validación de estructura de entidades
 * Proporciona interfaz para acceder a Tests de Atributos y Formularios
 */
class Gestor {
    constructor(entityName) {
        this.entityName = entityName;
        this.entityData = {};
        this.validateEntityFiles();
    }

    /**
     * Valida que existan todos los ficheros y variables requeridas para la entidad
     * @throws {Error} si algún fichero o variable no existe
     */
    validateEntityFiles() {
        const errors = [];

        // Verificar variable estructura
        const estructuraVarName = `${this.entityName}_estructura`;
        if (typeof window[estructuraVarName] === 'undefined') {
            errors.push(`Variable ${estructuraVarName} no encontrada`);
        } else {
            this.entityData.estructura = window[estructuraVarName];
        }

        // Verificar array de definición de tests
        const defTestsVarName = `${this.entityName}_def_tests`;
        if (typeof window[defTestsVarName] === 'undefined') {
            errors.push(`Variable ${defTestsVarName} no encontrada`);
        } else {
            this.entityData.def_tests = window[defTestsVarName];
        }

        // Verificar array de pruebas
        const pruebasVarName = `${this.entityName}_tests_fields`;
        if (typeof window[pruebasVarName] === 'undefined') {
            errors.push(`Variable ${pruebasVarName} no encontrada`);
        } else {
            this.entityData.tests_fields = window[pruebasVarName];
        }

        // Verificar variable TestSubmit
        const testSubmitVarName = `${this.entityName}_TestSubmit`;
        if (typeof window[testSubmitVarName] === 'undefined') {
            errors.push(`Variable ${testSubmitVarName} no encontrada`);
        } else {
            this.entityData.testSubmit = window[testSubmitVarName];
        }

        // Intentar cargar clase de entidad (opcional)
        const classNameCapitalized = this.entityName
            .split('_')
            .map(part => part.charAt(0).toUpperCase() + part.slice(1))
            .join('');
        
        const ClassConstructor = window[classNameCapitalized];
        if (typeof ClassConstructor !== 'undefined') {
            try {
                this.entityData.entityClass = new ClassConstructor();
            } catch (e) {
                console.warn(`No se pudo instanciar clase ${classNameCapitalized}: ${e.message}`);
            }
        }

        if (errors.length > 0) {
            throw new Error('Errores en la configuración de la entidad:\n' + errors.join('\n'));
        }
    }

    /**
     * Carga la interfaz de la entidad en el área de trabajo
     * @param {HTMLElement} workArea - Elemento contenedor donde mostrar la interfaz
     */
    loadEntity(workArea) {
        workArea.innerHTML = `
            <div class="entity-header">
                <h2>${this.entityName.charAt(0).toUpperCase() + this.entityName.slice(1)}</h2>
                <p class="entity-description">Selecciona una opción para comenzar los tests</p>
            </div>
            <div class="entity-buttons">
                <button class="btn-entity" onclick="testAttributesButton('${this.entityName}')">
                    🔬 Test de Atributos
                </button>
                <button class="btn-entity" onclick="testFormButton('${this.entityName}')">
                    📋 Test de Formulario
                </button>
            </div>
        `;

        // Agregar estilos adicionales
        this.addEntityStyles();
    }

    /**
     * Agrega estilos específicos para la visualización de entidad
     */
    addEntityStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .entity-header {
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 2px solid #667eea;
            }
            .entity-header h2 {
                color: #667eea;
                font-size: 24px;
                text-transform: capitalize;
                margin-bottom: 5px;
            }
            .entity-description {
                color: #999;
                font-size: 14px;
            }
        `;
        document.head.appendChild(style);
    }

    /**
     * Obtiene la estructura de la entidad
     * @returns {Array} Array con la estructura de la entidad
     */
    getStructure() {
        return this.entityData.estructura || [];
    }

    /**
     * Obtiene las definiciones de tests
     * @returns {Array} Array de definiciones de tests
     */
    getDefTests() {
        return this.entityData.def_tests || [];
    }

    /**
     * Obtiene las pruebas/valores de test
     * @returns {Array} Array de valores de prueba
     */
    getTestsFields() {
        return this.entityData.tests_fields || [];
    }

    /**
     * Obtiene los tests de submit del formulario
     * @returns {Array} Array de tests de submit
     */
    getTestSubmit() {
        return this.entityData.testSubmit || [];
    }

    /**
     * Obtiene la clase de entidad si existe
     * @returns {Object|null} Instancia de la clase de entidad o null
     */
    getEntityClass() {
        return this.entityData.entityClass || null;
    }

    /**
     * Valida que la estructura sea correcta
     * @returns {Object} Objeto con información de validación
     */
    validateStructure() {
        const estructura = this.getStructure();
        
        if (!estructura || typeof estructura !== 'object') {
            return { valid: false, error: 'Estructura no existe o no es un objeto' };
        }

        const attributes = estructura.attributes;
        if (!attributes || typeof attributes !== 'object' || Array.isArray(attributes)) {
            return { valid: false, error: 'Attributes no existe o no es un objeto válido' };
        }

        // Obtener claves de atributos
        const attrKeys = Object.keys(attributes);
        if (attrKeys.length === 0) {
            return { valid: false, error: 'Estructura vacía' };
        }

        // Validar que cada atributo tiene los campos requeridos
        const requiredSections = ['html', 'db', 'rules'];
        let validCount = 0;

        for (const attrName of attrKeys) {
            const attr = attributes[attrName];
            let isValid = true;
            
            for (const section of requiredSections) {
                if (!(section in attr)) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) validCount++;
        }

        return {
            valid: validCount === attrKeys.length,
            totalAttributes: attrKeys.length,
            validAttributes: validCount,
            attributes: attrKeys
        };
    }

    /**
     * Valida que las definiciones de tests sean correctas
     * @returns {Object} Objeto con información de validación
     */
    validateDefTests() {
        const defTests = this.getDefTests();
        const estructura = this.getStructure();
        
        if (!Array.isArray(defTests)) {
            return { valid: false, error: 'defTests no es un array' };
        }

        const defTestsByAttribute = {};
        let validCount = 0;

        for (const test of defTests) {
            // Validar estructura de test definition
            if (Array.isArray(test) && test.length >= 5) {
                validCount++;
                const attrName = test[1];
                if (!defTestsByAttribute[attrName]) {
                    defTestsByAttribute[attrName] = 0;
                }
                defTestsByAttribute[attrName]++;
            }
        }

        return {
            valid: validCount === defTests.length,
            totalTests: defTests.length,
            validTests: validCount,
            testsByAttribute: defTestsByAttribute
        };
    }

    /**
     * Valida que las pruebas sean correctas
     * @returns {Object} Objeto con información de validación
     */
    validateTests() {
        const testsFields = this.getTestsFields();
        
        if (!Array.isArray(testsFields)) {
            return { valid: false, error: 'testsFields no es un array' };
        }

        let successCount = 0;
        let errorCount = 0;
        let validStructure = 0;

        for (const test of testsFields) {
            if (Array.isArray(test) && test.length >= 6) {
                validStructure++;
                const expectedResult = test[6];
                if (expectedResult === true) {
                    successCount++;
                } else if (typeof expectedResult === 'string') {
                    errorCount++;
                }
            }
        }

        return {
            valid: validStructure === testsFields.length,
            totalTests: testsFields.length,
            validStructure: validStructure,
            successTests: successCount,
            errorTests: errorCount
        };
    }
}

/**
 * Función global para manejar clicks en botón de test de atributos
 */
function testAttributesButton(entityName) {
    try {
        const gestor = new Gestor(entityName);
        const testForm = new TestForm(entityName, gestor);
        testForm.showWindow();
    } catch (error) {
        showErrorModal('Error al ejecutar test de atributos: ' + error.message);
    }
}

/**
 * Función global para manejar clicks en botón de test de formulario
 */
function testFormButton(entityName) {
    try {
        const gestor = new Gestor(entityName);
        const testSubmit = new TestSubmit(entityName, gestor);
        testSubmit.showWindow();
    } catch (error) {
        showErrorModal('Error al ejecutar test de formulario: ' + error.message);
    }
}
