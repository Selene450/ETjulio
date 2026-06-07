// ANALYSIS_PREPARATION - Tests de envío de formulario (reorganizado: ADD + EDIT + SEARCH + DELETE + READ)

window.analysis_preparation_TestSubmit = [
  // ===== ADD TESTS =====
  ['analysis_preparation', 'ADD', 1, 'Crear análisis válido', {id_analysis_preparation: '456', name_analysis_preparation: 'Soil Sample Preparation Protocol', description_analysis_preparation: 'Standard procedures for sample preparation including cleaning drying and homogenization', bib_analysis_preparation: 'ISO 11464 2006 Pretreatment', file_analysis_preparation: 'protocolGuide.pdf'}, true],
  ['analysis_preparation', 'ADD', 2, 'Crear sin ID', {id_analysis_preparation: '', name_analysis_preparation: 'Analysis Method', description_analysis_preparation: 'Standard procedures for sample analysis testing protocols in laboratory environment with quality controls', bib_analysis_preparation: 'ISO 10381 2002 Sampling', file_analysis_preparation: 'analysismethod.doc'}, 'id_required'],
  ['analysis_preparation', 'ADD', 3, 'Crear sin nombre', {id_analysis_preparation: '457', name_analysis_preparation: '', description_analysis_preparation: 'Chemical analysis procedures for soil samples with detailed step by step instructions and safety precautions', bib_analysis_preparation: 'EPA Method 6200', file_analysis_preparation: 'chemical_prep.docx'}, 'name_required'],
  ['analysis_preparation', 'ADD', 4, 'Crear sin descripción', {id_analysis_preparation: '458', name_analysis_preparation: 'Physical Testing Method', description_analysis_preparation: '', bib_analysis_preparation: 'ISO 3094 2008 Procedures', file_analysis_preparation: 'physicaltest.pdf'}, 'description_required'],
  ['analysis_preparation', 'ADD', 5, 'Crear sin referencia', {id_analysis_preparation: '459', name_analysis_preparation: 'Biological Sample Prep', description_analysis_preparation: 'Procedures for biological analysis including sterilization and contamination prevention steps throughout', bib_analysis_preparation: '', file_analysis_preparation: 'bioPrep.pdf'}, 'bib_required'],
  ['analysis_preparation', 'ADD', 6, 'Crear sin archivo', {id_analysis_preparation: '460', name_analysis_preparation: 'Quality Control Method', description_analysis_preparation: 'Quality control procedures including calibration verification and standard reference material testing monthly', bib_analysis_preparation: 'ISO 17025 2017 Quality', file_analysis_preparation: ''}, 'file_required'],
  ['analysis_preparation', 'ADD', 8, 'Crear válido completo', {id_analysis_preparation: '461', name_analysis_preparation: 'Complete Analysis Protocol', description_analysis_preparation: 'Comprehensive protocol covering all steps from sample receipt through final data analysis including documentation', bib_analysis_preparation: 'Garcia 2020 Methods of analysis', file_analysis_preparation: 'completeprotocol.pdf'}, true],

  // ===== EDIT TESTS =====
  ['analysis_preparation', 'EDIT', 9, 'Editar protocolo válido', {id_analysis_preparation: '456', name_analysis_preparation: 'EDITd Preparation'}, true],
  ['analysis_preparation', 'EDIT', 10, 'Editar con nombre vacío', {id_analysis_preparation: '456', name_analysis_preparation: ''}, 'name_required'],
  ['analysis_preparation', 'EDIT', 11, 'Editar ID inexistente', {id_analysis_preparation: '', name_analysis_preparation: 'Nonexistent'}, 'id_not_found'],
  ['analysis_preparation', 'EDIT', 12, 'Editar descripción corta', {id_analysis_preparation: '456', description_analysis_preparation: 'Short desc'}, 'description_min_size_KO'],
  ['analysis_preparation', 'EDIT', 13, 'Editar solo referencia', {id_analysis_preparation: '457', bib_analysis_preparation: 'New Reference 2024'}, true],
  ['analysis_preparation', 'EDIT', 14, 'Editar archivo', {id_analysis_preparation: '458', file_analysis_preparation: 'EDITdFile.doc'}, true],
  ['analysis_preparation', 'EDIT', 15, 'Editar múltiples campos', {id_analysis_preparation: '459', name_analysis_preparation: 'EDITd Method', bib_analysis_preparation: 'EDITd Bibliography 2024'}, true],
  ['analysis_preparation', 'EDIT', 16, 'Editar permitir todos los campos', {id_analysis_preparation: '457', name_analysis_preparation: 'EDITd Protocol', description_analysis_preparation: 'EDITd procedures with comprehensive details and instructions' + 'a'.repeat(30), bib_analysis_preparation: 'EDITd ISO Reference 2024', file_analysis_preparation: 'EDITdProtocol.pdf'}, true],
  ['analysis_preparation', 'EDIT', 17, 'Editar solo descripción', {id_analysis_preparation: '458', description_analysis_preparation: 'New comprehensive description placeholder' + 'a'.repeat(80)}, true],

  // ===== SEARCH TESTS =====
  ['analysis_preparation', 'SEARCH', 18, 'Buscar por ID exacto', {id_analysis_preparation: '456'}, true],
  ['analysis_preparation', 'SEARCH', 19, 'Buscar por ID mayor a máximo', {id_analysis_preparation: '123456789012'}, 'id_max_size_KO'],
  ['analysis_preparation', 'SEARCH', 20, 'Buscar por nombre exacto', {name_analysis_preparation: 'Soil Sample Preparation Protocol'}, true],
  ['analysis_preparation', 'SEARCH', 21, 'Buscar por nombre mayor a max', {name_analysis_preparation: 'a'.repeat(101)}, 'name_max_size_KO'],
  ['analysis_preparation', 'SEARCH', 22, 'Buscar por descripción parcial', {description_analysis_preparation: 'procedures'}, true],
  ['analysis_preparation', 'SEARCH', 23, 'Buscar por referencia', {bib_analysis_preparation: 'ISO'}, true],
  ['analysis_preparation', 'SEARCH', 24, 'Buscar por bib mayor a max', {bib_analysis_preparation: 'a'.repeat(201)}, 'bib_max_size_KO'],
  ['analysis_preparation', 'SEARCH', 25, 'Buscar con múltiples criterios', {id_analysis_preparation: '456', name_analysis_preparation: 'Soil'}, true],
  ['analysis_preparation', 'SEARCH', 26, 'Buscar sin coincidencias', {name_analysis_preparation: 'XYZ123'}, true],
  ['analysis_preparation', 'SEARCH', 27, 'Buscar por archivo', {file_analysis_preparation: 'protocol'}, true],
  ['analysis_preparation', 'SEARCH', 28, 'Buscar vacío retorna todos', {}, true],

];
