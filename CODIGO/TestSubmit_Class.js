/**
 * Clase TestSubmit
 * Verifica la validación de submit de formularios para cada acción (ADD, EDIT, SEARCH, etc.)
 */
class TestSubmit {
    constructor(entityName, gestor) {
        this.entityName = entityName;
        this.gestor = gestor;
        this.estructura = gestor.getStructure();
        // Formato: [entity, action, num, description, {fields...}, expectedResult]
        this.testSubmitData = gestor.getTestSubmit();
    }

    /**
     * Abre ventana modal con resultados de pruebas de submit
     */
    showWindow() {
        if (!this.testSubmitData || !Array.isArray(this.testSubmitData) || this.testSubmitData.length === 0) {
            this.showError('Error', `No se encontraron pruebas de submit para ${this.entityName}`);
            return;
        }

        const analyses = this.analyzeAllActions();
        this.displayResults(analyses);
    }

    // ─────────────────────────────────────────────────────
    //  ANÁLISIS POR ACCIÓN
    // ─────────────────────────────────────────────────────

    /**
     * Agrupa y analiza pruebas por acción (campo [1] del array)
     */
    analyzeAllActions() {
        const actionsSet = new Set();
        for (const t of this.testSubmitData) {
            if (Array.isArray(t) && typeof t[1] === 'string') actionsSet.add(t[1]);
        }

        const analyses = {};
        for (const action of actionsSet) {
            analyses[action] = this.analyzeAction(action);
        }
        return analyses;
    }

    analyzeAction(action) {
        const actionTests = this.testSubmitData.filter(t => Array.isArray(t) && t[1] === action);
        let correct = 0, incorrect = 0;
        const results = [];

        for (let i = 0; i < actionTests.length; i++) {
            const r = this.executeSubmitTest(action, actionTests[i], i);
            results.push(r);
            if (r.correct) correct++; else incorrect++;
        }

        return { action, count: actionTests.length, correct, incorrect, results };
    }

    // ─────────────────────────────────────────────────────
    //  EJECUCIÓN DE PRUEBA DE SUBMIT
    //  Formato test: [entity, action, num, description, {fields...}, expectedResult]
    // ─────────────────────────────────────────────────────

    executeSubmitTest(action, test, index) {
        try {
            const [entity, testAction, num, description, formData, expectedResult] = test;

            const checkResult = this.checkSubmit(action, formData || {});

            const expectedError = expectedResult !== true;
            const hasErrors     = checkResult !== true;
            const correct       = expectedError === hasErrors;

            return {
                num: num || (index + 1),
                description: description || `Prueba ${index + 1}`,
                action,
                expectedResult,
                actualResult: checkResult,
                shouldHaveError: expectedError,
                hasError: hasErrors,
                correct,
                message: checkResult !== true ? String(checkResult) : 'Submit válido'
            };
        } catch (err) {
            return {
                num: (test && test[2]) || (index + 1),
                description: (test && test[3]) || '',
                action,
                correct: false,
                message: `Excepción: ${err.message}`
            };
        }
    }

    // ─────────────────────────────────────────────────────
    //  CheckSubmit: valida todos los campos del formulario
    //  Devuelve true si todo OK, o primer mensaje de error
    // ─────────────────────────────────────────────────────

    checkSubmit(action, formData) {
        if (!this.estructura || !this.estructura.attributes) {
            return 'Estructura no disponible';
        }

        const normalizedAction = this.normalizeAction(action);

        for (const [fieldName, fieldDef] of Object.entries(this.estructura.attributes)) {
            const validations = (fieldDef.rules && fieldDef.rules.validations && fieldDef.rules.validations[normalizedAction])
                ? fieldDef.rules.validations[normalizedAction]
                : {};

            // Determinar si el campo es nullable en esta acción
            const isNullDef  = (fieldDef.db && fieldDef.db.is_null) ? fieldDef.db.is_null : {};
            const isNullable = typeof isNullDef === 'object' && isNullDef[normalizedAction] === true;

            const htmlTag  = fieldDef.html ? fieldDef.html.tag  : 'input';
            const htmlType = fieldDef.html ? fieldDef.html.type : 'text';
            const isFile   = (htmlTag === 'file' || htmlType === 'file');

            // Extraer valor del formData (puede no estar presente)
            const hasField = Object.prototype.hasOwnProperty.call(formData, fieldName);
            const rawValue = hasField ? formData[fieldName] : undefined;

            // Si el campo no está en formData: saltar (no incluido en este submit)
            if (rawValue === undefined) continue;

            let result;
            if (isFile) {
                result = this.validateFileValue(fieldName, rawValue, formData, validations, isNullable, normalizedAction);
            } else {
                result = this.validateFieldValue(fieldName, rawValue, validations, isNullable, normalizedAction);
            }

            if (result !== true) return result;
        }

        return true;
    }

    normalizeAction(action) {
        const map = { 'CREATE': 'ADD', 'UPDATE': 'EDIT', 'READ': 'SEARCH', 'DELETE': 'SEARCH' };
        return map[action.toUpperCase()] || action.toUpperCase();
    }

    validateFieldValue(fieldName, rawValue, validations, isNullable, action) {
        const strVal = (rawValue === null || rawValue === undefined) ? '' : String(rawValue);
        const empty  = strVal.trim() === '';

        // Required: campo NOT NULL y acción es ADD o EDIT
        if (!isNullable && (action === 'ADD' || action === 'EDIT') && empty) {
            return `${fieldName}: Campo requerido`;
        }
        if (empty) return true; // nullable o SEARCH vacío -> OK

        // exp_reg (formato, includes digit-only check)
        if (validations.exp_reg) {
            try {
                if (!new RegExp(validations.exp_reg).test(strVal)) {
                    return `${fieldName}: Formato no válido`;
                }
            } catch (e) { /* ignore */ }
        }

        // min_size
        if (validations.min_size !== undefined && strVal.length < validations.min_size) {
            return `${fieldName}: Mínimo ${validations.min_size} caracteres`;
        }

        // max_size
        if (validations.max_size !== undefined && strVal.length > validations.max_size) {
            return `${fieldName}: Máximo ${validations.max_size} caracteres`;
        }

        // valid_date
        if (validations.valid_date) {
            const r = this.validateDate(strVal);
            if (r !== true) return `${fieldName}: ${r}`;
        }

        return true;
    }

    validateFileValue(fieldName, rawValue, formData, validations, isNullable, action) {
        const empty = rawValue === null || rawValue === undefined;

        if (empty) {
            if (validations.no_file || (!isNullable && (action === 'ADD' || action === 'EDIT'))) {
                return `${fieldName}: No se ha seleccionado ningún fichero`;
            }
            return true;
        }

        const fileName = String(rawValue);
        const mimeType = formData.mimeType;
        const size     = formData.size;

        // type_file
        if (validations.type_file && Array.isArray(validations.type_file)) {
            const allowed = validations.type_file.map(t => t.type_file);
            if (mimeType && !allowed.includes(mimeType)) {
                return `${fieldName}: Tipo de fichero no permitido`;
            }
        }

        // max_size_file
        if (validations.max_size_file && Array.isArray(validations.max_size_file)) {
            const maxBytes = validations.max_size_file[0].max_size_file;
            if (size !== undefined && size > maxBytes) {
                return `${fieldName}: El fichero supera ${maxBytes} bytes`;
            }
        }

        // format_name_file
        if (validations.format_name_file && Array.isArray(validations.format_name_file)) {
            const pattern = validations.format_name_file[0].format_name_file;
            try {
                if (!new RegExp(pattern).test(fileName)) {
                    return `${fieldName}: Nombre de fichero con formato incorrecto`;
                }
            } catch (e) { /* ignore */ }
        }

        // min/max del nombre
        if (validations.min_size !== undefined && fileName.length < validations.min_size) {
            return `${fieldName}: Nombre demasiado corto (mínimo ${validations.min_size})`;
        }
        if (validations.max_size !== undefined && fileName.length > validations.max_size) {
            return `${fieldName}: Nombre demasiado largo (máximo ${validations.max_size})`;
        }

        return true;
    }

    validateDate(value) {
        if (!value) return true;
        if (!/^\d{2}[\/\-]\d{2}[\/\-]\d{4}$/.test(value)) {
            return 'Formato de fecha inválido (DD-MM-YYYY)';
        }
        const sep   = value[2];
        const [day, month, year] = value.split(sep).map(Number);
        const d = new Date(year, month - 1, day);
        if (d.getFullYear() !== year || d.getMonth() !== month - 1 || d.getDate() !== day) {
            return 'Fecha no válida';
        }
        return true;
    }

    // ─────────────────────────────────────────────────────
    //  PRESENTACIÓN
    // ─────────────────────────────────────────────────────

    displayResults(analyses) {
        const modal = this.buildModal(`Test de Formulario — ${this.entityName}`);
        const content = modal.querySelector('.modal-content');

        const summary = document.createElement('div');
        summary.style.cssText = 'padding:15px;border-bottom:1px solid #e0e0e0;';
        summary.innerHTML = '<h3>Resumen por Acción</h3>';

        const allResults = {};
        for (const [action, data] of Object.entries(analyses)) {
            allResults[action] = data.results;
            const div = document.createElement('div');
            div.style.cssText = 'margin-bottom:10px;padding:10px;background:#f9f9f9;border-radius:4px;';
            div.innerHTML = `
                <strong>${action}</strong>: ${data.count} pruebas —
                <span style="color:#4caf50;">${data.correct} correctas</span> /
                <span style="color:#f44336;">${data.incorrect} incorrectas</span>`;
            summary.appendChild(div);
        }
        content.appendChild(summary);

        const btnSec = document.createElement('div');
        btnSec.style.cssText = 'padding:15px;text-align:center;background:#f5f5f5;';
        const btn = document.createElement('button');
        btn.textContent = 'Ver Detalles de Pruebas de Submit';
        btn.style.cssText = 'padding:10px 20px;background:#667eea;color:white;border:none;border-radius:4px;cursor:pointer;font-size:14px;';
        btn.onclick = () => this.showDetailedResults(allResults);
        btnSec.appendChild(btn);
        content.appendChild(btnSec);

        document.body.appendChild(modal);
    }

    showDetailedResults(allResults) {
        const modal = this.buildModal(`Detalles de Submit — ${this.entityName}`);
        const content = modal.querySelector('.modal-content');
        content.style.minWidth = '750px';

        for (const [action, results] of Object.entries(allResults)) {
            if (!results || results.length === 0) continue;
            const sec = document.createElement('div');
            sec.style.padding = '10px 15px';
            sec.innerHTML = `<h3 style="color:#667eea;">${action}</h3>`;

            const table = document.createElement('table');
            table.style.cssText = 'width:100%;border-collapse:collapse;font-size:13px;margin-bottom:20px;';
            table.innerHTML = `
                <thead>
                    <tr style="background:#f5f5f5;border-bottom:2px solid #ddd;">
                        <th style="padding:8px;">#</th>
                        <th style="padding:8px;text-align:left;">Descripción</th>
                        <th style="padding:8px;text-align:center;">Esperado</th>
                        <th style="padding:8px;text-align:left;">Obtenido</th>
                        <th style="padding:8px;text-align:center;">Estado</th>
                    </tr>
                </thead>`;
            const tbody = document.createElement('tbody');
            for (const r of results) {
                const row = document.createElement('tr');
                row.style.borderBottom = '1px solid #e0e0e0';
                if (!r.correct) row.style.backgroundColor = '#fff3f3';
                const color    = r.correct ? '#4caf50' : '#f44336';
                const status   = r.correct ? '✓ OK' : '✗ FALLO';
                const expected = r.expectedResult === true ? 'Éxito' : `Error (${r.expectedResult})`;
                row.innerHTML = `
                    <td style="padding:8px;text-align:center;">${r.num}</td>
                    <td style="padding:8px;">${r.description}</td>
                    <td style="padding:8px;text-align:center;">${expected}</td>
                    <td style="padding:8px;">${r.message}</td>
                    <td style="padding:8px;text-align:center;color:${color};font-weight:bold;">${status}</td>`;
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
            sec.appendChild(table);
            content.appendChild(sec);
        }

        document.body.appendChild(modal);
    }

    buildModal(titleText) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'flex';
        const content = document.createElement('div');
        content.className = 'modal-content';
        content.style.cssText = 'max-height:90vh;overflow-x:auto;overflow-y:auto;min-width:600px;max-width:95vw;';
        const header = document.createElement('div');
        header.className = 'modal-header';
        header.innerHTML = `<h2>${titleText}</h2>`;
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cursor = 'pointer';
        closeBtn.onclick = () => modal.remove();
        header.appendChild(closeBtn);
        content.appendChild(header);
        modal.appendChild(content);
        return modal;
    }

    showError(title, message) {
        const modal = this.buildModal(title);
        const content = modal.querySelector('.modal-content');
        content.querySelector('.modal-header').style.backgroundColor = '#f44336';
        const body = document.createElement('div');
        body.style.padding = '20px';
        body.textContent = message;
        content.appendChild(body);
        document.body.appendChild(modal);
    }
}