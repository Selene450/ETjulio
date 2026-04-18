/**
 * Clase TestSubmit
 * Verifica la validación y envío de formularios para cada acción (CREATE, UPDATE, EDIT, DELETE, READ)
 */
class TestSubmit {
    constructor(entityName, testSubmitData) {
        this.entityName = entityName;
        this.testSubmitData = testSubmitData;
        this.resultsWindow = null;
    }

    /**
     * Inicia el análisis de pruebas de submit
     */
    analyze() {
        if (!this.testSubmitData) {
            this.showError('Error', `No se encontraron pruebas de submit para ${this.entityName}`);
            return false;
        }

        const analyses = this.analyzeAllActions();
        this.displayResults(analyses);
        return true;
    }

    /**
     * Analiza todas las acciones (CREATE, UPDATE, EDIT, DELETE, READ)
     * @returns {Object} Análisis para cada acción
     */
    analyzeAllActions() {
        const actions = ['CREATE', 'UPDATE', 'EDIT', 'DELETE', 'READ'];
        const analyses = {};

        for (const action of actions) {
            analyses[action] = this.analyzeAction(action);
        }

        return analyses;
    }

    /**
     * Analiza una acción específica
     * @private
     */
    analyzeAction(action) {
        // Buscar tests para esta acción
        const actionTests = this.findTestsForAction(action);

        if (!actionTests || actionTests.length === 0) {
            return {
                action: action,
                found: false,
                count: 0,
                correct: 0,
                incorrect: 0,
                results: []
            };
        }

        // Ejecutar cada test
        let correctCount = 0;
        let incorrectCount = 0;
        const results = [];

        for (let i = 0; i < actionTests.length; i++) {
            const test = actionTests[i];
            const result = this.executeSubmitTest(action, test, i);
            results.push(result);

            if (result.correct) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        }

        return {
            action: action,
            found: true,
            count: actionTests.length,
            correct: correctCount,
            incorrect: incorrectCount,
            results: results
        };
    }

    /**
     * Encuentra los tests para una acción específica
     * @private
     */
    findTestsForAction(action) {
        if (!this.testSubmitData || !Array.isArray(this.testSubmitData)) {
            return [];
        }

        return this.testSubmitData.filter(test => {
            return test.action && test.action.toUpperCase() === action.toUpperCase();
        });
    }

    /**
     * Ejecuta una prueba de submit individual
     * @private
     */
    executeSubmitTest(action, test, index) {
        try {
            // Crear objeto simulado de datos de formulario
            const formData = test.formData || {};

            // Ejecutar CheckSubmit si existe en la clase de entidad
            const entityClassName = `${this.entityName}_Class`;
            const entityClass = window[entityClassName];

            let checkResult = null;

            if (entityClass && typeof entityClass.CheckSubmit === 'function') {
                try {
                    checkResult = entityClass.CheckSubmit(action, formData);
                } catch (error) {
                    checkResult = {
                        valid: false,
                        errors: [error.message]
                    };
                }
            } else {
                // Si no existe CheckSubmit, simular validación básica
                checkResult = this.simulateCheckSubmit(action, formData, test);
            }

            // Determinar si el resultado es correcto
            const isExpectedError = test.expectError === true;
            const hasErrors = checkResult.valid === false || 
                            (checkResult.errors && checkResult.errors.length > 0);
            
            const isCorrect = isExpectedError === hasErrors;

            return {
                testNumber: index + 1,
                action: action,
                description: test.description || `Test ${index + 1} para ${action}`,
                formData: formData,
                expectError: isExpectedError,
                hasErrors: hasErrors,
                errors: checkResult.errors || [],
                correct: isCorrect
            };
        } catch (error) {
            return {
                testNumber: index + 1,
                action: action,
                description: test.description || `Test ${index + 1} para ${action}`,
                expectError: test.expectError,
                hasErrors: true,
                errors: [error.message],
                correct: false
            };
        }
    }

    /**
     * Simula CheckSubmit si la clase de entidad no lo implementa
     * @private
     */
    simulateCheckSubmit(action, formData, test) {
        const errors = [];

        // Validar que los campos requeridos estén presentes
        if (!formData || Object.keys(formData).length === 0) {
            errors.push('Formulario vacío');
        }

        // Validar según la acción
        switch (action.toUpperCase()) {
            case 'CREATE':
                // Para CREATE, todos los campos deben ser válidos
                for (const [key, value] of Object.entries(formData)) {
                    if (!value || value.toString().trim() === '') {
                        errors.push(`Campo ${key} es requerido para CREATE`);
                    }
                }
                break;
            case 'UPDATE':
            case 'EDIT':
                // Para UPDATE/EDIT, debe haber un ID y al menos un campo a actualizar
                if (!formData.id) {
                    errors.push('ID es requerido para UPDATE/EDIT');
                }
                break;
            case 'DELETE':
                // Para DELETE, solo se necesita el ID
                if (!formData.id) {
                    errors.push('ID es requerido para DELETE');
                }
                break;
            case 'READ':
                // Para READ, se puede buscar por ID o por otros criterios
                if (!formData.id && (!formData.search || formData.search.toString().trim() === '')) {
                    errors.push('Se requiere ID o criterio de búsqueda para READ');
                }
                break;
        }

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }

    /**
     * Muestra los resultados en una ventana modal
     */
    displayResults(analyses) {
        const modal = this.createResultsModal(analyses);
        document.body.appendChild(modal);
    }

    /**
     * Crea el modal de resultados
     * @private
     */
    createResultsModal(analyses) {
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
        title.textContent = `Pruebas de Submit - ${this.entityName}`;
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = () => modal.remove();

        header.appendChild(title);
        header.appendChild(closeBtn);
        content.appendChild(header);

        // Resumen por acción
        for (const action of ['CREATE', 'UPDATE', 'EDIT', 'DELETE', 'READ']) {
            const analysis = analyses[action];
            if (analysis.found) {
                content.appendChild(this.createActionSection(analysis));
            }
        }

        // Botón para ver detalles
        content.appendChild(this.createDetailButton(analyses));

        modal.appendChild(content);
        return modal;
    }

    /**
     * Crea sección para cada acción
     * @private
     */
    createActionSection(analysis) {
        const section = document.createElement('div');
        section.className = 'modal-section';
        section.style.padding = '15px';
        section.style.borderBottom = '1px solid #e0e0e0';
        section.style.backgroundColor = analysis.correct === analysis.count ? '#e8f5e9' : '#fff3e0';

        const actionTitle = document.createElement('h3');
        actionTitle.textContent = `${analysis.action}`;
        actionTitle.style.marginBottom = '10px';
        section.appendChild(actionTitle);

        const info = document.createElement('div');
        info.style.fontSize = '14px';
        info.innerHTML = `
            <p><strong>Pruebas realizadas:</strong> ${analysis.count}</p>
            <p style="color: #4caf50;"><strong>Correctas:</strong> ${analysis.correct}</p>
            <p style="color: #f44336;"><strong>Incorrectas:</strong> ${analysis.incorrect}</p>
        `;
        section.appendChild(info);

        return section;
    }

    /**
     * Crea botón para ver detalles
     * @private
     */
    createDetailButton(analyses) {
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
            this.showDetailedResults(analyses);
        };

        section.appendChild(button);
        return section;
    }

    /**
     * Muestra resultados detallados de todas las pruebas
     */
    showDetailedResults(analyses) {
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
        title.textContent = 'Detalles de Pruebas de Submit';
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = () => modal.remove();

        header.appendChild(title);
        header.appendChild(closeBtn);
        content.appendChild(header);

        // Tabla de resultados por acción
        for (const action of ['CREATE', 'UPDATE', 'EDIT', 'DELETE', 'READ']) {
            const analysis = analyses[action];
            if (analysis.found && analysis.results.length > 0) {
                content.appendChild(this.createDetailTable(action, analysis.results));
            }
        }

        modal.appendChild(content);
        document.body.appendChild(modal);
    }

    /**
     * Crea tabla de detalles para una acción
     * @private
     */
    createDetailTable(action, results) {
        const container = document.createElement('div');
        container.style.padding = '15px';
        container.style.borderBottom = '1px solid #e0e0e0';

        const title = document.createElement('h3');
        title.textContent = `Detalles - ${action}`;
        title.style.marginBottom = '10px';
        container.appendChild(title);

        const table = document.createElement('table');
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.style.fontSize = '12px';

        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                <th style="padding: 8px; text-align: left;">#</th>
                <th style="padding: 8px; text-align: left;">Descripción</th>
                <th style="padding: 8px; text-align: center;">Esperado</th>
                <th style="padding: 8px; text-align: center;">Resultado</th>
                <th style="padding: 8px; text-align: center;">Estado</th>
            </tr>
        `;
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        for (const result of results) {
            const row = document.createElement('tr');
            row.style.borderBottom = '1px solid #e0e0e0';
            
            const statusColor = result.correct ? '#4caf50' : '#f44336';
            const statusText = result.correct ? '✓ OK' : '✗ FALLO';

            row.innerHTML = `
                <td style="padding: 8px;">${result.testNumber}</td>
                <td style="padding: 8px;">${result.description}</td>
                <td style="padding: 8px; text-align: center;">${result.expectError ? 'Error' : 'OK'}</td>
                <td style="padding: 8px; text-align: center;">${result.hasErrors ? 'Error' : 'OK'}</td>
                <td style="padding: 8px; text-align: center; color: ${statusColor}; font-weight: bold;">${statusText}</td>
            `;
            tbody.appendChild(row);
        }

        // Fila de detalles de errores si existen
        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            if (result.errors && result.errors.length > 0) {
                const errorRow = document.createElement('tr');
                errorRow.style.backgroundColor = '#ffe0e0';
                errorRow.style.borderBottom = '1px solid #e0e0e0';
                errorRow.innerHTML = `
                    <td colspan="5" style="padding: 8px;">
                        <strong>Errores:</strong> ${result.errors.join(', ')}
                    </td>
                `;
                tbody.appendChild(errorRow);
            }
        }

        table.appendChild(tbody);
        container.appendChild(table);

        return container;
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
