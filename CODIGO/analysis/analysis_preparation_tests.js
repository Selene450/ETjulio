// ANALYSIS_PREPARATION - Definiciones de tests (reorganizado por campo: ADD + EDIT + SEARCH)

window.analysis_preparation_def_tests = [
  // ===== ID_ANALYSIS_PREPARATION =====
  ['analysis_preparation', 'id_analysis_preparation', 'input', 1, 'Comprobar tamaño válido de id', 'ADD', true, ''],
  ['analysis_preparation', 'id_analysis_preparation', 'input', 2, 'Comprobar id vacío', 'ADD', 'id_required', 'El ID es requerido'],
  ['analysis_preparation', 'id_analysis_preparation', 'input', 3, 'Comprobar id con caracteres no dígitos', 'ADD', 'id_format_KO', 'El ID solo debe contener dígitos'],
  ['analysis_preparation', 'id_analysis_preparation', 'input', 4, 'Comprobar id mayor a 11 dígitos', 'ADD', 'id_max_size_KO', 'El ID debe tener máximo 11 dígitos'],
  ['analysis_preparation', 'id_analysis_preparation', 'input', 5, 'Comprobar buscar por ID válido', 'SEARCH', true, ''],
  ['analysis_preparation', 'id_analysis_preparation', 'input', 6, 'Comprobar buscar por ID mayor a máximo', 'SEARCH', 'id_max_size_KO', 'El ID debe tener máximo 11 dígitos'],
  ['analysis_preparation', 'id_analysis_preparation', 'input', 7, 'Comprobar búsqueda múltiples criterios', 'SEARCH', true, ''],

  // ===== NAME_ANALYSIS_PREPARATION =====
  ['analysis_preparation', 'name_analysis_preparation', 'input', 8, 'Comprobar nombre válido', 'ADD', true, ''],
  ['analysis_preparation', 'name_analysis_preparation', 'input', 9, 'Comprobar nombre vacío', 'ADD', 'name_required', 'El nombre es requerido'],
  ['analysis_preparation', 'name_analysis_preparation', 'input', 10, 'Comprobar nombre con acentos', 'ADD', 'name_format_KO', 'El nombre no puede contener acentos o ñ'],
  ['analysis_preparation', 'name_analysis_preparation', 'input', 11, 'Comprobar nombre menor a 8 caracteres', 'ADD', 'name_min_size_KO', 'El nombre debe tener mínimo 8 caracteres'],
  ['analysis_preparation', 'name_analysis_preparation', 'input', 12, 'Comprobar nombre mayor a 100 caracteres', 'ADD', 'name_max_size_KO', 'El nombre debe tener máximo 100 caracteres'],
  ['analysis_preparation', 'name_analysis_preparation', 'input', 13, 'Comprobar nombre duplicado (UNIQUE)', 'ADD', 'name_duplicate_KO', 'El nombre ya existe en la base de datos'],
  ['analysis_preparation', 'name_analysis_preparation', 'input', 14, 'Comprobar editar nombre válido', 'EDIT', true, ''],
  ['analysis_preparation', 'name_analysis_preparation', 'input', 15, 'Comprobar editar nombre vacío', 'EDIT', 'name_required', 'El nombre es requerido'],
  ['analysis_preparation', 'name_analysis_preparation', 'input', 16, 'Comprobar buscar por nombre válido', 'SEARCH', true, ''],
  ['analysis_preparation', 'name_analysis_preparation', 'input', 17, 'Comprobar buscar por nombre mayor a 100', 'SEARCH', 'name_max_size_KO', 'El nombre debe tener máximo 100 caracteres'],

  // ===== DESCRIPTION_ANALYSIS_PREPARATION =====
  ['analysis_preparation', 'description_analysis_preparation', 'textarea', 18, 'Comprobar descripción válida', 'ADD', true, ''],
  ['analysis_preparation', 'description_analysis_preparation', 'textarea', 19, 'Comprobar descripción vacía', 'ADD', 'description_required', 'La descripción es requerida'],
  ['analysis_preparation', 'description_analysis_preparation', 'textarea', 20, 'Comprobar descripción menor a 80 caracteres', 'ADD', 'description_min_size_KO', 'La descripción debe tener mínimo 80 caracteres'],
  ['analysis_preparation', 'description_analysis_preparation', 'textarea', 21, 'Comprobar descripción mayor a 5000 caracteres', 'ADD', 'description_max_size_KO', 'La descripción debe tener máximo 5000 caracteres'],
  ['analysis_preparation', 'description_analysis_preparation', 'textarea', 22, 'Comprobar descripción con acentos', 'ADD', 'description_format_KO', 'La descripción no puede contener acentos o ñ'],
  ['analysis_preparation', 'description_analysis_preparation', 'textarea', 23, 'Comprobar editar descripción válida', 'EDIT', true, ''],
  ['analysis_preparation', 'description_analysis_preparation', 'textarea', 24, 'Comprobar buscar por descripción válida', 'SEARCH', true, ''],
  ['analysis_preparation', 'description_analysis_preparation', 'textarea', 25, 'Comprobar buscar por descripción mayor a 5000', 'SEARCH', 'description_max_size_KO', 'La descripción debe tener máximo 5000 caracteres'],

  // ===== BIB_ANALYSIS_PREPARATION =====
  ['analysis_preparation', 'bib_analysis_preparation', 'input', 26, 'Comprobar bib válida', 'ADD', true, ''],
  ['analysis_preparation', 'bib_analysis_preparation', 'input', 27, 'Comprobar bib vacía', 'ADD', 'bib_required', 'La referencia bibliográfica es requerida'],
  ['analysis_preparation', 'bib_analysis_preparation', 'input', 28, 'Comprobar bib menor a 6 caracteres', 'ADD', 'bib_min_size_KO', 'La referencia debe tener mínimo 6 caracteres'],
  ['analysis_preparation', 'bib_analysis_preparation', 'input', 29, 'Comprobar bib mayor a 200 caracteres', 'ADD', 'bib_max_size_KO', 'La referencia debe tener máximo 200 caracteres'],
  ['analysis_preparation', 'bib_analysis_preparation', 'input', 30, 'Comprobar bib con acentos permitidos', 'ADD', true, ''],
  ['analysis_preparation', 'bib_analysis_preparation', 'input', 31, 'Comprobar editar bib válida', 'EDIT', true, ''],
  ['analysis_preparation', 'bib_analysis_preparation', 'input', 32, 'Comprobar buscar por bib válida', 'SEARCH', true, ''],
  ['analysis_preparation', 'bib_analysis_preparation', 'input', 33, 'Comprobar buscar por bib mayor a 200', 'SEARCH', 'bib_max_size_KO', 'La referencia debe tener máximo 200 caracteres'],

  // ===== FILE_ANALYSIS_PREPARATION =====
  ['analysis_preparation', 'file_analysis_preparation', 'file', 34, 'Comprobar archivo válido PDF', 'ADD', true, ''],
  ['analysis_preparation', 'file_analysis_preparation', 'file', 35, 'Comprobar archivo válido DOC', 'ADD', true, ''],
  ['analysis_preparation', 'file_analysis_preparation', 'file', 36, 'Comprobar archivo válido DOCX', 'ADD', true, ''],
  ['analysis_preparation', 'file_analysis_preparation', 'file', 37, 'Comprobar archivo no seleccionado', 'ADD', 'file_required', 'El archivo es requerido'],
  ['analysis_preparation', 'file_analysis_preparation', 'file', 38, 'Comprobar archivo con extensión no permitida', 'ADD', 'file_format_KO', 'Solo se permiten archivos PDF, DOC o DOCX'],
  ['analysis_preparation', 'file_analysis_preparation', 'file', 39, 'Comprobar archivo mayor a 2MB', 'ADD', 'file_max_size_KO', 'El archivo no debe superar 2MB'],
  ['analysis_preparation', 'file_analysis_preparation', 'file', 40, 'Comprobar archivo con acentos en nombre', 'ADD', 'file_name_format_KO', 'El nombre del archivo no puede contener acentos o ñ'],
  ['analysis_preparation', 'file_analysis_preparation', 'file', 41, 'Comprobar archivo con espacios en nombre', 'ADD', 'file_name_format_KO', 'El nombre del archivo no puede contener espacios'],
  ['analysis_preparation', 'file_analysis_preparation', 'file', 42, 'Comprobar archivo con nombre menor a 7 caracteres', 'ADD', 'file_name_min_size_KO', 'El nombre del archivo debe tener mínimo 7 caracteres'],
  ['analysis_preparation', 'file_analysis_preparation', 'file', 43, 'Comprobar archivo con nombre mayor a 100 caracteres', 'ADD', 'file_name_max_size_KO', 'El nombre del archivo debe tener máximo 100 caracteres'],
  ['analysis_preparation', 'file_analysis_preparation', 'file', 44, 'Comprobar editar archivo válido', 'EDIT', true, ''],
  ['analysis_preparation', 'file_analysis_preparation', 'file', 45, 'Comprobar buscar por nombre archivo', 'SEARCH', true, '']
];

window.analysis_preparation_tests_fields = [
  // ===== ID_ANALYSIS_PREPARATION =====
  ['analysis_preparation', 'id_analysis_preparation', 1, 1, 'ADD', [{id_analysis_preparation: '456'}], true],
  ['analysis_preparation', 'id_analysis_preparation', 2, 2, 'ADD', [{id_analysis_preparation: ''}], 'id_required'],
  ['analysis_preparation', 'id_analysis_preparation', 3, 3, 'ADD', [{id_analysis_preparation: 'def456'}], 'id_format_KO'],
  ['analysis_preparation', 'id_analysis_preparation', 4, 4, 'ADD', [{id_analysis_preparation: '123456789012'}], 'id_max_size_KO'],
  ['analysis_preparation', 'id_analysis_preparation', 5, 5, 'SEARCH', [{id_analysis_preparation: '456'}], true],
  ['analysis_preparation', 'id_analysis_preparation', 6, 6, 'SEARCH', [{id_analysis_preparation: '123456789012'}], 'id_max_size_KO'],
  ['analysis_preparation', 'id_analysis_preparation', 7, 7, 'SEARCH', [{id_analysis_preparation: '456', name_analysis_preparation: 'Protocol'}], true],

  // ===== NAME_ANALYSIS_PREPARATION =====
  ['analysis_preparation', 'name_analysis_preparation', 8, 8, 'ADD', [{name_analysis_preparation: 'Soil Sample Preparation Protocol'}], true],
  ['analysis_preparation', 'name_analysis_preparation', 9, 9, 'ADD', [{name_analysis_preparation: ''}], 'name_required'],
  ['analysis_preparation', 'name_analysis_preparation', 10, 10, 'ADD', [{name_analysis_preparation: 'Método de análisis químico'}], 'name_format_KO'],
  ['analysis_preparation', 'name_analysis_preparation', 11, 11, 'ADD', [{name_analysis_preparation: 'Short'}], 'name_min_size_KO'],
  ['analysis_preparation', 'name_analysis_preparation', 12, 12, 'ADD', [{name_analysis_preparation: 'a'.repeat(101)}], 'name_max_size_KO'],
  ['analysis_preparation', 'name_analysis_preparation', 13, 13, 'ADD', [{name_analysis_preparation: 'Duplicate Name'}], 'name_duplicate_KO'],
  ['analysis_preparation', 'name_analysis_preparation', 14, 14, 'EDIT', [{id_analysis_preparation: '456', name_analysis_preparation: 'Updated Protocol'}], true],
  ['analysis_preparation', 'name_analysis_preparation', 15, 15, 'EDIT', [{id_analysis_preparation: '456', name_analysis_preparation: ''}], 'name_required'],
  ['analysis_preparation', 'name_analysis_preparation', 16, 16, 'SEARCH', [{name_analysis_preparation: 'Protocol'}], true],
  ['analysis_preparation', 'name_analysis_preparation', 17, 17, 'SEARCH', [{name_analysis_preparation: 'a'.repeat(101)}], 'name_max_size_KO'],

  // ===== DESCRIPTION_ANALYSIS_PREPARATION =====
  ['analysis_preparation', 'description_analysis_preparation', 18, 18, 'ADD', [{description_analysis_preparation: 'This protocol describes the standard procedures for sample preparation including cleaning drying and homogenization'}], true],
  ['analysis_preparation', 'description_analysis_preparation', 19, 19, 'ADD', [{description_analysis_preparation: ''}], 'description_required'],
  ['analysis_preparation', 'description_analysis_preparation', 20, 20, 'ADD', [{description_analysis_preparation: 'Short text'}], 'description_min_size_KO'],
  ['analysis_preparation', 'description_analysis_preparation', 21, 21, 'ADD', [{description_analysis_preparation: 'a'.repeat(5001)}], 'description_max_size_KO'],
  ['analysis_preparation', 'description_analysis_preparation', 22, 22, 'ADD', [{description_analysis_preparation: 'Protocolo que describe los procedimientos estándar para preparación incluyendo limpieza secado y homogeneización de muestras'}], 'description_format_KO'],
  ['analysis_preparation', 'description_analysis_preparation', 23, 23, 'EDIT', [{id_analysis_preparation: '456', description_analysis_preparation: 'Updated description for analysis preparation with sufficient length for validation'}], true],
  ['analysis_preparation', 'description_analysis_preparation', 24, 24, 'SEARCH', [{description_analysis_preparation: 'procedures'}], true],
  ['analysis_preparation', 'description_analysis_preparation', 25, 25, 'SEARCH', [{description_analysis_preparation: 'a'.repeat(5001)}], 'description_max_size_KO'],

  // ===== BIB_ANALYSIS_PREPARATION =====
  ['analysis_preparation', 'bib_analysis_preparation', 26, 26, 'ADD', [{bib_analysis_preparation: 'ISO 11464 2006 - Soil quality pretreatment of samples for physico chemical analysis'}], true],
  ['analysis_preparation', 'bib_analysis_preparation', 27, 27, 'ADD', [{bib_analysis_preparation: ''}], 'bib_required'],
  ['analysis_preparation', 'bib_analysis_preparation', 28, 28, 'ADD', [{bib_analysis_preparation: 'ISO'}], 'bib_min_size_KO'],
  ['analysis_preparation', 'bib_analysis_preparation', 29, 29, 'ADD', [{bib_analysis_preparation: 'a'.repeat(201)}], 'bib_max_size_KO'],
  ['analysis_preparation', 'bib_analysis_preparation', 30, 30, 'ADD', [{bib_analysis_preparation: 'García et al. 2020. Métodos de análisis en suelos - Técnicas químicas y biológicas'}], true],
  ['analysis_preparation', 'bib_analysis_preparation', 31, 31, 'EDIT', [{id_analysis_preparation: '456', bib_analysis_preparation: 'Updated Bib Reference 2024'}], true],
  ['analysis_preparation', 'bib_analysis_preparation', 32, 32, 'SEARCH', [{bib_analysis_preparation: 'ISO'}], true],
  ['analysis_preparation', 'bib_analysis_preparation', 33, 33, 'SEARCH', [{bib_analysis_preparation: 'a'.repeat(201)}], 'bib_max_size_KO'],

  // ===== FILE_ANALYSIS_PREPARATION =====
  ['analysis_preparation', 'file_analysis_preparation', 34, 34, 'ADD', [{file_analysis_preparation: 'protocol_guide.pdf', mimeType: 'application/pdf', size: 1500000}], true],
  ['analysis_preparation', 'file_analysis_preparation', 35, 35, 'ADD', [{file_analysis_preparation: 'preparation.doc', mimeType: 'application/msword', size: 1500000}], true],
  ['analysis_preparation', 'file_analysis_preparation', 36, 36, 'ADD', [{file_analysis_preparation: 'document.docx', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', size: 1500000}], true],
  ['analysis_preparation', 'file_analysis_preparation', 37, 37, 'ADD', [{file_analysis_preparation: null}], 'file_required'],
  ['analysis_preparation', 'file_analysis_preparation', 38, 38, 'ADD', [{file_analysis_preparation: 'invalid.txt', mimeType: 'text/plain', size: 1000000}], 'file_format_KO'],
  ['analysis_preparation', 'file_analysis_preparation', 39, 39, 'ADD', [{file_analysis_preparation: 'large_file.pdf', mimeType: 'application/pdf', size: 2500000}], 'file_max_size_KO'],
  ['analysis_preparation', 'file_analysis_preparation', 40, 40, 'ADD', [{file_analysis_preparation: 'protócolo.pdf', mimeType: 'application/pdf', size: 1500000}], 'file_name_format_KO'],
  ['analysis_preparation', 'file_analysis_preparation', 41, 41, 'ADD', [{file_analysis_preparation: 'my document.pdf', mimeType: 'application/pdf', size: 1500000}], 'file_name_format_KO'],
  ['analysis_preparation', 'file_analysis_preparation', 42, 42, 'ADD', [{file_analysis_preparation: 'doc.pdf', mimeType: 'application/pdf', size: 1500000}], 'file_name_min_size_KO'],
  ['analysis_preparation', 'file_analysis_preparation', 43, 43, 'ADD', [{file_analysis_preparation: 'a'.repeat(90) + '.pdf', mimeType: 'application/pdf', size: 1500000}], 'file_name_max_size_KO'],
  ['analysis_preparation', 'file_analysis_preparation', 44, 44, 'EDIT', [{id_analysis_preparation: '456', file_analysis_preparation: 'updated_protocol.pdf', mimeType: 'application/pdf', size: 1200000}], true],
  ['analysis_preparation', 'file_analysis_preparation', 45, 45, 'SEARCH', [{file_analysis_preparation: 'protocol'}], true]
];
