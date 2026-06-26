// CHARACTERISTIC - Tests de envío de formulario (reorganizado: ADD + EDIT + SEARCH + DELETE + READ)

window.characteristic_TestSubmit = [
  // ===== ADD TESTS =====
  ['characteristic', 'ADD', 1, 'Crear characteristic válido', {id_characteristic: '1', name_characteristic: 'Physical Property', description_characteristic: 'Refers to the physical characteristics of soil samples such as texture particle size and structure', data_type_characteristic: 'text', category_characteristic: 'soil_site', bibref_characteristic: 'USDA Technical Note 1234', file_characteristic: 'characteristicsRef.pdf'}, true],
  ['characteristic', 'ADD', 2, 'Crear sin ID', {name_characteristic: 'Chemical Element', description_characteristic: 'Chemical elements present in soil matrices analyzed using XRF and spectroscopy methods', data_type_characteristic: 'set', category_characteristic: 'soil_chem', bibref_characteristic: 'ISO 11565 2019', file_characteristic: 'chemicalRef.doc'}, 'id_required'],
  ['characteristic', 'ADD', 3, 'Crear sin nombre', {id_characteristic: '2', description_characteristic: 'Biological content and microorganism indicators in soil samples', data_type_characteristic: 'set', category_characteristic: 'soil_chem', bibref_characteristic: 'EPA Method 1664', file_characteristic: 'biologyRef.docx'}, 'name_required'],
  ['characteristic', 'ADD', 4, 'Crear sin descripción', {id_characteristic: '3', name_characteristic: 'Porosity Index', description_characteristic: '', data_type_characteristic: 'set', category_characteristic: 'soil_site', bibref_characteristic: 'ISO 9277 2010 Methods', file_characteristic: 'porosityRef.pdf'}, 'description_required'],
  ['characteristic', 'ADD', 5, 'Crear sin tipo de dato', {id_characteristic: '4', name_characteristic: 'Moisture Content', description_characteristic: 'Percentage of water content in soil samples measured gravimetrically', data_type_characteristic: '', category_characteristic: 'soil_site', bibref_characteristic: 'ASTM D2216 Standard Method', file_characteristic: 'moistureRef.pdf'}, 'data_type_required'],
  ['characteristic', 'ADD', 6, 'Crear sin categoría', {id_characteristic: '5', name_characteristic: 'Organic Matter', description_characteristic: 'Organic matter percentage determined through loss on ignition method at high temperature', data_type_characteristic: 'set', category_characteristic: '', bibref_characteristic: 'ISO 10694 1995', file_characteristic: 'organicRef.pdf'}, 'category_required'],
  ['characteristic', 'ADD', 7, 'Crear sin referencia bibliográfica', {id_characteristic: '6', name_characteristic: 'pH Value Analysis', description_characteristic: 'Soil pH measured using calibrated pH meters in soil water suspension ratio one to two', data_type_characteristic: 'set', category_characteristic: 'soil_chem', bibref_characteristic: '', file_characteristic: 'pHRef.pdf'}, 'bibref_required'],
  ['characteristic', 'ADD', 8, 'Crear sin archivo', {id_characteristic: '7', name_characteristic: 'Cation Exchange Capacity', description_characteristic: 'CEC measured using ammonium acetate method expressed in meq per one hundred grams of soil', data_type_characteristic: 'set', category_characteristic: 'soil_chem', bibref_characteristic: 'ISO 23470 2011 Method', file_characteristic: ''}, 'file_required'],
  ['characteristic', 'ADD', 9, 'Crear con todos los valores válidos', {id_characteristic: '9', name_characteristic: 'Soil Texture Classes', description_characteristic: 'Classification of soil particles by size distribution using hydrometer and pipette analysis methods', data_type_characteristic: 'set', category_characteristic: 'soil_site', bibref_characteristic: 'USDA Handbook 60 Soil Classification', file_characteristic: 'textureRef.pdf'}, true],

  // ===== EDIT TESTS =====
  ['characteristic', 'EDIT', 10, 'Editar nombre válido', {id_characteristic: '1', name_characteristic: 'EDITd Physical Property'}, true],
  ['characteristic', 'EDIT', 11, 'Editar con nombre vacío', {id_characteristic: '1', name_characteristic: ''}, 'name_required'],
  ['characteristic', 'EDIT', 12, 'Editar ID inexistente', {id_characteristic: '', name_characteristic: 'New Name'}, 'id_not_found'],
  ['characteristic', 'EDIT', 13, 'Editar descripción corta', {id_characteristic: '1', description_characteristic: 'Short description'}, 'description_min_size_KO'],
  ['characteristic', 'EDIT', 14, 'Editar solo un campo', {id_characteristic: '1', category_characteristic: 'soil_chem'}, true],
  ['characteristic', 'EDIT', 15, 'Editar múltiples campos', {id_characteristic: '2', name_characteristic: 'EDITd Chemical', category_characteristic: 'soil_site'}, true],
  ['characteristic', 'EDIT', 16, 'Editar tipo de dato', {id_characteristic: '3', data_type_characteristic: 'text'}, true],
  ['characteristic', 'EDIT', 17, 'Editar referencia bibliográfica', {id_characteristic: '4', bibref_characteristic: 'New Reference Book 2024'}, true],
  ['characteristic', 'EDIT', 18, 'Editar archivo', {id_characteristic: '5', file_characteristic: 'newFile.pdf'}, true],
  ['characteristic', 'EDIT', 19, 'Editar permitir todos los campos', {id_characteristic: '2', name_characteristic: 'EDITd Name', description_characteristic: 'EDITd comprehensive description for testing all editable fields' + 'a'.repeat(80), data_type_characteristic: 'set', category_characteristic: 'soil_site', bibref_characteristic: 'EDITd Reference 2024', file_characteristic: 'EDITdRef.pdf'}, true],
  ['characteristic', 'EDIT', 20, 'Editar solo descripción', {id_characteristic: '3', description_characteristic: 'Completely EDITd description with new information and analysis' + 'a'.repeat(80)}, true],
  ['characteristic', 'EDIT', 21, 'Editar conservar otros campos', {id_characteristic: '4', name_characteristic: 'New Name Only'}, true],

  // ===== SEARCH TESTS =====
  ['characteristic', 'SEARCH', 22, 'Buscar por ID exacto', {id_characteristic: '1'}, true],
  ['characteristic', 'SEARCH', 23, 'Buscar por ID mayor a máximo', {id_characteristic: '123456789012'}, 'id_max_size_KO'],
  ['characteristic', 'SEARCH', 24, 'Buscar por nombre exacto', {name_characteristic: 'Physical Property'}, true],
  ['characteristic', 'SEARCH', 25, 'Buscar por nombre mayor a max', {name_characteristic: 'a'.repeat(101)}, 'name_max_size_KO'],
  ['characteristic', 'SEARCH', 26, 'Buscar por categoría', {category_characteristic: 'soil_chem'}, true],
  ['characteristic', 'SEARCH', 27, 'Buscar por tipo de dato', {data_type_characteristic: 'set'}, true],
  ['characteristic', 'SEARCH', 28, 'Buscar por descripción parcial', {description_characteristic: 'soil'}, true],
  ['characteristic', 'SEARCH', 29, 'Buscar descripción mayor a max', {description_characteristic: 'a'.repeat(5001)}, 'description_max_size_KO'],
  ['characteristic', 'SEARCH', 30, 'Buscar por bibref', {bibref_characteristic: 'ISO'}, true],
  ['characteristic', 'SEARCH', 31, 'Buscar con múltiples criterios', {name_characteristic: 'Property', category_characteristic: 'soil_site'}, true],
  ['characteristic', 'SEARCH', 32, 'Buscar sin coincidencias', {name_characteristic: 'NonExistent'}, true],

];
