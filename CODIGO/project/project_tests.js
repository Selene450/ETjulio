
// PROJECT - Definiciones de tests y pruebas de atributos
 
window.project_def_tests = [
  // ===== ID_PROJECT =====
  ['project', 'id_project', 'input', 1, 'Comprobar tamaño válido de id', 'ADD', true, ''],
  ['project', 'id_project', 'input', 2, 'Comprobar id vacío', 'ADD', 'id_required_KO', 'El ID es requerido'],
  ['project', 'id_project', 'input', 3, 'Comprobar id con caracteres no dígitos', 'ADD', 'id_format_KO', 'El ID solo debe contener dígitos'],
  ['project', 'id_project', 'input', 4, 'Comprobar id mayor a 11 dígitos', 'ADD', 'id_max_size_KO', 'El ID debe tener máximo 11 dígitos'],
  ['project', 'id_project', 'input', 5, 'Comprobar buscar por ID válido', 'SEARCH', true, ''],
  ['project', 'id_project', 'input', 6, 'Comprobar buscar por ID mayor a máximo', 'SEARCH', 'id_max_size_KO', 'El ID debe tener máximo 11 dígitos'],
  ['project', 'id_project', 'input', 7, 'Comprobar búsqueda con múltiples criterios', 'SEARCH', true, ''],
 
  // ===== NAME_PROJECT =====
  ['project', 'name_project', 'input', 8, 'Comprobar nombre válido', 'ADD', true, ''],
  ['project', 'name_project', 'input', 9, 'Comprobar nombre vacío', 'ADD', 'name_required', 'El nombre es requerido'],
  ['project', 'name_project', 'input', 10, 'Comprobar nombre con acentos', 'ADD', 'name_format_KO', 'El nombre no puede contener acentos o ñ'],
  ['project', 'name_project', 'input', 11, 'Comprobar nombre menor a 15 caracteres', 'ADD', 'name_min_size_KO', 'El nombre debe tener mínimo 15 caracteres'],
  ['project', 'name_project', 'input', 12, 'Comprobar nombre mayor a 100 caracteres', 'ADD', 'name_max_size_KO', 'El nombre debe tener máximo 100 caracteres'],
  ['project', 'name_project', 'input', 13, 'Comprobar editar nombre válido', 'EDIT', true, ''],
  ['project', 'name_project', 'input', 14, 'Comprobar editar nombre vacío', 'EDIT', 'name_required', 'El nombre es requerido'],
  ['project', 'name_project', 'input', 15, 'Comprobar buscar por nombre válido', 'SEARCH', true, ''],
  ['project', 'name_project', 'input', 16, 'Comprobar buscar por nombre mayor a 100', 'SEARCH', 'name_max_size_KO', 'El nombre debe tener máximo 100 caracteres'],
 
  // ===== START_DATE_PROJECT =====
  ['project', 'start_date_project', 'date', 17, 'Comprobar fecha inicio válida', 'ADD', true, ''],
  ['project', 'start_date_project', 'date', 18, 'Comprobar fecha inicio vacía', 'ADD', 'start_date_required', 'La fecha de inicio es requerida'],
  ['project', 'start_date_project', 'date', 19, 'Comprobar fecha inicio formato inválido', 'ADD', 'start_date_format_KO', 'La fecha debe tener formato DD-MM-YYYY'],
  ['project', 'start_date_project', 'date', 20, 'Comprobar editar fecha inicio válida', 'EDIT', true, ''],
  ['project', 'start_date_project', 'date', 21, 'Comprobar buscar por fecha inicio válida', 'SEARCH', true, ''],
 
  // ===== END_DATE_PROJECT =====
  ['project', 'end_date_project', 'date', 22, 'Comprobar fecha fin válida', 'ADD', true, ''],
  ['project', 'end_date_project', 'date', 23, 'Comprobar fecha fin vacía', 'ADD', 'end_date_required', 'La fecha de fin es requerida'],
  ['project', 'end_date_project', 'date', 24, 'Comprobar fecha fin formato inválido', 'ADD', 'end_date_format_KO', 'La fecha debe tener formato DD-MM-YYYY'],
  ['project', 'end_date_project', 'date', 25, 'Comprobar editar fecha fin válida', 'EDIT', true, ''],
  ['project', 'end_date_project', 'date', 26, 'Comprobar buscar por fecha fin válida', 'SEARCH', true, ''],
 
  // ===== RESPONSABLE_PROJECT =====
  ['project', 'responsable_project', 'select', 27, 'Comprobar responsable válido', 'ADD', true, ''],
  ['project', 'responsable_project', 'select', 28, 'Comprobar responsable vacío', 'ADD', 'responsable_required', 'El responsable es requerido'],
  ['project', 'responsable_project', 'select', 29, 'Comprobar responsable con ID inválido (no dígitos)', 'ADD', 'responsable_format_KO', 'El ID del responsable es inválido'],
  ['project', 'responsable_project', 'select', 30, 'Comprobar editar responsable válido', 'EDIT', true, ''],
  ['project', 'responsable_project', 'select', 31, 'Comprobar buscar por responsable válido', 'SEARCH', true, ''],
 
  // ===== ORGANIZATION_PROJECT =====
  ['project', 'organization_project', 'input', 32, 'Comprobar organización válida', 'ADD', true, ''],
  ['project', 'organization_project', 'input', 33, 'Comprobar organización vacía', 'ADD', 'organization_required', 'La organización es requerida'],
  ['project', 'organization_project', 'input', 34, 'Comprobar organización con formato incorrecto', 'ADD', 'organization_format_KO', 'La orgamización no cumple el formato requerido'],
  ['project', 'organization_project', 'input', 35, 'Comprobar organización menor a 5 caracteres', 'ADD', 'organization_min_size_KO', 'La organización debe tener mínimo 5 caracteres'],
  ['project', 'organization_project', 'input', 36, 'Comprobar organización mayor a 120 caracteres', 'ADD', 'organization_max_size_KO', 'La organización debe tener máximo 120 caracteres'],
  ['project', 'organization_project', 'input', 37, 'Comprobar editar organización válida', 'EDIT', true, ''],
  ['project', 'organization_project', 'input', 38, 'Comprobar buscar por organización válida', 'SEARCH', true, ''],
  ['project', 'organization_project', 'input', 39, 'Comprobar buscar por organización mayor a 120', 'SEARCH', 'organization_max_size_KO', 'La organización debe tener máximo 120 caracteres'],
 
  // ===== DESCRIPTION_PROJECT =====
  ['project', 'description_project', 'textarea', 40, 'Comprobar descripción válida', 'ADD', true, ''],
  ['project', 'description_project', 'textarea', 41, 'Comprobar descripción vacía', 'ADD', 'description_required', 'La descripción es requerida'],
  ['project', 'description_project', 'textarea', 42, 'Comprobar descripción menor a 30 caracteres', 'ADD', 'description_min_size_KO', 'La descripción debe tener mínimo 30 caracteres'],
  ['project', 'description_project', 'textarea', 43, 'Comprobar descripción mayor a 500 caracteres', 'ADD', 'description_max_size_KO', 'La descripción debe tener máximo 500 caracteres'],
  ['project', 'description_project', 'textarea', 44, 'Comprobar editar descripción válida', 'EDIT', true, ''],
  ['project', 'description_project', 'textarea', 45, 'Comprobar buscar por descripción válida', 'SEARCH', true, ''],
  ['project', 'description_project', 'textarea', 46, 'Comprobar buscar por descripción mayor a 500', 'SEARCH', 'description_max_size_KO', 'La descripción debe tener máximo 500 caracteres'],
 
  // ===== FILE_PROJECT =====
  ['project', 'file_project', 'file', 47, 'Comprobar archivo válido PDF', 'ADD', true, ''],
  ['project', 'file_project', 'file', 48, 'Comprobar archivo válido DOC', 'ADD', true, ''],
  ['project', 'file_project', 'file', 49, 'Comprobar archivo válido DOCX', 'ADD', true, ''],
  ['project', 'file_project', 'file', 50, 'Comprobar archivo no seleccionado', 'ADD', 'file_required', 'El archivo es requerido'],
  ['project', 'file_project', 'file', 51, 'Comprobar archivo con extensión no permitida', 'ADD', 'file_format_KO', 'Solo se permiten archivos PDF, DOC o DOCX'],
  ['project', 'file_project', 'file', 52, 'Comprobar archivo mayor a 2MB', 'ADD', 'file_max_size_KO', 'El archivo no debe superar 2MB'],
  ['project', 'file_project', 'file', 53, 'Comprobar archivo con acentos en nombre', 'ADD', 'file_name_format_KO', 'El nombre del archivo no puede contener acentos o ñ'],
  ['project', 'file_project', 'file', 54, 'Comprobar archivo con espacios en nombre', 'ADD', 'file_name_format_KO', 'El nombre del archivo no puede contener espacios'],
  ['project', 'file_project', 'file', 55, 'Comprobar archivo con nombre menor a 7 caracteres', 'ADD', 'file_name_min_size_KO', 'El nombre del archivo debe tener mínimo 7 caracteres'],
  ['project', 'file_project', 'file', 56, 'Comprobar archivo con nombre mayor a 100 caracteres', 'ADD', 'file_name_max_size_KO', 'El nombre del archivo debe tener máximo 100 caracteres'],
  ['project', 'file_project', 'file', 57, 'Comprobar editar archivo válido', 'EDIT', true, ''],
  ['project', 'file_project', 'file', 58, 'Comprobar buscar por nombre archivo', 'SEARCH', true, ''],
 
  // ===== CODE_PROJECT =====
  ['project', 'code_project', 'input', 59, 'Comprobar código válido', 'ADD', true, ''],
  ['project', 'code_project', 'input', 60, 'Comprobar código vacío', 'ADD', 'code_required', 'El código es requerido'],
  ['project', 'code_project', 'input', 61, 'Comprobar código con caracteres especiales', 'ADD', 'code_format_KO', 'El código solo puede contener letras, números, guiones y guiones bajos'],
  ['project', 'code_project', 'input', 62, 'Comprobar código menor a 3 caracteres', 'ADD', 'code_min_size_KO', 'El código debe tener mínimo 3 caracteres'],
  ['project', 'code_project', 'input', 63, 'Comprobar código mayor a 20 caracteres', 'ADD', 'code_max_size_KO', 'El código debe tener máximo 20 caracteres'],
  ['project', 'code_project', 'input', 64, 'Comprobar editar código válido', 'EDIT', true, ''],
  ['project', 'code_project', 'input', 65, 'Comprobar buscar por código válido', 'SEARCH', true, ''],
  ['project', 'code_project', 'input', 66, 'Comprobar buscar por código mayor a 20', 'SEARCH', 'code_max_size_KO', 'El código debe tener máximo 20 caracteres'],
 
  // ===== ACRONYM_PROJECT =====
  ['project', 'acronym_project', 'input', 67, 'Comprobar acrónimo válido', 'ADD', true, ''],
  ['project', 'acronym_project', 'input', 68, 'Comprobar acrónimo vacío', 'ADD', 'acronym_required', 'El acrónimo es requerido'],
  ['project', 'acronym_project', 'input', 69, 'Comprobar acrónimo con espacios', 'ADD', 'acronym_format_KO', 'El acrónimo no puede contener espacios'],
  ['project', 'acronym_project', 'input', 70, 'Comprobar acrónimo mayor a 15 caracteres', 'ADD', 'acronym_max_size_KO', 'El acrónimo debe tener máximo 15 caracteres'],
  ['project', 'acronym_project', 'input', 71, 'Comprobar editar acrónimo válido', 'EDIT', true, ''],
  ['project', 'acronym_project', 'input', 72, 'Comprobar buscar por acrónimo válido', 'SEARCH', true, ''],
 
  // ===== ID_SAMPLING_METHODOLOGY_PROJECT =====
  ['project', 'id_sampling_methodology_project', 'select', 73, 'Comprobar id_sampling_methodology válido', 'ADD', true, ''],
  ['project', 'id_sampling_methodology_project', 'select', 74, 'Comprobar id_sampling_methodology vacío', 'ADD', 'sampling_required', 'La metodología de muestreo es requerida'],
  ['project', 'id_sampling_methodology_project', 'select', 75, 'Comprobar id_sampling_methodology con letras', 'ADD', 'sampling_format_KO', 'El ID de metodología solo debe contener dígitos']
];
 
window.project_pruebas = [
  // ===== ID_PROJECT =====
  ['project', 'id_project', 1, 1, 'ADD', [{id_project: '789'}], true],
  ['project', 'id_project', 2, 2, 'ADD', [{id_project: ''}], 'id_required_KO'],
  ['project', 'id_project', 3, 3, 'ADD', [{id_project: 'ghi789'}], 'id_format_KO'],
  ['project', 'id_project', 4, 4, 'ADD', [{id_project: '123456789012'}], 'id_max_size_KO'],
  ['project', 'id_project', 5, 5, 'SEARCH', [{id_project: '789'}], true],
  ['project', 'id_project', 6, 6, 'SEARCH', [{id_project: '123456789012'}], 'id_max_size_KO'],
  ['project', 'id_project', 7, 7, 'SEARCH', [{id_project: '789', name_project: 'Research Project'}], true],
 
  // ===== NAME_PROJECT =====
  ['project', 'name_project', 8, 8, 'ADD', [{name_project: 'Environmental Monitoring Research Project'}], true],
  ['project', 'name_project', 9, 9, 'ADD', [{name_project: ''}], 'name_required'],
  ['project', 'name_project', 10, 10, 'ADD', [{name_project: 'Proyecto de investigación ambiental'}], 'name_format_KO'],
  ['project', 'name_project', 11, 11, 'ADD', [{name_project: 'Short'}], 'name_min_size_KO'],
  ['project', 'name_project', 12, 12, 'ADD', [{name_project: 'a'.repeat(101)}], 'name_max_size_KO'],
  ['project', 'name_project', 13, 13, 'EDIT', [{id_project: '789', name_project: 'Updated Project Name Valid'}], true],
  ['project', 'name_project', 14, 14, 'EDIT', [{id_project: '789', name_project: ''}], 'name_required'],
  ['project', 'name_project', 15, 15, 'SEARCH', [{name_project: 'Research'}], true],
  ['project', 'name_project', 16, 16, 'SEARCH', [{name_project: 'a'.repeat(101)}], 'name_max_size_KO'],
 
  // ===== START_DATE_PROJECT =====
  ['project', 'start_date_project', 17, 17, 'ADD', [{start_date_project: '15-03-2023'}], true],
  ['project', 'start_date_project', 18, 18, 'ADD', [{start_date_project: ''}], 'start_date_required'],
  ['project', 'start_date_project', 19, 19, 'ADD', [{start_date_project: '2023-03-15'}], 'start_date_format_KO'],
  ['project', 'start_date_project', 20, 20, 'EDIT', [{id_project: '789', start_date_project: '20-03-2023'}], true],
  ['project', 'start_date_project', 21, 21, 'SEARCH', [{start_date_project: '15-03-2023'}], true],
 
  // ===== END_DATE_PROJECT =====
  ['project', 'end_date_project', 22, 22, 'ADD', [{end_date_project: '30-12-2024'}], true],
  ['project', 'end_date_project', 23, 23, 'ADD', [{end_date_project: ''}], 'end_date_required'],
  ['project', 'end_date_project', 24, 24, 'ADD', [{end_date_project: '2024-12-30'}], 'end_date_format_KO'],
  ['project', 'end_date_project', 25, 25, 'EDIT', [{id_project: '789', end_date_project: '31-12-2024'}], true],
  ['project', 'end_date_project', 26, 26, 'SEARCH', [{end_date_project: '30-12-2024'}], true],
 
  // ===== RESPONSABLE_PROJECT =====
  ['project', 'responsable_project', 27, 27, 'ADD', [{responsable_project: '5'}], true],
  ['project', 'responsable_project', 28, 28, 'ADD', [{responsable_project: ''}], 'responsable_required'],
  ['project', 'responsable_project', 29, 29, 'ADD', [{responsable_project: 'abc'}], 'responsable_format_KO'],
  ['project', 'responsable_project', 30, 30, 'EDIT', [{id_project: '789', responsable_project: '6'}], true],
  ['project', 'responsable_project', 31, 31, 'SEARCH', [{responsable_project: '5'}], true],
 
  // ===== ORGANIZATION_PROJECT =====
  ['project', 'organization_project', 32, 32, 'ADD', [{organization_project: 'National Environment Agency'}], true],
  ['project', 'organization_project', 33, 33, 'ADD', [{organization_project: ''}], 'organization_required'],
  ['project', 'organization_project', 34, 34, 'ADD', [{organization_project: 'Agenci@ Nacional# de Medioambiente'}], 'organization_format_KO'],
  ['project', 'organization_project', 35, 35, 'ADD', [{organization_project: 'Org'}], 'organization_min_size_KO'],
  ['project', 'organization_project', 36, 36, 'ADD', [{organization_project: 'a'.repeat(121)}], 'organization_max_size_KO'],
  ['project', 'organization_project', 37, 37, 'EDIT', [{id_project: '789', organization_project: 'Updated Organization'}], true],
  ['project', 'organization_project', 38, 38, 'SEARCH', [{organization_project: 'Agency'}], true],
  ['project', 'organization_project', 39, 39, 'SEARCH', [{organization_project: 'a'.repeat(121)}], 'organization_max_size_KO'],
 
  // ===== DESCRIPTION_PROJECT =====
  ['project', 'description_project', 40, 40, 'ADD', [{description_project: 'This project focuses on environmental monitoring and data collection across multiple regions'}], true],
  ['project', 'description_project', 41, 41, 'ADD', [{description_project: ''}], 'description_required'],
  ['project', 'description_project', 42, 42, 'ADD', [{description_project: 'Short desc'}], 'description_min_size_KO'],
  ['project', 'description_project', 43, 43, 'ADD', [{description_project: 'a'.repeat(501)}], 'description_max_size_KO'],
  ['project', 'description_project', 44, 44, 'EDIT', [{id_project: '789', description_project: 'Updated description with sufficient length for validation and testing'}], true],
  ['project', 'description_project', 45, 45, 'SEARCH', [{description_project: 'monitoring'}], true],
  ['project', 'description_project', 46, 46, 'SEARCH', [{description_project: 'a'.repeat(501)}], 'description_max_size_KO'],
 
  // ===== FILE_PROJECT =====
  ['project', 'file_project', 47, 47, 'ADD', [{file_project: 'projectPlan.pdf', mimeType: 'application/pdf', size: 1500000}], true],
  ['project', 'file_project', 48, 48, 'ADD', [{file_project: 'projectDoc.doc', mimeType: 'application/msword', size: 1500000}], true],
  ['project', 'file_project', 49, 49, 'ADD', [{file_project: 'projectFile.docx', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', size: 1500000}], true],
  ['project', 'file_project', 50, 50, 'ADD', [{file_project: null}], 'file_required'],
  ['project', 'file_project', 51, 51, 'ADD', [{file_project: 'invalid.txt', mimeType: 'text/plain', size: 1000000}], 'file_format_KO'],
  ['project', 'file_project', 52, 52, 'ADD', [{file_project: 'largeFile.pdf', mimeType: 'application/pdf', size: 2500000}], 'file_max_size_KO'],
  ['project', 'file_project', 53, 53, 'ADD', [{file_project: 'projécto.pdf', mimeType: 'application/pdf', size: 1500000}], 'file_name_format_KO'],
  ['project', 'file_project', 54, 54, 'ADD', [{file_project: 'my project.pdf', mimeType: 'application/pdf', size: 1500000}], 'file_name_format_KO'],
  ['project', 'file_project', 55, 55, 'ADD', [{file_project: 'd.pdf', mimeType: 'application/pdf', size: 1500000}], 'file_name_min_size_KO'],
  ['project', 'file_project', 56, 56, 'ADD', [{file_project: 'a'.repeat(100) + '.pdf', mimeType: 'application/pdf', size: 1500000}], 'file_name_max_size_KO'],
  ['project', 'file_project', 57, 57, 'EDIT', [{id_project: '789', file_project: 'updatedPlan.pdf', mimeType: 'application/pdf', size: 1500000}], true],
  ['project', 'file_project', 58, 58, 'SEARCH', [{file_project: 'project'}], true],
 
  // ===== CODE_PROJECT =====
  ['project', 'code_project', 59, 59, 'ADD', [{code_project: 'ENV_MON_2023'}], true],
  ['project', 'code_project', 60, 60, 'ADD', [{code_project: ''}], 'code_required'],
  ['project', 'code_project', 61, 61, 'ADD', [{code_project: 'PROJ@123'}], 'code_format_KO'],
  ['project', 'code_project', 62, 62, 'ADD', [{code_project: 'AB'}], 'code_min_size_KO'],
  ['project', 'code_project', 63, 63, 'ADD', [{code_project: 'a'.repeat(21)}], 'code_max_size_KO'],
  ['project', 'code_project', 64, 64, 'EDIT', [{id_project: '789', code_project: 'NEW_CODE_2024'}], true],
  ['project', 'code_project', 65, 65, 'SEARCH', [{code_project: 'ENV'}], true],
  ['project', 'code_project', 66, 66, 'SEARCH', [{code_project: 'a'.repeat(21)}], 'code_max_size_KO'],
 
  // ===== ACRONYM_PROJECT =====
  ['project', 'acronym_project', 67, 67, 'ADD', [{acronym_project: 'EMRP'}], true],
  ['project', 'acronym_project', 68, 68, 'ADD', [{acronym_project: ''}], 'acronym_required'],
  ['project', 'acronym_project', 69, 69, 'ADD', [{acronym_project: 'EM RP'}], 'acronym_format_KO'],
  ['project', 'acronym_project', 70, 70, 'ADD', [{acronym_project: 'a'.repeat(16)}], 'acronym_max_size_KO'],
  ['project', 'acronym_project', 71, 71, 'EDIT', [{id_project: '789', acronym_project: 'EMR'}], true],
  ['project', 'acronym_project', 72, 72, 'SEARCH', [{acronym_project: 'EMP'}], true],
 
  // ===== ID_SAMPLING_METHODOLOGY_PROJECT =====
  ['project', 'id_sampling_methodology_project', 73, 73, 'ADD', [{id_sampling_methodology_project: '3'}], true],
  ['project', 'id_sampling_methodology_project', 74, 74, 'ADD', [{id_sampling_methodology_project: ''}], 'sampling_required'],
  ['project', 'id_sampling_methodology_project', 75, 75, 'ADD', [{id_sampling_methodology_project: 'abc'}], 'sampling_format_KO']
];
 
 
