// CHARACTERISTIC - Tests de envío de formulario (reorganizado: ADD + EDIT + SEARCH + DELETE + READ)

window.characteristic_TestSubmit = [
  // ===== CREATE (ADD) TESTS =====
  ['characteristic', 'CREATE', 1, 'Crear characteristic válido', {id_characteristic: '1', name_characteristic: 'Physical Property', description_characteristic: 'Refers to the physical characteristics of soil samples such as texture particle size and structure', data_type_characteristic: 'string', category_characteristic: 'Proprietà', bibref_characteristic: 'USDA Technical Note 1234', file_characteristic: 'characteristics_ref.pdf'}, true],
  ['characteristic', 'CREATE', 2, 'Crear sin ID', {name_characteristic: 'Chemical Element', description_characteristic: 'Chemical elements present in soil matrices analyzed using XRF and spectroscopy methods', data_type_characteristic: 'element', category_characteristic: 'Chimica', bibref_characteristic: 'ISO 11565 2019', file_characteristic: 'chemical_ref.doc'}, 'id_required'],
  ['characteristic', 'CREATE', 3, 'Crear sin nombre', {id_characteristic: '2', description_characteristic: 'Biological content and microorganism indicators in soil samples', data_type_characteristic: 'vector', category_characteristic: 'Biologia', bibref_characteristic: 'EPA Method 1664', file_characteristic: 'biology_ref.docx'}, 'name_required'],
  ['characteristic', 'CREATE', 4, 'Crear sin descripción', {id_characteristic: '3', name_characteristic: 'Porosity Index', data_type_characteristic: 'float', category_characteristic: 'Proprietà', bibref_characteristic: 'ISO 9277 2010 Methods', file_characteristic: 'porosity_ref.pdf'}, 'description_required'],
  ['characteristic', 'CREATE', 5, 'Crear sin tipo de dato', {id_characteristic: '4', name_characteristic: 'Moisture Content', description_characteristic: 'Percentage of water content in soil samples measured gravimetrically', category_characteristic: 'Proprietà', bibref_characteristic: 'ASTM D2216 Standard Method', file_characteristic: 'moisture_ref.pdf'}, 'data_type_required'],
  ['characteristic', 'CREATE', 6, 'Crear sin categoría', {id_characteristic: '5', name_characteristic: 'Organic Matter', description_characteristic: 'Organic matter percentage determined through loss on ignition method at high temperature', data_type_characteristic: 'float', bibref_characteristic: 'ISO 10694 1995', file_characteristic: 'organic_ref.pdf'}, 'category_required'],
  ['characteristic', 'CREATE', 7, 'Crear sin referencia bibliográfica', {id_characteristic: '6', name_characteristic: 'pH Value Analysis', description_characteristic: 'Soil pH measured using calibrated pH meters in soil water suspension ratio one to two', data_type_characteristic: 'float', category_characteristic: 'Chimica', file_characteristic: 'pH_ref.pdf'}, 'bibref_required'],
  ['characteristic', 'CREATE', 8, 'Crear sin archivo', {id_characteristic: '7', name_characteristic: 'Cation Exchange Capacity', description_characteristic: 'CEC measured using ammonium acetate method expressed in meq per one hundred grams of soil', data_type_characteristic: 'float', category_characteristic: 'Chimica', bibref_characteristic: 'ISO 23470 2011 Method'}, 'file_required'],
  ['characteristic', 'CREATE', 9, 'Crear todo vacío', {}, 'multiple_errors'],
  ['characteristic', 'CREATE', 10, 'Crear con todos los valores válidos', {id_characteristic: '9', name_characteristic: 'Soil Texture Classes', description_characteristic: 'Classification of soil particles by size distribution using hydrometer and pipette analysis methods', data_type_characteristic: 'enum', category_characteristic: 'Proprietà', bibref_characteristic: 'USDA Handbook 60 Soil Classification', file_characteristic: 'texture_ref.pdf'}, true],

  // ===== EDIT/UPDATE TESTS =====
  ['characteristic', 'UPDATE', 11, 'Actualizar nombre válido', {id_characteristic: '1', name_characteristic: 'Updated Physical Property'}, true],
  ['characteristic', 'UPDATE', 12, 'Actualizar con nombre vacío', {id_characteristic: '1', name_characteristic: ''}, 'name_required'],
  ['characteristic', 'UPDATE', 13, 'Actualizar ID inexistente', {id_characteristic: '999', name_characteristic: 'New Name'}, 'id_not_found'],
  ['characteristic', 'UPDATE', 14, 'Actualizar descripción corta', {id_characteristic: '1', description_characteristic: 'Short description'}, 'description_min_size_KO'],
  ['characteristic', 'UPDATE', 15, 'Actualizar solo un campo', {id_characteristic: '1', category_characteristic: 'Biologia'}, true],
  ['characteristic', 'UPDATE', 16, 'Actualizar con valores duplicados', {id_characteristic: '1', name_characteristic: 'Existing Name'}, 'name_duplicate_KO'],
  ['characteristic', 'UPDATE', 17, 'Actualizar múltiples campos', {id_characteristic: '2', name_characteristic: 'Updated Chemical', category_characteristic: 'Proprietà'}, true],
  ['characteristic', 'UPDATE', 18, 'Actualizar tipo de dato', {id_characteristic: '3', data_type_characteristic: 'integer'}, true],
  ['characteristic', 'UPDATE', 19, 'Actualizar referencia bibliográfica', {id_characteristic: '4', bibref_characteristic: 'New Reference Book 2024'}, true],
  ['characteristic', 'UPDATE', 20, 'Actualizar archivo', {id_characteristic: '5', file_characteristic: 'new_file.pdf'}, true],
  ['characteristic', 'EDIT', 21, 'Editar permitir todos los campos', {id_characteristic: '2', name_characteristic: 'Updated Name', description_characteristic: 'Updated comprehensive description for testing all editable fields', data_type_characteristic: 'float', category_characteristic: 'Proprietà', bibref_characteristic: 'Updated Reference 2024', file_characteristic: 'updated_ref.pdf'}, true],
  ['characteristic', 'EDIT', 22, 'Editar con ID inexistente', {id_characteristic: '999', name_characteristic: 'New Name'}, 'id_not_found'],
  ['characteristic', 'EDIT', 23, 'Editar solo descripción', {id_characteristic: '3', description_characteristic: 'Completely updated description with new information and analysis'}, true],
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

  // ===== DELETE TESTS =====
  ['characteristic', 'DELETE', 36, 'Eliminar característica válida', {id_characteristic: '1'}, true],
  ['characteristic', 'DELETE', 37, 'Eliminar característica inexistente', {id_characteristic: '999'}, 'id_not_found'],
  ['characteristic', 'DELETE', 38, 'Eliminar característica con referencia', {id_characteristic: '2'}, true],
  ['characteristic', 'DELETE', 39, 'Eliminar últimas características', {id_characteristic: '3'}, true],
  ['characteristic', 'DELETE', 40, 'Eliminar una segunda vez', {id_characteristic: '1'}, 'id_not_found'],
  ['characteristic', 'DELETE', 41, 'Eliminar característica en uso', {id_characteristic: '4'}, 'integrity_constraint_violation'],
  ['characteristic', 'DELETE', 42, 'Eliminar sin ID', {}, 'id_required'],
  ['characteristic', 'DELETE', 43, 'Eliminar ID inválido', {id_characteristic: 'abc'}, 'id_format_KO'],
  ['characteristic', 'DELETE', 44, 'Eliminar antes de crear', {id_characteristic: '100'}, 'id_not_found'],
  ['characteristic', 'DELETE', 45, 'Eliminar la última entrada', {id_characteristic: '9'}, true],

  // ===== READ TESTS =====
  ['characteristic', 'READ', 46, 'Leer todas las características', {}, true],
  ['characteristic', 'READ', 47, 'Leer característica específica', {id_characteristic: '1'}, true],
  ['characteristic', 'READ', 48, 'Leer característica inexistente', {id_characteristic: '999'}, 'id_not_found'],
  ['characteristic', 'READ', 49, 'Leer con ID inválido', {id_characteristic: 'invalid'}, 'id_format_KO'],
  ['characteristic', 'READ', 50, 'Leer después de actualización', {id_characteristic: '2'}, true],
  ['characteristic', 'READ', 51, 'Leer después de eliminación', {id_characteristic: '1'}, 'id_not_found'],
  ['characteristic', 'READ', 52, 'Leer todas las características activas', {}, true],
  ['characteristic', 'READ', 53, 'Leer ordenadas por nombre', {sort: 'name'}, true],
  ['characteristic', 'READ', 54, 'Leer con filtro de categoría', {category_characteristic: 'Chimica'}, true],
  ['characteristic', 'READ', 55, 'Leer con paginación', {limit: 5, offset: 0}, true]
];
