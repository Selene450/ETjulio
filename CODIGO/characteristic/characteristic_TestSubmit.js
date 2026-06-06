// CHARACTERISTIC - Tests de envío de formulario (reorganizado: ADD + EDIT + SEARCH + DELETE + READ)

window.characteristic_TestSubmit = [
  // ===== ADD (ADD) TESTS =====
  ['characteristic', 'ADD', 1, 'Crear characteristic válido', {id_characteristic: '1', name_characteristic: 'Physical Property', description_characteristic: 'Refers to the physical characteristics of soil samples such as texture particle size and structure', data_type_characteristic: 'string', category_characteristic: 'Proprietà', bibref_characteristic: 'USDA Technical Note 1234', file_characteristic: 'characteristics_ref.pdf'}, true],
  ['characteristic', 'ADD', 2, 'Crear sin ID', {name_characteristic: 'Chemical Element', description_characteristic: 'Chemical elements present in soil matrices analyzed using XRF and spectroscopy methods', data_type_characteristic: 'element', category_characteristic: 'Chimica', bibref_characteristic: 'ISO 11565 2019', file_characteristic: 'chemical_ref.doc'}, 'id_required'],
  ['characteristic', 'ADD', 3, 'Crear sin nombre', {id_characteristic: '2', description_characteristic: 'Biological content and microorganism indicators in soil samples', data_type_characteristic: 'vector', category_characteristic: 'Biologia', bibref_characteristic: 'EPA Method 1664', file_characteristic: 'biology_ref.docx'}, 'name_required'],
  ['characteristic', 'ADD', 4, 'Crear sin descripción', {id_characteristic: '3', name_characteristic: 'Porosity Index', data_type_characteristic: 'float', category_characteristic: 'Proprietà', bibref_characteristic: 'ISO 9277 2010 Methods', file_characteristic: 'porosity_ref.pdf'}, 'description_required'],
  ['characteristic', 'ADD', 5, 'Crear sin tipo de dato', {id_characteristic: '4', name_characteristic: 'Moisture Content', description_characteristic: 'Percentage of water content in soil samples measured gravimetrically', category_characteristic: 'Proprietà', bibref_characteristic: 'ASTM D2216 Standard Method', file_characteristic: 'moisture_ref.pdf'}, 'data_type_required'],
  ['characteristic', 'ADD', 6, 'Crear sin categoría', {id_characteristic: '5', name_characteristic: 'Organic Matter', description_characteristic: 'Organic matter percentage determined through loss on ignition method at high temperature', data_type_characteristic: 'float', bibref_characteristic: 'ISO 10694 1995', file_characteristic: 'organic_ref.pdf'}, 'category_required'],
  ['characteristic', 'ADD', 7, 'Crear sin referencia bibliográfica', {id_characteristic: '6', name_characteristic: 'pH Value Analysis', description_characteristic: 'Soil pH measured using calibrated pH meters in soil water suspension ratio one to two', data_type_characteristic: 'float', category_characteristic: 'Chimica', file_characteristic: 'pH_ref.pdf'}, 'bibref_required'],
  ['characteristic', 'ADD', 8, 'Crear sin archivo', {id_characteristic: '7', name_characteristic: 'Cation Exchange Capacity', description_characteristic: 'CEC measured using ammonium acetate method expressed in meq per one hundred grams of soil', data_type_characteristic: 'float', category_characteristic: 'Chimica', bibref_characteristic: 'ISO 23470 2011 Method'}, 'file_required'],
  ['characteristic', 'ADD', 9, 'Crear todo vacío', {}, 'multiple_errors'],
  ['characteristic', 'ADD', 10, 'Crear con todos los valores válidos', {id_characteristic: '9', name_characteristic: 'Soil Texture Classes', description_characteristic: 'Classification of soil particles by size distribution using hydrometer and pipette analysis methods', data_type_characteristic: 'enum', category_characteristic: 'Proprietà', bibref_characteristic: 'USDA Handbook 60 Soil Classification', file_characteristic: 'texture_ref.pdf'}, true],

  // ===== EDIT/EDIT TESTS =====
  ['characteristic', 'EDIT', 11, 'Actualizar nombre válido', {id_characteristic: '1', name_characteristic: 'EDITd Physical Property'}, true],
  ['characteristic', 'EDIT', 12, 'Actualizar con nombre vacío', {id_characteristic: '1', name_characteristic: ''}, 'name_required'],
  ['characteristic', 'EDIT', 13, 'Actualizar ID inexistente', {id_characteristic: '999', name_characteristic: 'New Name'}, 'id_not_found'],
  ['characteristic', 'EDIT', 14, 'Actualizar descripción corta', {id_characteristic: '1', description_characteristic: 'Short description'}, 'description_min_size_KO'],
  ['characteristic', 'EDIT', 15, 'Actualizar solo un campo', {id_characteristic: '1', category_characteristic: 'Biologia'}, true],
  ['characteristic', 'EDIT', 16, 'Actualizar con valores duplicados', {id_characteristic: '1', name_characteristic: 'Existing Name'}, 'name_duplicate_KO'],
  ['characteristic', 'EDIT', 17, 'Actualizar múltiples campos', {id_characteristic: '2', name_characteristic: 'EDITd Chemical', category_characteristic: 'Proprietà'}, true],
  ['characteristic', 'EDIT', 18, 'Actualizar tipo de dato', {id_characteristic: '3', data_type_characteristic: 'integer'}, true],
  ['characteristic', 'EDIT', 19, 'Actualizar referencia bibliográfica', {id_characteristic: '4', bibref_characteristic: 'New Reference Book 2024'}, true],
  ['characteristic', 'EDIT', 20, 'Actualizar archivo', {id_characteristic: '5', file_characteristic: 'new_file.pdf'}, true],
  ['characteristic', 'EDIT', 21, 'Editar permitir todos los campos', {id_characteristic: '2', name_characteristic: 'EDITd Name', description_characteristic: 'EDITd comprehensive description for testing all editable fields', data_type_characteristic: 'float', category_characteristic: 'Proprietà', bibref_characteristic: 'EDITd Reference 2024', file_characteristic: 'EDITd_ref.pdf'}, true],
  ['characteristic', 'EDIT', 22, 'Editar con ID inexistente', {id_characteristic: '999', name_characteristic: 'New Name'}, 'id_not_found'],
  ['characteristic', 'EDIT', 23, 'Editar solo descripción', {id_characteristic: '3', description_characteristic: 'Completely EDITd description with new information and analysis'}, true],
  ['characteristic', 'EDIT', 24, 'Editar conservar otros campos', {id_characteristic: '4', name_characteristic: 'New Name Only'}, true],

  // ===== SEARCH TESTS =====
  ['characteristic', 'SEARCH', 25, 'Buscar por ID exacto', {id_characteristic: '1'}, true],
  ['characteristic', 'SEARCH', 26, 'Buscar por ID mayor a máximo', {id_characteristic: '123456789012'}, 'id_max_size_KO'],
  ['characteristic', 'SEARCH', 27, 'Buscar por nombre exacto', {name_characteristic: 'Physical Property'}, true],
  ['characteristic', 'SEARCH', 28, 'Buscar por nombre mayor a max', {name_characteristic: 'a'.repeat(101)}, 'name_max_size_KO'],
  ['characteristic', 'SEARCH', 29, 'Buscar por categoría', {category_characteristic: 'Chimica'}, true],
  ['characteristic', 'SEARCH', 30, 'Buscar por tipo de dato', {data_type_characteristic: 'float'}, true],
  ['characteristic', 'SEARCH', 31, 'Buscar por descripción parcial', {description_characteristic: 'soil'}, true],
  ['characteristic', 'SEARCH', 32, 'Buscar descripción mayor a max', {description_characteristic: 'a'.repeat(5001)}, 'description_max_size_KO'],
  ['characteristic', 'SEARCH', 33, 'Buscar por bibref', {bibref_characteristic: 'ISO'}, true],
  ['characteristic', 'SEARCH', 34, 'Buscar con múltiples criterios', {name_characteristic: 'Property', category_characteristic: 'Proprietà'}, true],
  ['characteristic', 'SEARCH', 35, 'Buscar sin coincidencias', {name_characteristic: 'NonExistent'}, true],

];
