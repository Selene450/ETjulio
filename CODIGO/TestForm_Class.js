/**
 * Clase TestForm
 * Verifica la estructura de la entidad, definiciones de test y ejecuta pruebas de validación
 */
class TestForm {
    constructor(entityName, gestor) {
        this.entityName = entityName;
        this.gestor = gestor;
        this.estructura = gestor.getStructure();        // objeto _estructura
        this.defTests = gestor.getDefTests();           // array _def_tests
        this.pruebas = gestor.getTestsFields();         // array _pruebas / _tests_fields
        this.entityClass = gestor.getEntityClass();     // instancia clase entidad (puede ser null)
    }

    /**
     * Abre una nueva ventana modal con todos los resultados del análisis
     */
    showWindow() {
        const structureAnalysis   = this.analyzeStructure();
        const definitionsAnalysis = this.analyzeTestDefinitions();
        const dataAnalysis        = this.analyzeTestData();
        const executionResults    = this.executeAllTests();

        this.displayResults({
            structure:   structureAnalysis,
            definitions: definitionsAnalysis,
            data:        dataAnalysis,
            execution:   executionResults
        });
    }

    // ─────────────────────────────────────────────────────
    //  ANÁLISIS DE ESTRUCTURA
    // ─────────────────────────────────────────────────────

    analyzeStructure() {
        const e = this.estructura;
        if (!e || typeof e !== 'object') {
            return { valid: false, error: 'Estructura no existe o no es un objeto' };
        }
        const attrs = e.attributes;
        if (!attrs || typeof attrs !== 'object' || Array.isArray(attrs)) {
            return { valid: false, error: 'attributes no es un objeto válido' };
        }
        const names = Object.keys(attrs);
        if (names.length === 0) {
            return { valid: false, error: 'No hay atributos definidos' };
        }
        return {
            valid: true,
            count: names.length,
            attributes: names.join(', ')
        };
    }

    // ─────────────────────────────────────────────────────
    //  ANÁLISIS DE DEF_TESTS
    //  Formato: [entity, field, htmlElement, id, description, action, expectedResult, errorMsg]
    // ─────────────────────────────────────────────────────

    analyzeTestDefinitions() {
        const defs = this.defTests;
        if (!Array.isArray(defs)) {
            return { valid: false, count: 0, wellDefined: 0, error: 'def_tests no es un array' };
        }

        let wellDefined = 0;
        const issues = [];
        const byAttribute = {};

        for (let i = 0; i < defs.length; i++) {
            const d = defs[i];
            if (!Array.isArray(d) || d.length < 7) {
                issues.push(`Def ${i+1}: necesita al menos 7 campos`);
                continue;
            }
            const [entity, field, htmlElem, id, description, action, expectedResult] = d;
            // Validar tipos
            if (typeof entity !== 'string' || typeof field !== 'string' ||
                typeof htmlElem !== 'string' || typeof id !== 'number' ||
                typeof description !== 'string' || typeof action !== 'string' ||
                (expectedResult !== true && typeof expectedResult !== 'string')) {
                issues.push(`Def ${i+1} (id:${id}): tipos incorrectos`);
                continue;
            }
            wellDefined++;
            byAttribute[field] = (byAttribute[field] || 0) + 1;
        }

        return {
            valid: wellDefined === defs.length,
            count: defs.length,
            wellDefined,
            byAttribute,
            issues
        };
    }

    // ─────────────────────────────────────────────────────
    //  ANÁLISIS DE PRUEBAS (tests_fields / _pruebas)
    //  Formato: [entity, field, defTestNum, pruebaNum, action, [{field:value,...}], expectedResult]
    // ─────────────────────────────────────────────────────

    analyzeTestData() {
        const pruebas = this.pruebas;
        if (!Array.isArray(pruebas)) {
            return { valid: false, count: 0, wellTyped: 0, error: 'pruebas no es un array' };
        }

        let wellTyped = 0;
        const issues = [];
        let errorCount = 0;
        let successCount = 0;
        const byDefTest = {};

        for (let i = 0; i < pruebas.length; i++) {
            const p = pruebas[i];
            if (!Array.isArray(p) || p.length < 7) {
                issues.push(`Prueba ${i+1}: necesita 7 campos`);
                continue;
            }
            const [entity, field, defTestNum, pruebaNum, action, values, expectedResult] = p;
            if (typeof entity !== 'string' || typeof field !== 'string' ||
                typeof defTestNum !== 'number' || typeof pruebaNum !== 'number' ||
                typeof action !== 'string' || !Array.isArray(values) ||
                (expectedResult !== true && typeof expectedResult !== 'string')) {
                issues.push(`Prueba ${i+1}: tipos incorrectos`);
                continue;
            }
            wellTyped++;
            if (expectedResult === true) successCount++;
            else errorCount++;
            if (!byDefTest[defTestNum]) byDefTest[defTestNum] = { error: 0, success: 0 };
            if (expectedResult === true) byDefTest[defTestNum].success++;
            else byDefTest[defTestNum].error++;
        }

        return {
            valid: wellTyped === pruebas.length,
            count: pruebas.length,
            wellTyped,
            byType: { error: errorCount, success: successCount },
            byDefTest,
            issues
        };
    }

    // ─────────────────────────────────────────────────────
    //  EJECUCIÓN DE PRUEBAS
    // ─────────────────────────────────────────────────────

    executeAllTests() {
        if (!Array.isArray(this.pruebas)) {
            return { executed: 0, correct: 0, incorrect: 0, results: [] };
        }
        const results = [];
        let correct = 0, incorrect = 0;
        for (let i = 0; i < this.pruebas.length; i++) {
            const r = this.executeIndividualTest(this.pruebas[i], i);
            results.push(r);
            if (r.passed) correct++; else incorrect++;
        }
        return { executed: this.pruebas.length, correct, incorrect, results };
    }

    /**
     * Ejecuta una prueba individual.
     * Prueba: [entity, field, defTestNum, pruebaNum, action, [{field:value,...}], expectedResult]
     */
    executeIndividualTest(prueba, index) {
        try {
            const [entity, fieldName, defTestNum, pruebaNum, action, valuesArr, expectedResult] = prueba;

            // Localizar definición de test correspondiente (por número de def)
            let defTest;
            if (Array.isArray(this.defTests)) {
                defTest = this.defTests.find(d => Array.isArray(d) && d[3] === defTestNum);
            } else {
                defTest = null;
            }
            
            let testDescription;
            if (defTest) {
                testDescription = defTest[4];
            } else {
                testDescription = `Prueba ${pruebaNum}`;
            }

            // Obtener definición del campo en la estructura
            const fieldDef = this.estructura && this.estructura.attributes
                ? this.estructura.attributes[fieldName]
                : null;

            if (!fieldDef) {
                return {
                    pruebaNum, defTestNum, testDescription, fieldName, action,
                    passed: false,
                    message: `Campo "${fieldName}" no encontrado en la estructura`
                };
            }

            // Extraer valor de prueba: valuesArr es [{fieldName: value, mimeType?, size?}]
            let testObj;
            if (Array.isArray(valuesArr) && valuesArr[0]) {
                testObj = valuesArr[0];
            } else {
                testObj = {};
            }
            const rawValue = testObj[fieldName];   // puede ser null, '', string, number

            // Determinar si el campo es de tipo file
            let htmlTag;
            if (fieldDef.html) {
                htmlTag = fieldDef.html.tag;
            } else {
                htmlTag = 'input';
            }
            
            let htmlType;
            if (fieldDef.html) {
                htmlType = fieldDef.html.type;
            } else {
                htmlType = 'text';
            }
            const isFile   = (htmlTag === 'file' || htmlType === 'file');

            // Obtener validaciones de la estructura para este campo y acción
            let validations;
            if (fieldDef.rules && fieldDef.rules.validations && fieldDef.rules.validations[action]) {
                validations = fieldDef.rules.validations[action];
            } else {
                validations = {};
            }

            // Determinar si el campo es nullable en esta acción (is_null)
            const isNullDef = fieldDef.db ? fieldDef.db.is_null : {};
            const isNullable = isNullDef && typeof isNullDef === 'object' && isNullDef[action] === true;

            let actualResult;

            if (isFile) {
                actualResult = this.validateFileValue(rawValue, testObj, validations, isNullable, action);
            } else {
                actualResult = this.validateTextValue(fieldName, rawValue, validations, isNullable, index, htmlTag, action);
            }

            // Comparar: expectedResult===true -> esperamos sin error; string -> esperamos error
            const expectedError = expectedResult !== true;
            const gotError      = actualResult !== true;
            
            let passed;
            if (expectedError === gotError) {
                passed = true;
            } else {
                passed = false;
            }

            let message;
            if (actualResult !== true) {
                message = String(actualResult);
            } else {
                message = 'OK';
            }
            
            return {
                pruebaNum, defTestNum, testDescription, fieldName, action,
                testValue: rawValue,
                expectedResult, actualResult,
                passed,
                message: message
            };
        } catch (err) {
            return {
                pruebaNum: prueba[3] || (index + 1),
                passed: false,
                message: `Excepción: ${err.message}`
            };
        }
    }

    // ─────────────────────────────────────────────────────
    //  VALIDACIÓN DE CAMPOS TEXTO / NUMBER / DATE / SELECT
    // ─────────────────────────────────────────────────────

    validateTextValue(fieldName, rawValue, validations, isNullable, index, htmlTag, action) {
        // Construir elemento temporal en el DOM
        const elementId = `__tf_${index}`;
        let container = document.getElementById('__tf_container__');
        if (!container) {
            container = document.createElement('div');
            container.id = '__tf_container__';
            container.style.display = 'none';
            document.body.appendChild(container);
        }

        let value;
        if (rawValue === null || rawValue === undefined) {
            value = '';
        } else {
            value = String(rawValue);
        }

        if (htmlTag === 'textarea') {
            container.innerHTML = `<textarea id="${elementId}">${value}</textarea>`;
        } else if (htmlTag === 'select') {
            const opts = (this.estructura && this.estructura.attributes) ? [] : [];
            container.innerHTML = `<select id="${elementId}"><option value="${value}">${value}</option></select>`;
            const sel = document.getElementById(elementId);
            if (sel) sel.value = value;
        } else {
            const safe = value.replace(/"/g, '&quot;');
            container.innerHTML = `<input id="${elementId}" value="${safe}">`;
        }

        const result = this.runValidations(elementId, validations, isNullable, rawValue, action, fieldName);
        container.innerHTML = '';
        return result;
    }

    /**
     * Ejecuta todas las validaciones definidas en la estructura sobre un elementId del DOM
     */
    runValidations(elementId, validations, isNullable, rawValue, action, fieldName) {
        // 1. required: campo NOT NULL y acción es ADD o EDIT (en SEARCH no se exige rellenar)
        const requireCheck = !isNullable && (action === 'ADD' || action === 'EDIT');
        if (requireCheck) {
            const r = Validations.isRequired(elementId);
            if (r !== true) return r;
        }

        // Si vacío y nullable, no seguir validando formato/tamaño
        const element = document.getElementById(elementId);
        if (!element) return true;
        
        let val;
        if (element.value !== undefined) {
            val = element.value.trim();
        } else {
            val = '';
        }
        if (val === '') return true;

        // 2. integer (dígitos)
        if (validations.integer) {
            const r = Validations.isInteger(elementId);
            if (r !== true) return r;
        }

        // 3. min_size
        if (validations.min_size !== undefined) {
            const r = Validations.hasMinSize(elementId, validations.min_size);
            if (r !== true) return r;
        }

        // 4. max_size
        if (validations.max_size !== undefined) {
            const r = Validations.hasMaxSize(elementId, validations.max_size);
            if (r !== true) return r;
        }

        // 5. exp_reg
        if (validations.exp_reg) {
            try {
                const regex = new RegExp(validations.exp_reg);
                if (!regex.test(val)) return 'Formato no válido';
            } catch (e) {
                return `Expresión regular inválida: ${e.message}`;
            }
        }

        // 6. valid_date
        if (validations.valid_date) {
            const r = Validations.isValidDate(elementId);
            if (r !== true) return r;
        }

        // 7. personalized
        if (validations.personalized && this.entityClass && fieldName) {
            const method = `${fieldName}_personalized_validation`;
            if (typeof this.entityClass[method] === 'function') {
                try {
                    return this.entityClass[method](val);
                } catch (e) {
                    return `Error validación personalizada: ${e.message}`;
                }
            }
        }

        return true;
    }

    // ─────────────────────────────────────────────────────
    //  VALIDACIÓN DE CAMPOS FILE
    //  rawValue: nombre del fichero (string) o null
    //  testObj: {fieldName: 'nombre.pdf', mimeType: '...', size: 12345}
    // ─────────────────────────────────────────────────────

    validateFileValue(rawValue, testObj, validations, isNullable, action) {
        // Comprobar no_file (campo vacío / fichero no seleccionado)
        if (rawValue === null || rawValue === undefined) {
            let fileRequired;
            if (validations.no_file) {
                fileRequired = true;
            } else if (!isNullable && (action === 'ADD' || action === 'EDIT')) {
                fileRequired = true;
            } else {
                fileRequired = false;
            }
            
            if (fileRequired) {
                return 'No se ha seleccionado ningún fichero';
            }
            return true;
        }

        const fileName = String(rawValue);
        const mimeType = testObj.mimeType;
        const size     = testObj.size;

        // type_file: [{type_file: 'application/pdf'}, ...]
        if (validations.type_file && Array.isArray(validations.type_file)) {
            const allowed = validations.type_file.map(t => t.type_file);
            if (mimeType && !allowed.includes(mimeType)) {
                return `Tipo de fichero no permitido: ${mimeType}`;
            }
        }

        // max_size_file: [{max_size_file: 2000000}, ...]
        if (validations.max_size_file && Array.isArray(validations.max_size_file)) {
            const maxBytes = validations.max_size_file[0].max_size_file;
            if (size !== undefined && size > maxBytes) {
                return `El fichero supera el tamaño máximo de ${maxBytes} bytes`;
            }
        }

        // format_name_file: [{format_name_file: 'regexp'}, ...]
        if (validations.format_name_file && Array.isArray(validations.format_name_file)) {
            const pattern = validations.format_name_file[0].format_name_file;
            try {
                if (!new RegExp(pattern).test(fileName)) {
                    return `Nombre de fichero con formato incorrecto`;
                }
            } catch (e) { /* ignore bad regex */ }
        }

        // min_size / max_size sobre el nombre del fichero
        if (validations.min_size !== undefined && fileName.length < validations.min_size) {
            return `Nombre de fichero demasiado corto (mínimo ${validations.min_size})`;
        }
        if (validations.max_size !== undefined && fileName.length > validations.max_size) {
            return `Nombre de fichero demasiado largo (máximo ${validations.max_size})`;
        }

        return true;
    }

    // ─────────────────────────────────────────────────────
    //  PRESENTACIÓN DE RESULTADOS
    // ─────────────────────────────────────────────────────

    displayResults(results) {
        const modal = this.buildModal(`Verificación de Tests — ${this.entityName}`);
        const content = modal.querySelector('.modal-content');

        content.appendChild(this.buildStructureSection(results.structure));
        content.appendChild(this.buildDefinitionsSection(results.definitions));
        content.appendChild(this.buildDataSection(results.data));
        content.appendChild(this.buildExecutionSection(results.execution));
        content.appendChild(this.buildDetailButton(results.execution));

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

    buildSection(title) {
        const s = document.createElement('div');
        s.className = 'modal-section';
        s.style.cssText = 'padding:15px;border-bottom:1px solid #e0e0e0;';
        s.innerHTML = `<h3>${title}</h3>`;
        return s;
    }

    buildStructureSection(s) {
        const sec = this.buildSection('Estructura de la Entidad');
        if (!s.valid) {
            sec.innerHTML += `<p style="color:#f44336;">❌ ${s.error}</p>`;
        } else {
            sec.innerHTML += `
                <p>✅ <strong>Estado:</strong> Correcta</p>
                <p><strong>Total atributos:</strong> ${s.count}</p>
                <p><strong>Atributos:</strong> ${s.attributes}</p>`;
        }
        return sec;
    }

    buildDefinitionsSection(d) {
        const sec = this.buildSection('Definiciones de Test (def_tests)');
        if (d.error) {
            sec.innerHTML += `<p style="color:#f44336;">❌ ${d.error}</p>`;
        } else {
            const byAttr = Object.entries(d.byAttribute || {})
                .map(([k, v]) => `<li>${k}: ${v}</li>`).join('');
            
            let byAttrHtml = '';
            if (byAttr) {
                byAttrHtml = `<p><strong>Por atributo:</strong></p><ul style="padding-left:20px">${byAttr}</ul>`;
            }
            
            let issuesHtml = '';
            if (d.issues && d.issues.length) {
                issuesHtml = `<p style="color:#ff9800;">Problemas: ${d.issues.join(' | ')}</p>`;
            }
            
            sec.innerHTML += `
                <p><strong>Total definiciones:</strong> ${d.count}</p>
                <p><strong>Bien definidas:</strong> ${d.wellDefined} / ${d.count}</p>
                ${byAttrHtml}
                ${issuesHtml}`;
        }
        return sec;
    }

    buildDataSection(d) {
        const sec = this.buildSection('Pruebas (pruebas / tests_fields)');
        if (d.error) {
            sec.innerHTML += `<p style="color:#f44336;">❌ ${d.error}</p>`;
        } else {
            let issuesHtml = '';
            if (d.issues && d.issues.length) {
                issuesHtml = `<p style="color:#ff9800;">Problemas: ${d.issues.join(' | ')}</p>`;
            }
            
            sec.innerHTML += `
                <p><strong>Total pruebas:</strong> ${d.count}</p>
                <p><strong>Bien tipificadas:</strong> ${d.wellTyped} / ${d.count}</p>
                <p><strong>Prueban error:</strong> ${d.byType.error}</p>
                <p><strong>Prueban éxito:</strong> ${d.byType.success}</p>
                ${issuesHtml}`;
        }
        return sec;
    }

    buildExecutionSection(e) {
        let pct;
        if (e.executed) {
            pct = Math.round(e.correct / e.executed * 100);
        } else {
            pct = 0;
        }
        const sec = this.buildSection('Resultados de Ejecución');
        sec.innerHTML += `
            <p><strong>Pruebas ejecutadas:</strong> ${e.executed}</p>
            <p style="color:#4caf50;"><strong>Correctas:</strong> ${e.correct}</p>
            <p style="color:#f44336;"><strong>Incorrectas:</strong> ${e.incorrect}</p>
            <p><strong>Porcentaje de éxito:</strong> ${pct}%</p>`;
        return sec;
    }

    buildDetailButton(execution) {
        const sec = document.createElement('div');
        sec.style.cssText = 'padding:15px;text-align:center;background:#f5f5f5;';
        const btn = document.createElement('button');
        btn.textContent = 'Ver Detalles de cada Prueba';
        btn.style.cssText = 'padding:10px 20px;background:#667eea;color:white;border:none;border-radius:4px;cursor:pointer;font-size:14px;';
        btn.onclick = () => this.showDetailedResults(execution.results);
        sec.appendChild(btn);
        return sec;
    }

    showDetailedResults(results) {
        const modal = this.buildModal(`Detalle de Pruebas — ${this.entityName}`);
        const content = modal.querySelector('.modal-content');
        content.style.minWidth = '750px';

        const table = document.createElement('table');
        table.style.cssText = 'width:100%;border-collapse:collapse;font-size:13px;margin:15px;';
        table.innerHTML = `
            <thead>
                <tr style="background:#f5f5f5;border-bottom:2px solid #ddd;">
                    <th style="padding:8px;">#</th>
                    <th style="padding:8px;text-align:left;">Campo</th>
                    <th style="padding:8px;text-align:left;">Descripción</th>
                    <th style="padding:8px;">Acción</th>
                    <th style="padding:8px;">Esperado</th>
                    <th style="padding:8px;">Obtenido</th>
                    <th style="padding:8px;">Estado</th>
                </tr>
            </thead>`;
        const tbody = document.createElement('tbody');
        for (const r of results) {
            const row = document.createElement('tr');
            row.style.borderBottom = '1px solid #e0e0e0';
            if (!r.passed) row.style.backgroundColor = '#fff3f3';
            
            let color;
            if (r.passed) {
                color = '#4caf50';
            } else {
                color = '#f44336';
            }
            
            let status;
            if (r.passed) {
                status = '✓ OK';
            } else {
                status = '✗ FALLO';
            }
            
            let expected;
            if (r.expectedResult === true) {
                expected = 'Éxito';
            } else {
                expected = `Error (${r.expectedResult})`;
            }
            
            let obtained;
            if (r.actualResult === true) {
                obtained = 'Éxito';
            } else {
                obtained = `Error: ${r.message}`;
            }
            let pruebaNum = r.pruebaNum;
            if (pruebaNum === undefined || pruebaNum === null) {
                pruebaNum = '';
            }
            let fieldName = r.fieldName;
            if (fieldName === undefined || fieldName === null) {
                fieldName = '';
            }
            let testDescription = r.testDescription;
            if (testDescription === undefined || testDescription === null) {
                testDescription = '';
            }
            let action = r.action;
            if (action === undefined || action === null) {
                action = '';
            }
            
            row.innerHTML = `
                <td style="padding:8px;text-align:center;">${pruebaNum}</td>
                <td style="padding:8px;font-family:monospace;font-size:11px;">${fieldName}</td>
                <td style="padding:8px;">${testDescription}</td>
                <td style="padding:8px;text-align:center;">${action}</td>
                <td style="padding:8px;text-align:center;">${expected}</td>
                <td style="padding:8px;">${obtained}</td>
                <td style="padding:8px;text-align:center;color:${color};font-weight:bold;">${status}</td>`;
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        content.appendChild(table);
        document.body.appendChild(modal);
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