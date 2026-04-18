// CHARACTERISTIC - Definiciones de tests (reorganizado por campo: ADD + EDIT + SEARCH)

window.characteristic_def_tests = [
  // ===== ID_CHARACTERISTIC =====
  ['characteristic', 'id_characteristic', 'input', 1, 'Comprobar tamaño válido de id', 'ADD', true, ''],
  ['characteristic', 'id_characteristic', 'input', 2, 'Comprobar id vacío', 'ADD', 'id_required_KO', 'El ID es requerido'],
  ['characteristic', 'id_characteristic', 'input', 3, 'Comprobar id con caracteres no dígitos', 'ADD', 'id_format_KO', 'El ID solo debe contener dígitos'],
  ['characteristic', 'id_characteristic', 'input', 4, 'Comprobar id mayor a 11 dígitos', 'ADD', 'id_max_size_KO', 'El ID debe tener máximo 11 dígitos'],
  ['characteristic', 'id_characteristic', 'input', 5, 'Comprobar buscar por ID válido', 'SEARCH', true, ''],
  ['characteristic', 'id_characteristic', 'input', 6, 'Comprobar buscar por ID mayor a máximo', 'SEARCH', 'id_max_size_KO', 'El ID debe tener máximo 11 dígitos'],

  // ===== NAME_CHARACTERISTIC =====
  ['characteristic', 'name_characteristic', 'input', 7, 'Comprobar nombre válido', 'ADD', true, ''],
  ['characteristic', 'name_characteristic', 'input', 8, 'Comprobar nombre vacío', 'ADD', 'name_required', 'El nombre es requerido'],
  ['characteristic', 'name_characteristic', 'input', 9, 'Comprobar nombre con acentos', 'ADD', 'name_format_KO', 'El nombre no puede contener acentos o ñ'],
  ['characteristic', 'name_characteristic', 'input', 10, 'Comprobar nombre menor a 8 caracteres', 'ADD', 'name_min_size_KO', 'El nombre debe tener mínimo 8 caracteres'],
  ['characteristic', 'name_characteristic', 'input', 11, 'Comprobar nombre mayor a 100 caracteres', 'ADD', 'name_max_size_KO', 'El nombre debe tener máximo 100 caracteres'],
  ['characteristic', 'name_characteristic', 'input', 12, 'Comprobar nombre duplicado (UNIQUE)', 'ADD', 'name_duplicate_KO', 'El nombre ya existe en la base de datos'],
  ['characteristic', 'name_characteristic', 'input', 13, 'Comprobar editar nombre válido', 'EDIT', true, ''],
  ['characteristic', 'name_characteristic', 'input', 14, 'Comprobar editar nombre vacío', 'EDIT', 'name_required', 'El nombre es requerido'],
  ['characteristic', 'name_characteristic', 'input', 15, 'Comprobar editar nombre menor a 8 caracteres', 'EDIT', 'name_min_size_KO', 'El nombre debe tener mínimo 8 caracteres'],
  ['characteristic', 'name_characteristic', 'input', 16, 'Comprobar editar nombre mayor a 100 caracteres', 'EDIT', 'name_max_size_KO', 'El nombre debe tener máximo 100 caracteres'],
  ['characteristic', 'name_characteristic', 'input', 17, 'Comprobar editar nombre duplicado', 'EDIT', 'name_duplicate_KO', 'El nombre ya existe en la base de datos'],
  ['characteristic', 'name_characteristic', 'input', 18, 'Comprobar buscar por nombre válido', 'SEARCH', true, ''],
  ['characteristic', 'name_characteristic', 'input', 19, 'Comprobar buscar por nombre mayor a 100', 'SEARCH', 'name_max_size_KO', 'El nombre debe tener máximo 100 caracteres'],
  ['characteristic', 'name_characteristic', 'input', 20, 'Comprobar búsqueda múltiples criterios nombre', 'SEARCH', true, ''],

  // ===== DESCRIPTION_CHARACTERISTIC =====
  ['characteristic', 'description_characteristic', 'textarea', 21, 'Comprobar descripción válida', 'ADD', true, ''],
  ['characteristic', 'description_characteristic', 'textarea', 22, 'Comprobar descripción vacía', 'ADD', 'description_required', 'La descripción es requerida'],
  ['characteristic', 'description_characteristic', 'textarea', 23, 'Comprobar descripción menor a 80 caracteres', 'ADD', 'description_min_size_KO', 'La descripción debe tener mínimo 80 caracteres'],
  ['characteristic', 'description_characteristic', 'textarea', 24, 'Comprobar descripción mayor a 5000 caracteres', 'ADD', 'description_max_size_KO', 'La descripción debe tener máximo 5000 caracteres'],
  ['characteristic', 'description_characteristic', 'textarea', 25, 'Comprobar descripción con acentos', 'ADD', 'description_format_KO', 'La descripción no puede contener acentos o ñ'],
  ['characteristic', 'description_characteristic', 'textarea', 26, 'Comprobar descripción con caracteres especiales', 'ADD', true, ''],
  ['characteristic', 'description_characteristic', 'textarea', 27, 'Comprobar editar descripción válida', 'EDIT', true, ''],
  ['characteristic', 'description_characteristic', 'textarea', 28, 'Comprobar editar descripción vacía', 'EDIT', 'description_required', 'La descripción es requerida'],
  ['characteristic', 'description_characteristic', 'textarea', 29, 'Comprobar buscar por descripción válida', 'SEARCH', true, ''],
  ['characteristic', 'description_characteristic', 'textarea', 30, 'Comprobar buscar por descripción mayor a 5000', 'SEARCH', 'description_max_size_KO', 'La descripción debe tener máximo 5000 caracteres'],

  // ===== DATA_TYPE_CHARACTERISTIC =====
  ['characteristic', 'data_type_characteristic', 'select', 31, 'Comprobar data_type válido', 'ADD', true, ''],
  ['characteristic', 'data_type_characteristic', 'select', 32, 'Comprobar data_type vacío', 'ADD', 'data_type_required', 'El tipo de dato es requerido'],
  ['characteristic', 'data_type_characteristic', 'select', 33, 'Comprobar data_type enum válido', 'ADD', true, ''],
  ['characteristic', 'data_type_characteristic', 'select', 34, 'Comprobar editar data_type válido', 'EDIT', true, ''],
  ['characteristic', 'data_type_characteristic', 'select', 35, 'Comprobar buscar por data_type válido', 'SEARCH', true, ''],

  // ===== CATEGORY_CHARACTERISTIC =====
  ['characteristic', 'category_characteristic', 'select', 36, 'Comprobar category válida', 'ADD', true, ''],
  ['characteristic', 'category_characteristic', 'select', 37, 'Comprobar category vacía', 'ADD', 'category_required', 'La categoría es requerida'],
  ['characteristic', 'category_characteristic', 'select', 38, 'Comprobar editar category válida', 'EDIT', true, ''],
  ['characteristic', 'category_characteristic', 'select', 39, 'Comprobar buscar por category válida', 'SEARCH', true, ''],

  // ===== BIBREF_CHARACTERISTIC =====
  ['characteristic', 'bibref_characteristic', 'input', 40, 'Comprobar bibref válida', 'ADD', true, ''],
  ['characteristic', 'bibref_characteristic', 'input', 41, 'Comprobar bibref vacía', 'ADD', 'bibref_required', 'La referencia bibliográfica es requerida'],
  ['characteristic', 'bibref_characteristic', 'input', 42, 'Comprobar bibref menor a 16 caracteres', 'ADD', 'bibref_min_size_KO', 'La referencia debe tener mínimo 16 caracteres'],
  ['characteristic', 'bibref_characteristic', 'input', 43, 'Comprobar bibref mayor a 200 caracteres', 'ADD', 'bibref_max_size_KO', 'La referencia debe tener máximo 200 caracteres'],
  ['characteristic', 'bibref_characteristic', 'input', 44, 'Comprobar bibref con caracteres especiales', 'ADD', true, ''],
  ['characteristic', 'bibref_characteristic', 'input', 45, 'Comprobar editar bibref válida', 'EDIT', true, ''],
  ['characteristic', 'bibref_characteristic', 'input', 46, 'Comprobar buscar por bibref válida', 'SEARCH', true, ''],
  ['characteristic', 'bibref_characteristic', 'input', 47, 'Comprobar buscar por bibref mayor a 200', 'SEARCH', 'bibref_max_size_KO', 'La referencia debe tener máximo 200 caracteres'],

  // ===== FILE_CHARACTERISTIC =====
  ['characteristic', 'file_characteristic', 'file', 48, 'Comprobar archivo válido PDF', 'ADD', true, ''],
  ['characteristic', 'file_characteristic', 'file', 49, 'Comprobar archivo válido DOC', 'ADD', true, ''],
  ['characteristic', 'file_characteristic', 'file', 50, 'Comprobar archivo válido DOCX', 'ADD', true, ''],
  ['characteristic', 'file_characteristic', 'file', 51, 'Comprobar archivo no seleccionado', 'ADD', 'file_required', 'El archivo es requerido'],
  ['characteristic', 'file_characteristic', 'file', 52, 'Comprobar archivo con extensión no permitida', 'ADD', 'file_format_KO', 'Solo se permiten archivos PDF, DOC o DOCX'],
  ['characteristic', 'file_characteristic', 'file', 53, 'Comprobar archivo mayor a 200KB', 'ADD', 'file_max_size_KO', 'El archivo no debe superar 200KB'],
  ['characteristic', 'file_characteristic', 'file', 54, 'Comprobar archivo con acentos en nombre', 'ADD', 'file_name_format_KO', 'El nombre del archivo no puede contener acentos o ñ'],
  ['characteristic', 'file_characteristic', 'file', 55, 'Comprobar archivo con espacios en nombre', 'ADD', 'file_name_format_KO', 'El nombre del archivo no puede contener espacios'],
  ['characteristic', 'file_characteristic', 'file', 56, 'Comprobar archivo con nombre menor a 7 caracteres', 'ADD', 'file_name_min_size_KO', 'El nombre del archivo debe tener mínimo 7 caracteres'],
  ['characteristic', 'file_characteristic', 'file', 57, 'Comprobar archivo con nombre mayor a 100 caracteres', 'ADD', 'file_name_max_size_KO', 'El nombre del archivo debe tener máximo 100 caracteres'],
  ['characteristic', 'file_characteristic', 'file', 58, 'Comprobar editar archivo válido', 'EDIT', true, ''],
  ['characteristic', 'file_characteristic', 'file', 59, 'Comprobar buscar por nombre archivo', 'SEARCH', true, '']
];

window.characteristic_tests_fields = [
  // ===== ID_CHARACTERISTIC =====
  ['characteristic', 'id_characteristic', 1, 1, 'ADD', [{id_characteristic: '123'}], true],
  ['characteristic', 'id_characteristic', 2, 2, 'ADD', [{id_characteristic: ''}], 'id_required_KO'],
  ['characteristic', 'id_characteristic', 3, 3, 'ADD', [{id_characteristic: 'abc123'}], 'id_format_KO'],
  ['characteristic', 'id_characteristic', 4, 4, 'ADD', [{id_characteristic: '123456789012'}], 'id_max_size_KO'],
  ['characteristic', 'id_characteristic', 5, 5, 'SEARCH', [{id_characteristic: '123'}], true],
  ['characteristic', 'id_characteristic', 6, 6, 'SEARCH', [{id_characteristic: '123456789012'}], 'id_max_size_KO'],

  // ===== NAME_CHARACTERISTIC =====
  ['characteristic', 'name_characteristic', 7, 7, 'ADD', [{name_characteristic: 'Valid Characteristic Name'}], true],
  ['characteristic', 'name_characteristic', 8, 8, 'ADD', [{name_characteristic: ''}], 'name_required'],
  ['characteristic', 'name_characteristic', 9, 9, 'ADD', [{name_characteristic: 'Característica con acentos'}], 'name_format_KO'],
  ['characteristic', 'name_characteristic', 10, 10, 'ADD', [{name_characteristic: 'Short'}], 'name_min_size_KO'],
  ['characteristic', 'name_characteristic', 11, 11, 'ADD', [{name_characteristic: 'a'.repeat(101)}], 'name_max_size_KO'],
  ['characteristic', 'name_characteristic', 12, 12, 'ADD', [{name_characteristic: 'Duplicate Name'}], 'name_duplicate_KO'],
  ['characteristic', 'name_characteristic', 13, 13, 'EDIT', [{id_characteristic: '123', name_characteristic: 'Updated Name'}], true],
  ['characteristic', 'name_characteristic', 14, 14, 'EDIT', [{id_characteristic: '123', name_characteristic: ''}], 'name_required'],
  ['characteristic', 'name_characteristic', 15, 15, 'EDIT', [{id_characteristic: '123', name_characteristic: 'Short'}], 'name_min_size_KO'],
  ['characteristic', 'name_characteristic', 16, 16, 'EDIT', [{id_characteristic: '123', name_characteristic: 'a'.repeat(101)}], 'name_max_size_KO'],
  ['characteristic', 'name_characteristic', 17, 17, 'EDIT', [{id_characteristic: '123', name_characteristic: 'Another Duplicate'}], 'name_duplicate_KO'],
  ['characteristic', 'name_characteristic', 18, 18, 'SEARCH', [{name_characteristic: 'Characteristic'}], true],
  ['characteristic', 'name_characteristic', 19, 19, 'SEARCH', [{name_characteristic: 'a'.repeat(101)}], 'name_max_size_KO'],
  ['characteristic', 'name_characteristic', 20, 20, 'SEARCH', [{id_characteristic: '123', name_characteristic: 'Name'}], true],

  // ===== DESCRIPTION_CHARACTERISTIC =====
  ['characteristic', 'description_characteristic', 21, 21, 'ADD', [{description_characteristic: 'This is a valid description with sufficient length for validation purposes'}], true],
  ['characteristic', 'description_characteristic', 22, 22, 'ADD', [{description_characteristic: ''}], 'description_required'],
  ['characteristic', 'description_characteristic', 23, 23, 'ADD', [{description_characteristic: 'Short'}], 'description_min_size_KO'],
  ['characteristic', 'description_characteristic', 24, 24, 'ADD', [{description_characteristic: 'a'.repeat(5001)}], 'description_max_size_KO'],
  ['characteristic', 'description_characteristic', 25, 25, 'ADD', [{description_characteristic: 'Descripción con acentos y caracteres especiales'}], 'description_format_KO'],
  ['characteristic', 'description_characteristic', 26, 26, 'ADD', [{description_characteristic: 'Description with valid content and special symbols like @ # $ %'}], true],
  ['characteristic', 'description_characteristic', 27, 27, 'EDIT', [{id_characteristic: '123', description_characteristic: 'Updated description with sufficient content for validation'}], true],
  ['characteristic', 'description_characteristic', 28, 28, 'EDIT', [{id_characteristic: '123', description_characteristic: ''}], 'description_required'],
  ['characteristic', 'description_characteristic', 29, 29, 'SEARCH', [{description_characteristic: 'valid'}], true],
  ['characteristic', 'description_characteristic', 30, 30, 'SEARCH', [{description_characteristic: 'a'.repeat(5001)}], 'description_max_size_KO'],

  // ===== DATA_TYPE_CHARACTERISTIC =====
  ['characteristic', 'data_type_characteristic', 31, 31, 'ADD', [{data_type_characteristic: 'String'}], true],
  ['characteristic', 'data_type_characteristic', 32, 32, 'ADD', [{data_type_characteristic: ''}], 'data_type_required'],
  ['characteristic', 'data_type_characteristic', 33, 33, 'ADD', [{data_type_characteristic: 'Integer'}], true],
  ['characteristic', 'data_type_characteristic', 34, 34, 'EDIT', [{id_characteristic: '123', data_type_characteristic: 'Float'}], true],
  ['characteristic', 'data_type_characteristic', 35, 35, 'SEARCH', [{data_type_characteristic: 'String'}], true],

  // ===== CATEGORY_CHARACTERISTIC =====
  ['characteristic', 'category_characteristic', 36, 36, 'ADD', [{category_characteristic: 'Physical'}], true],
  ['characteristic', 'category_characteristic', 37, 37, 'ADD', [{category_characteristic: ''}], 'category_required'],
  ['characteristic', 'category_characteristic', 38, 38, 'EDIT', [{id_characteristic: '123', category_characteristic: 'Chemical'}], true],
  ['characteristic', 'category_characteristic', 39, 39, 'SEARCH', [{category_characteristic: 'Physical'}], true],

  // ===== BIBREF_CHARACTERISTIC =====
  ['characteristic', 'bibref_characteristic', 40, 40, 'ADD', [{bibref_characteristic: 'ISO 11464 2006 Standard Reference'}], true],
  ['characteristic', 'bibref_characteristic', 41, 41, 'ADD', [{bibref_characteristic: ''}], 'bibref_required'],
  ['characteristic', 'bibref_characteristic', 42, 42, 'ADD', [{bibref_characteristic: 'Short'}], 'bibref_min_size_KO'],
  ['characteristic', 'bibref_characteristic', 43, 43, 'ADD', [{bibref_characteristic: 'a'.repeat(201)}], 'bibref_max_size_KO'],
  ['characteristic', 'bibref_characteristic', 44, 44, 'ADD', [{bibref_characteristic: 'Garcia et al 2020 Environmental Standards Reference'}], true],
  ['characteristic', 'bibref_characteristic', 45, 45, 'EDIT', [{id_characteristic: '123', bibref_characteristic: 'Updated Reference 2024'}], true],
  ['characteristic', 'bibref_characteristic', 46, 46, 'SEARCH', [{bibref_characteristic: 'ISO'}], true],
  ['characteristic', 'bibref_characteristic', 47, 47, 'SEARCH', [{bibref_characteristic: 'a'.repeat(201)}], 'bibref_max_size_KO'],

  // ===== FILE_CHARACTERISTIC =====
  ['characteristic', 'file_characteristic', 48, 48, 'ADD', [{file_characteristic: 'document.pdf', mimeType: 'application/pdf', size: 150000}], true],
  ['characteristic', 'file_characteristic', 49, 49, 'ADD', [{file_characteristic: 'report.doc', mimeType: 'application/msword', size: 150000}], true],
  ['characteristic', 'file_characteristic', 50, 50, 'ADD', [{file_characteristic: 'data.docx', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', size: 150000}], true],
  ['characteristic', 'file_characteristic', 51, 51, 'ADD', [{file_characteristic: null}], 'file_required'],
  ['characteristic', 'file_characteristic', 52, 52, 'ADD', [{file_characteristic: 'invalid.txt', mimeType: 'text/plain', size: 100000}], 'file_format_KO'],
  ['characteristic', 'file_characteristic', 53, 53, 'ADD', [{file_characteristic: 'large_file.pdf', mimeType: 'application/pdf', size: 250000}], 'file_max_size_KO'],
  ['characteristic', 'file_characteristic', 54, 54, 'ADD', [{file_characteristic: 'documénto.pdf', mimeType: 'application/pdf', size: 150000}], 'file_name_format_KO'],
  ['characteristic', 'file_characteristic', 55, 55, 'ADD', [{file_characteristic: 'my document.pdf', mimeType: 'application/pdf', size: 150000}], 'file_name_format_KO'],
  ['characteristic', 'file_characteristic', 56, 56, 'ADD', [{file_characteristic: 'doc.pdf', mimeType: 'application/pdf', size: 150000}], 'file_name_min_size_KO'],
  ['characteristic', 'file_characteristic', 57, 57, 'ADD', [{file_characteristic: 'a'.repeat(92) + '.pdf', mimeType: 'application/pdf', size: 150000}], 'file_name_max_size_KO'],
  ['characteristic', 'file_characteristic', 58, 58, 'EDIT', [{id_characteristic: '123', file_characteristic: 'updated_file.pdf', mimeType: 'application/pdf', size: 120000}], true],
  ['characteristic', 'file_characteristic', 59, 59, 'SEARCH', [{file_characteristic: 'document'}], true]
];
