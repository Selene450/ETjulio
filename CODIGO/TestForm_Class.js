/**
 * Clase TestForm
 * Verifica la estructura de la entidad, definiciones de test y ejecuta todas las validaciones
 */
class TestForm {
    constructor(entityName, structure) {
        this.entityName = entityName;
        this.structure = structure;
        this.resultsWindow = null;
        this.testDefinitions = null;
        this.testData = null;
    }

    /**
     * Inicia el análisis completo de la entidad
     */
    analyze() {
        const structureAnalysis = this.analyzeStructure();
        if (!structureAnalysis.valid) {
            this.showError('Error en la estructura', structureAnalysis.error);
            return false;
        }

        const definitionsAnalysis = this.analyzeTestDefinitions();
        const dataAnalysis = this.analyzeTestData();
        const executionResults = this.executeAllTests();

        this.displayResults({
            structure: structureAnalysis,
            definitions: definitionsAnalysis,
            data: dataAnalysis,
            execution: executionResults
        });

        return true;
    }

    /**
     * Analiza la estructura de la entidad
     * @returns {Object} Resultado del análisis
     */
    analyzeStructure() {
        if (!this.structure || typeof this.structure !== 'object') {
            return {
                valid: false,
                error: 'La estructura no existe o no es válida'
            };
        }

        const attributes = this.structure.attributes;
        if (!attributes || typeof attributes !== 'object' || Array.isArray(attributes)) {
            return {
                valid: false,
                error: 'No se encontraron atributos válidos en la estructura'
            };
        }

        const attributeNames = Object.keys(attributes);
        if (attributeNames.length === 0) {
            return {
                valid: false,
                error: 'No se encontraron atributos en la estructura'
            };
        }

        const attributeList = attributeNames.join(', ');
        const attributeDetails = attributeNames.map(name => ({
            name: name,
            ...attributes[name]
        }));

        return {
            valid: true,
            count: attributeNames.length,
            attributes: attributeList,
            attributeDetails: attributeDetails
        };
    }

    /**
     * Analiza las definiciones de test
     * @returns {Object} Resultado del análisis
     */
    analyzeTestDefinitions() {
        try {
            const globalVarName = `${this.entityName}_def_tests`;
            const testDefinitions = window[globalVarName];

            if (!testDefinitions) {
                return {
                    valid: false,
                    count: 0,
                    wellDefined: 0,
                    error: `Variable ${globalVarName} no encontrada`
                };
            }

            if (!Array.isArray(testDefinitions)) {
                return {
                    valid: false,
                    count: 0,
                    wellDefined: 0,
                    error: `${globalVarName} no es un array`
                };
            }

            let wellDefinedCount = 0;
            const issues = [];

            for (let i = 0; i < testDefinitions.length; i++) {
                const def = testDefinitions[i];
                
                // Validar formato de array: [entity, field, type, id, description, action, expectedResult, errorMessage]
                if (!Array.isArray(def) || def.length < 7) {
                    issues.push(`Test ${i + 1}: Formato inválido`);
                    continue;
                }
                
                const [entity, field, type, id, description, action, expectedResult] = def;
                
                if (!entity || !field || !type || id === undefined || !description || !action || expectedResult === undefined) {
                    issues.push(`Test ${i + 1}: Falta algún campo requerido`);
                    continue;
                }

                wellDefinedCount++;
            }

            this.testDefinitions = testDefinitions;

            return {
                valid: wellDefinedCount === testDefinitions.length,
                count: testDefinitions.length,
                wellDefined: wellDefinedCount,
                issues: issues
            };
        } catch (error) {
            return {
                valid: false,
                count: 0,
                wellDefined: 0,
                error: `Error analysing definitions: ${error.message}`
            };
        }
    }

    /**
     * Analiza los datos de test
     * @returns {Object} Resultado del análisis
     */
    analyzeTestData() {
        try {
            const globalVarName = `${this.entityName}_tests_fields`;
            const testData = window[globalVarName];

            if (!testData) {
                return {
                    valid: false,
                    count: 0,
                    wellTyped: 0,
                    error: `Variable ${globalVarName} no encontrada`
                };
            }

            if (!Array.isArray(testData)) {
                return {
                    valid: false,
                    count: 0,
                    wellTyped: 0,
                    error: `${globalVarName} no es un array`
                };
            }

            let wellTypedCount = 0;
            const typeIssues = [];

            for (let i = 0; i < testData.length; i++) {
                const test = testData[i];
                
                // Validar formato de array: [entity, field, type, id, description, action, expectedResult, errorMessage]
                if (!Array.isArray(test) || test.length < 7) {
                    typeIssues.push(`Test ${i + 1}: Formato inválido`);
                    continue;
                }

                const [entity, field, type, id, description, action, expectedResult, errorMessage] = test;
                
                // Validar que los campos requeridos tengan valores
                if (id === undefined || !field) {
                    typeIssues.push(`Test ${i + 1}: Falta id o field`);
                    continue;
                }

                wellTypedCount++;
            }

            this.testData = testData;

            return {
                valid: wellTypedCount === testData.length,
                count: testData.length,
                wellTyped: wellTypedCount,
                byType: this.countTestsByType(testData),
                issues: typeIssues
            };
        } catch (error) {
            return {
                valid: false,
                count: 0,
                wellTyped: 0,
                error: `Error analysing data: ${error.message}`
            };
        }
    }

    /**
     * Cuenta los tests por tipo (error/success)
     * @private
     */
    countTestsByType(testData) {
        let errorCount = 0;
        let successCount = 0;

        for (const test of testData) {
            if (test.error === true) {
                errorCount++;
            } else {
                successCount++;
            }
        }

        return {
            error: errorCount,
            success: successCount,
            total: testData.length
        };
    }

    /**
     * Ejecuta todos los tests para verificar que funcionan correctamente
     * @returns {Object} Resultado de la ejecución
     */
    executeAllTests() {
        if (!this.testData || !Array.isArray(this.testData)) {
            return {
                executed: 0,
                correct: 0,
                incorrect: 0,
                results: []
            };
        }

        const results = [];
        let correctedCount = 0;
        let incorrectCount = 0;

        for (let i = 0; i < this.testData.length; i++) {
            const test = this.testData[i];
            const result = this.executeIndividualTest(test, i);
            
            results.push(result);

            if (result.passed) {
                correctedCount++;
            } else {
                incorrectCount++;
            }
        }

        return {
            executed: this.testData.length,
            correct: correctedCount,
            incorrect: incorrectCount,
            results: results
        };
    }

    /**
     * Ejecuta una prueba individual
     * @private
     */
    executeIndividualTest(test, index) {
        try {
            // Desestructurar el array: [entity, field, type, id, description, action, expectedResult, errorMessage]
            const [entity, field, type, id, description, action, expectedResult, errorMessage] = test;
            
            const testDef = this.testDefinitions[id - 1];
            
            if (!testDef) {
                return {
                    testNumber: index + 1,
                    testId: id,
                    passed: false,
                    message: 'Definición de test no encontrada'
                };
            }

            // Crear elemento temporal para validación
            const tempElement = document.createElement('div');
            tempElement.id = `temp_test_${index}`;
            tempElement.style.display = 'none';
            tempElement.innerHTML = `<input id="field_${index}" value="${expectedResult || ''}">`;
            document.body.appendChild(tempElement);

            // Ejecutar validación según el tipo
            let validationResult = true;
            let message = '';

            try {
                validationResult = this.runValidation(testDef, `field_${index}`);
                message = validationResult === true ? 'Validación pasada' : validationResult;
            } catch (error) {
                message = `Error: ${error.message}`;
            }

            // Verificar si el resultado es el esperado (true = sin error, string = con error esperado)
            const shouldHaveError = typeof expectedResult === 'string';
            const hasError = validationResult !== true;
            const passed = shouldHaveError === hasError;

            // Limpiar elemento temporal
            document.body.removeChild(tempElement);

            return {
                testNumber: index + 1,
                testId: id,
                testName: description,
                value: expectedResult,
                shouldHaveError: shouldHaveError,
                hasError: hasError,
                passed: passed,
                message: message
            };
        } catch (error) {
            return {
                testNumber: index + 1,
                passed: false,
                message: `Excepción: ${error.message}`
            };
        }
    }

    /**
     * Ejecuta una validación individual
     * @private
     */
    runValidation(testDef, elementId) {
        const rule = testDef.rule;
        const params = testDef.params || {};

        switch (rule) {
            case 'required':
                return Validations.isRequired(elementId);
            case 'integer':
                return Validations.isInteger(elementId);
            case 'minSize':
                return Validations.hasMinSize(elementId, params.size);
            case 'maxSize':
                return Validations.hasMaxSize(elementId, params.size);
            default:
                return true;
        }
    }

    /**
     * Muestra los resultados en una ventana modal
     * @param {Object} analysisResults - Resultados del análisis
     */
    displayResults(analysisResults) {
        const modal = this.createResultsModal(analysisResults);
        document.body.appendChild(modal);
    }

    /**
     * Crea el modal de resultados
     * @private
     */
    createResultsModal(results) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'flex';

        const content = document.createElement('div');
        content.className = 'modal-content';
        content.style.maxHeight = '90vh';
        content.style.overflow = 'auto';

        // Encabezado
        const header = document.createElement('div');
        header.className = 'modal-header';
        const title = document.createElement('h2');
        title.textContent = `Verificación de Tests - ${this.entityName}`;
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = () => modal.remove();

        header.appendChild(title);
        header.appendChild(closeBtn);
        content.appendChild(header);

        // Análisis de estructura
        content.appendChild(this.createStructureSection(results.structure));

        // Análisis de definiciones
        content.appendChild(this.createDefinitionsSection(results.definitions));

        // Análisis de datos
        content.appendChild(this.createDataSection(results.data));

        // Resultados de ejecución
        content.appendChild(this.createExecutionSection(results.execution));

        // Botones de acción
        content.appendChild(this.createActionButtons(results.execution));

        modal.appendChild(content);
        return modal;
    }

    /**
     * Crea sección de estructura
     * @private
     */
    createStructureSection(structure) {
        const section = document.createElement('div');
        section.className = 'modal-section';
        section.style.padding = '15px';
        section.style.borderBottom = '1px solid #e0e0e0';

        const title = document.createElement('h3');
        title.textContent = 'Estructura de la Entidad';
        section.appendChild(title);

        if (!structure.valid) {
            const error = document.createElement('p');
            error.style.color = '#f44336';
            error.textContent = structure.error;
            section.appendChild(error);
        } else {
            const info = document.createElement('div');
            info.style.fontSize = '14px';
            info.innerHTML = `
                <p><strong>Total de atributos:</strong> ${structure.count}</p>
                <p><strong>Atributos:</strong> ${structure.attributes}</p>
            `;
            section.appendChild(info);
        }

        return section;
    }

    /**
     * Crea sección de definiciones
     * @private
     */
    createDefinitionsSection(definitions) {
        const section = document.createElement('div');
        section.className = 'modal-section';
        section.style.padding = '15px';
        section.style.borderBottom = '1px solid #e0e0e0';

        const title = document.createElement('h3');
        title.textContent = 'Definiciones de Test';
        section.appendChild(title);

        if (definitions.error) {
            const error = document.createElement('p');
            error.style.color = '#f44336';
            error.textContent = definitions.error;
            section.appendChild(error);
        } else {
            const info = document.createElement('div');
            info.style.fontSize = '14px';
            info.innerHTML = `
                <p><strong>Total de definiciones:</strong> ${definitions.count}</p>
                <p><strong>Bien definidas:</strong> ${definitions.wellDefined}</p>
                ${definitions.issues.length > 0 ? `
                    <p><strong style="color: #ff9800;">Problemas encontrados:</strong></p>
                    <ul style="margin: 5px 0; padding-left: 20px;">
                        ${definitions.issues.map(issue => `<li>${issue}</li>`).join('')}
                    </ul>
                ` : ''}
            `;
            section.appendChild(info);
        }

        return section;
    }

    /**
     * Crea sección de datos
     * @private
     */
    createDataSection(data) {
        const section = document.createElement('div');
        section.className = 'modal-section';
        section.style.padding = '15px';
        section.style.borderBottom = '1px solid #e0e0e0';

        const title = document.createElement('h3');
        title.textContent = 'Datos de Test';
        section.appendChild(title);

        if (data.error) {
            const error = document.createElement('p');
            error.style.color = '#f44336';
            error.textContent = data.error;
            section.appendChild(error);
        } else {
            const info = document.createElement('div');
            info.style.fontSize = '14px';
            info.innerHTML = `
                <p><strong>Total de pruebas:</strong> ${data.count}</p>
                <p><strong>Bien tipificadas:</strong> ${data.wellTyped}</p>
                <p><strong>Pruebas de error:</strong> ${data.byType.error}</p>
                <p><strong>Pruebas de éxito:</strong> ${data.byType.success}</p>
                ${data.issues.length > 0 ? `
                    <p><strong style="color: #ff9800;">Problemas encontrados:</strong></p>
                    <ul style="margin: 5px 0; padding-left: 20px;">
                        ${data.issues.map(issue => `<li>${issue}</li>`).join('')}
                    </ul>
                ` : ''}
            `;
            section.appendChild(info);
        }

        return section;
    }

    /**
     * Crea sección de resultados de ejecución
     * @private
     */
    createExecutionSection(execution) {
        const section = document.createElement('div');
        section.className = 'modal-section';
        section.style.padding = '15px';
        section.style.borderBottom = '1px solid #e0e0e0';

        const title = document.createElement('h3');
        title.textContent = 'Resultados de Ejecución de Tests';
        section.appendChild(title);

        const summary = document.createElement('div');
        summary.style.fontSize = '14px';
        summary.style.marginBottom = '15px';
        summary.innerHTML = `
            <p><strong>Pruebas ejecutadas:</strong> ${execution.executed}</p>
            <p style="color: #4caf50;"><strong>Correctas:</strong> ${execution.correct}</p>
            <p style="color: #f44336;"><strong>Incorrectas:</strong> ${execution.incorrect}</p>
        `;
        section.appendChild(summary);

        return section;
    }

    /**
     * Crea botones de acciones
     * @private
     */
    createActionButtons(execution) {
        const section = document.createElement('div');
        section.style.padding = '15px';
        section.style.textAlign = 'center';
        section.style.backgroundColor = '#f5f5f5';

        const button = document.createElement('button');
        button.textContent = 'Ver Detalles de cada Prueba';
        button.style.padding = '10px 20px';
        button.style.backgroundColor = '#667eea';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '4px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '14px';

        button.onclick = () => {
            this.showDetailedResults(execution.results);
        };

        section.appendChild(button);
        return section;
    }

    /**
     * Muestra resultados detallados de cada prueba
     */
    showDetailedResults(results) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'flex';

        const content = document.createElement('div');
        content.className = 'modal-content';
        content.style.maxHeight = '90vh';
        content.style.overflow = 'auto';

        // Encabezado
        const header = document.createElement('div');
        header.className = 'modal-header';
        const title = document.createElement('h2');
        title.textContent = 'Detalles de Pruebas';
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = () => modal.remove();

        header.appendChild(title);
        header.appendChild(closeBtn);
        content.appendChild(header);

        // Resultados en tabla
        const table = document.createElement('table');
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.style.fontSize = '13px';
        table.style.margin = '15px';

        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                <th style="padding: 10px; text-align: left;">#</th>
                <th style="padding: 10px; text-align: left;">Nombre del Test</th>
                <th style="padding: 10px; text-align: left;">Valor</th>
                <th style="padding: 10px; text-align: center;">Esperado</th>
                <th style="padding: 10px; text-align: center;">Obtenido</th>
                <th style="padding: 10px; text-align: center;">Estado</th>
            </tr>
        `;
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        for (const result of results) {
            const row = document.createElement('tr');
            row.style.borderBottom = '1px solid #e0e0e0';
            
            const statusColor = result.passed ? '#4caf50' : '#f44336';
            const statusText = result.passed ? '✓' : '✗';

            row.innerHTML = `
                <td style="padding: 10px;">${result.testNumber}</td>
                <td style="padding: 10px;">${result.testName || 'N/A'}</td>
                <td style="padding: 10px;">${result.value || 'vacío'}</td>
                <td style="padding: 10px; text-align: center;">${result.expectedError ? 'Error' : 'Éxito'}</td>
                <td style="padding: 10px; text-align: center;">${result.gotError ? 'Error' : 'Éxito'}</td>
                <td style="padding: 10px; text-align: center; color: ${statusColor}; font-weight: bold;">${statusText}</td>
            `;
            tbody.appendChild(row);
        }
        table.appendChild(tbody);

        content.appendChild(table);
        modal.appendChild(content);
        document.body.appendChild(modal);
    }

    /**
     * Muestra un error
     * @private
     */
    showError(title, message) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'flex';

        const content = document.createElement('div');
        content.className = 'modal-content';

        const header = document.createElement('div');
        header.className = 'modal-header';
        header.style.backgroundColor = '#f44336';
        const titleEl = document.createElement('h2');
        titleEl.textContent = title;
        titleEl.style.color = 'white';
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = 'white';
        closeBtn.onclick = () => modal.remove();

        header.appendChild(titleEl);
        header.appendChild(closeBtn);
        content.appendChild(header);

        const body = document.createElement('div');
        body.style.padding = '20px';
        body.textContent = message;
        content.appendChild(body);

        modal.appendChild(content);
        document.body.appendChild(modal);
    }
}
