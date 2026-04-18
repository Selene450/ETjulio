// ANALYSIS_PREPARATION - Tests de envío de formulario (reorganizado: ADD + EDIT + SEARCH + DELETE + READ)

window.analysis_preparation_TestSubmit = [
  // ===== CREATE (ADD) TESTS =====
  ['analysis_preparation', 'CREATE', 1, 'Crear análisis válido', {id_analysis_preparation: '456', name_analysis_preparation: 'Soil Sample Preparation Protocol', description_analysis_preparation: 'Standard procedures for sample preparation including cleaning drying and homogenization', bib_analysis_preparation: 'ISO 11464 2006 Pretreatment', file_analysis_preparation: 'protocol_guide.pdf'}, true],
  ['analysis_preparation', 'CREATE', 2, 'Crear sin ID', {name_analysis_preparation: 'Analysis Method', description_analysis_preparation: 'Standard procedures for sample analysis testing protocols in laboratory environment with quality controls', bib_analysis_preparation: 'ISO 10381 2002 Sampling', file_analysis_preparation: 'analysis_method.doc'}, 'id_required'],
  ['analysis_preparation', 'CREATE', 3, 'Crear sin nombre', {id_analysis_preparation: '457', description_analysis_preparation: 'Chemical analysis procedures for soil samples with detailed step by step instructions and safety precautions', bib_analysis_preparation: 'EPA Method 6200', file_analysis_preparation: 'chemical_prep.docx'}, 'name_required'],
  ['analysis_preparation', 'CREATE', 4, 'Crear sin descripción', {id_analysis_preparation: '458', name_analysis_preparation: 'Physical Testing Method', bib_analysis_preparation: 'ISO 3094 2008 Procedures', file_analysis_preparation: 'physical_test.pdf'}, 'description_required'],
  ['analysis_preparation', 'CREATE', 5, 'Crear sin referencia', {id_analysis_preparation: '459', name_analysis_preparation: 'Biological Sample Prep', description_analysis_preparation: 'Procedures for biological analysis including sterilization and contamination prevention steps throughout', file_analysis_preparation: 'bio_prep.pdf'}, 'bib_required'],
  ['analysis_preparation', 'CREATE', 6, 'Crear sin archivo', {id_analysis_preparation: '460', name_analysis_preparation: 'Quality Control Method', description_analysis_preparation: 'Quality control procedures including calibration verification and standard reference material testing monthly', bib_analysis_preparation: 'ISO 17025 2017 Quality'}, 'file_required'],
  ['analysis_preparation', 'CREATE', 7, 'Crear todo vacío', {}, 'multiple_errors'],
  ['analysis_preparation', 'CREATE', 8, 'Crear válido completo', {id_analysis_preparation: '461', name_analysis_preparation: 'Complete Analysis Protocol', description_analysis_preparation: 'Comprehensive protocol covering all steps from sample receipt through final data analysis including documentation', bib_analysis_preparation: 'Garcia 2020 Methods of analysis', file_analysis_preparation: 'complete_protocol.pdf'}, true],

  // ===== UPDATE/EDIT TESTS =====
  ['analysis_preparation', 'UPDATE', 9, 'Actualizar protocolo válido', {id_analysis_preparation: '456', name_analysis_preparation: 'Updated Preparation'}, true],
  ['analysis_preparation', 'UPDATE', 10, 'Actualizar con nombre vacío', {id_analysis_preparation: '456', name_analysis_preparation: ''}, 'name_required'],
  ['analysis_preparation', 'UPDATE', 11, 'Actualizar ID inexistente', {id_analysis_preparation: '999', name_analysis_preparation: 'Nonexistent'}, 'id_not_found'],
  ['analysis_preparation', 'UPDATE', 12, 'Actualizar descripción corta', {id_analysis_preparation: '456', description_analysis_preparation: 'Short desc'}, 'description_min_size_KO'],
  ['analysis_preparation', 'UPDATE', 13, 'Actualizar solo referencia', {id_analysis_preparation: '457', bib_analysis_preparation: 'New Reference 2024'}, true],
  ['analysis_preparation', 'UPDATE', 14, 'Actualizar archivo', {id_analysis_preparation: '458', file_analysis_preparation: 'updated_file.doc'}, true],
  ['analysis_preparation', 'UPDATE', 15, 'Actualizar múltiples campos', {id_analysis_preparation: '459', name_analysis_preparation: 'Updated Method', bib_analysis_preparation: 'Updated Bibliography 2024'}, true],
  ['analysis_preparation', 'EDIT', 16, 'Editar permitir todos los campos', {id_analysis_preparation: '457', name_analysis_preparation: 'Updated Protocol', description_analysis_preparation: 'Updated procedures with comprehensive details and instructions', bib_analysis_preparation: 'Updated ISO Reference 2024', file_analysis_preparation: 'updated_protocol.pdf'}, true],
  ['analysis_preparation', 'EDIT', 17, 'Editar con ID inexistente', {id_analysis_preparation: '999', name_analysis_preparation: 'New'}, 'id_not_found'],
  ['analysis_preparation', 'EDIT', 18, 'Editar solo descripción', {id_analysis_preparation: '458', description_analysis_preparation: 'New comprehensive description placeholder'}, true],

  // ===== SEARCH TESTS =====
  ['analysis_preparation', 'SEARCH', 19, 'Buscar por ID exacto', {id_analysis_preparation: '456'}, true],
  ['analysis_preparation', 'SEARCH', 20, 'Buscar por ID mayor a máximo', {id_analysis_preparation: '123456789012'}, 'id_max_size_KO'],
  ['analysis_preparation', 'SEARCH', 21, 'Buscar por nombre exacto', {name_analysis_preparation: 'Soil Sample Preparation Protocol'}, true],
  ['analysis_preparation', 'SEARCH', 22, 'Buscar por nombre mayor a max', {name_analysis_preparation: 'a'.repeat(101)}, 'name_max_size_KO'],
  ['analysis_preparation', 'SEARCH', 23, 'Buscar por descripción parcial', {description_analysis_preparation: 'procedures'}, true],
  ['analysis_preparation', 'SEARCH', 24, 'Buscar por referencia', {bib_analysis_preparation: 'ISO'}, true],
  ['analysis_preparation', 'SEARCH', 25, 'Buscar por bib mayor a max', {bib_analysis_preparation: 'a'.repeat(201)}, 'bib_max_size_KO'],
  ['analysis_preparation', 'SEARCH', 26, 'Buscar con múltiples criterios', {id_analysis_preparation: '456', name_analysis_preparation: 'Soil'}, true],
  ['analysis_preparation', 'SEARCH', 27, 'Buscar sin coincidencias', {name_analysis_preparation: 'XYZ123'}, true],
  ['analysis_preparation', 'SEARCH', 28, 'Buscar por archivo', {file_analysis_preparation: 'protocol'}, true],
  ['analysis_preparation', 'SEARCH', 29, 'Buscar vacío retorna todos', {}, true],

  // ===== DELETE TESTS =====
  ['analysis_preparation', 'DELETE', 30, 'Eliminar protocolo válido', {id_analysis_preparation: '456'}, true],
  ['analysis_preparation', 'DELETE', 31, 'Eliminar protocolo inexistente', {id_analysis_preparation: '999'}, 'id_not_found'],
  ['analysis_preparation', 'DELETE', 32, 'Eliminar sin ID', {}, 'id_required'],
  ['analysis_preparation', 'DELETE', 33, 'Eliminar protocolo en uso', {id_analysis_preparation: '457'}, 'integrity_constraint_violation'],
  ['analysis_preparation', 'DELETE', 34, 'Eliminar la última entrada', {id_analysis_preparation: '461'}, true],

  // ===== READ TESTS =====
  ['analysis_preparation', 'READ', 35, 'Leer todos los protocolos', {}, true],
  ['analysis_preparation', 'READ', 36, 'Leer protocolo específico', {id_analysis_preparation: '456'}, true],
  ['analysis_preparation', 'READ', 37, 'Leer protocolo inexistente', {id_analysis_preparation: '999'}, 'id_not_found'],
  ['analysis_preparation', 'READ', 38, 'Leer con ID inválido', {id_analysis_preparation: 'invalid'}, 'id_format_KO'],
  ['analysis_preparation', 'READ', 39, 'Leer ordenados por nombre', {sort: 'name'}, true],
  ['analysis_preparation', 'READ', 40, 'Leer con paginación', {limit: 10, offset: 0}, true],
  ['analysis_preparation', 'READ', 41, 'Leer protocolos activos', {active: true}, true],
  ['analysis_preparation', 'READ', 42, 'Leer protocolos recientes', {sort: 'created_date', order: 'DESC'}, true],
  ['analysis_preparation', 'READ', 43, 'Leer después de actualización', {id_analysis_preparation: '457'}, true],
  ['analysis_preparation', 'READ', 44, 'Leer después de eliminación', {id_analysis_preparation: '456'}, 'id_not_found']
];
