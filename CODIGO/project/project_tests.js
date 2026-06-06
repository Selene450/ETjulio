
window.project_def_tests = [
  // ===== ID_PROJECT =====
  ['project', 'id_project', 'input', 1, 'Comprobar tamaño válido de id', 'ADD', true, ''],
  ['project', 'id_project', 'input', 2, 'Comprobar id vacío', 'ADD', 'id_required_KO', 'El ID es requerido'],
  ['project', 'id_project', 'input', 3, 'Comprobar id con caracteres no dígitos', 'ADD', 'id_format_KO', 'El ID solo debe contener dígitos'],
  ['project', 'id_project', 'input', 4, 'Comprobar id mayor a 11 dígitos', 'ADD', 'id_max_size_KO', 'El ID debe tener máximo 11 dígitos'],
  ['project', 'id_project', 'input', 5, 'Comprobar buscar por ID válido', 'SEARCH', true, ''],
  ['project', 'id_project', 'input', 6, 'Comprobar buscar por ID mayor a máximo', 'SEARCH', 'id_max_size_KO', 'El ID debe tener máximo 11 dígitos'],
  ['project', 'id_project', 'input', 7, 'Comprobar búsqueda múltiples criterios', 'SEARCH', true, ''],

  // ===== NAME_PROJECT =====
  ['project', 'name_project', 'input', 8, 'Comprobar nombre válido', 'ADD', true, ''],
  ['project', 'name_project', 'input', 9, 'Comprobar nombre vacío', 'ADD', 'name_required', 'El nombre es requerido'],
  ['project', 'name_project', 'input', 10, 'Comprobar nombre con acentos', 'ADD', 'name_format_KO', 'El nombre no puede contener acentos o ñ'],
  ['project', 'name_project', 'input', 11, 'Comprobar nombre menor a 10 caracteres', 'ADD', 'name_min_size_KO', 'El nombre debe tener mínimo 10 caracteres'],
  ['project', 'name_project', 'input', 12, 'Comprobar nombre mayor a 150 caracteres', 'ADD', 'name_max_size_KO', 'El nombre debe tener máximo 150 caracteres'],
  ['project', 'name_project', 'input', 13, 'Comprobar nombre duplicado (UNIQUE)', 'ADD', 'name_duplicate_KO', 'El nombre ya existe en la base de datos'],
  ['project', 'name_project', 'input', 14, 'Comprobar editar nombre válido', 'EDIT', true, ''],
  ['project', 'name_project', 'input', 15, 'Comprobar editar nombre vacío', 'EDIT', 'name_required', 'El nombre es requerido'],
  ['project', 'name_project', 'input', 16, 'Comprobar buscar por nombre válido', 'SEARCH', true, ''],
  ['project', 'name_project', 'input', 17, 'Comprobar buscar por nombre mayor a 150', 'SEARCH', 'name_max_size_KO', 'El nombre debe tener máximo 150 caracteres'],

  // ===== START_DATE_PROJECT =====
  ['project', 'start_date_project', 'date', 18, 'Comprobar fecha inicio válida', 'ADD', true, ''],
  ['project', 'start_date_project', 'date', 19, 'Comprobar fecha inicio vacía', 'ADD', 'start_date_required', 'La fecha de inicio es requerida'],
  ['project', 'start_date_project', 'date', 20, 'Comprobar fecha inicio formato inválido', 'ADD', 'start_date_format_KO', 'La fecha debe tener formato DD-MM-YYYY'],
  ['project', 'start_date_project', 'date', 21, 'Comprobar fecha inicio anterior a fecha mínima', 'ADD', 'start_date_min_KO', 'La fecha de inicio no puede ser anterior a 1900'],
  ['project', 'start_date_project', 'date', 22, 'Comprobar fecha inicio posterior a hoy', 'ADD', 'start_date_future_KO', 'La fecha de inicio no puede ser mayor a hoy'],
  ['project', 'start_date_project', 'date', 23, 'Comprobar editar fecha inicio válida', 'EDIT', true, ''],
  ['project', 'start_date_project', 'date', 24, 'Comprobar buscar por fecha inicio válida', 'SEARCH', true, ''],
  ['project', 'start_date_project', 'date', 25, 'Comprobar buscar por fecha mayor a hoy', 'SEARCH', 'start_date_future_KO', 'La fecha de inicio no puede ser mayor a hoy'],

  // ===== END_DATE_PROJECT =====
  ['project', 'end_date_project', 'date', 26, 'Comprobar fecha fin válida', 'ADD', true, ''],
  ['project', 'end_date_project', 'date', 27, 'Comprobar fecha fin vacía', 'ADD', 'end_date_required', 'La fecha de fin es requerida'],
  ['project', 'end_date_project', 'date', 28, 'Comprobar fecha fin formato inválido', 'ADD', 'end_date_format_KO', 'La fecha debe tener formato DD-MM-YYYY'],
  ['project', 'end_date_project', 'date', 29, 'Comprobar fecha fin anterior a fecha inicial', 'ADD', 'end_date_min_KO', 'La fecha de fin debe ser posterior a la fecha de inicio'],
  ['project', 'end_date_project', 'date', 30, 'Comprobar fecha fin posterior a fecha máxima', 'ADD', 'end_date_max_KO', 'La fecha de fin debe ser menor a 2100'],
  ['project', 'end_date_project', 'date', 31, 'Comprobar editar fecha fin válida', 'EDIT', true, ''],
  ['project', 'end_date_project', 'date', 32, 'Comprobar buscar por fecha fin válida', 'SEARCH', true, ''],
  ['project', 'end_date_project', 'date', 33, 'Comprobar buscar por fecha fin anterior a inicio', 'SEARCH', 'end_date_min_KO', 'La fecha de fin debe ser posterior a la fecha de inicio'],

  // ===== RESPONSABLE_PROJECT =====
  ['project', 'responsable_project', 'select', 34, 'Comprobar responsable válido', 'ADD', true, ''],
  ['project', 'responsable_project', 'select', 35, 'Comprobar responsable vacío', 'ADD', 'responsable_required', 'El responsable es requerido'],
  ['project', 'responsable_project', 'select', 36, 'Comprobar responsable con ID no existente', 'ADD', 'responsable_not_found', 'El responsable no existe en la base de datos'],
  ['project', 'responsable_project', 'select', 37, 'Comprobar responsable con ID inválido', 'ADD', 'responsable_format_KO', 'El ID del responsable es inválido'],
  ['project', 'responsable_project', 'select', 38, 'Comprobar editar responsable válido', 'EDIT', true, ''],
  ['project', 'responsable_project', 'select', 39, 'Comprobar buscar por responsable válido', 'SEARCH', true, ''],
  ['project', 'responsable_project', 'select', 40, 'Comprobar búsqueda responsable no existente', 'SEARCH', 'responsable_not_found', 'El responsable no existe en la base de datos'],

  // ===== ORGANIZATION_PROJECT =====
  ['project', 'organization_project', 'input', 41, 'Comprobar organización válida', 'ADD', true, ''],
  ['project', 'organization_project', 'input', 42, 'Comprobar organización vacía', 'ADD', 'organization_required', 'La organización es requerida'],
  ['project', 'organization_project', 'input', 43, 'Comprobar organización con acentos', 'ADD', 'organization_format_KO', 'La organización no puede contener acentos o ñ'],
  ['project', 'organization_project', 'input', 44, 'Comprobar organización menor a 5 caracteres', 'ADD', 'organization_min_size_KO', 'La organización debe tener mínimo 5 caracteres'],
  ['project', 'organization_project', 'input', 45, 'Comprobar organización mayor a 120 caracteres', 'ADD', 'organization_max_size_KO', 'La organización debe tener máximo 120 caracteres'],
  ['project', 'organization_project', 'input', 46, 'Comprobar editar organización válida', 'EDIT', true, ''],
  ['project', 'organization_project', 'input', 47, 'Comprobar buscar por organización válida', 'SEARCH', true, ''],
  ['project', 'organization_project', 'input', 48, 'Comprobar buscar por organización mayor a 120', 'SEARCH', 'organization_max_size_KO', 'La organización debe tener máximo 120 caracteres'],

  // ===== DESCRIPTION_PROJECT =====
  ['project', 'description_project', 'textarea', 49, 'Comprobar descripción válida', 'ADD', true, ''],
  ['project', 'description_project', 'textarea', 50, 'Comprobar descripción vacía', 'ADD', 'description_required', 'La descripción es requerida'],
  ['project', 'description_project', 'textarea', 51, 'Comprobar descripción con acentos', 'ADD', 'description_format_KO', 'La descripción no puede contener acentos o ñ'],
  ['project', 'description_project', 'textarea', 52, 'Comprobar descripción menor a 100 caracteres', 'ADD', 'description_min_size_KO', 'La descripción debe tener mínimo 100 caracteres'],
  ['project', 'description_project', 'textarea', 53, 'Comprobar descripción mayor a 8000 caracteres', 'ADD', 'description_max_size_KO', 'La descripción debe tener máximo 8000 caracteres'],
  ['project', 'description_project', 'textarea', 54, 'Comprobar descripción con saltos de línea', 'ADD', true, ''],
  ['project', 'description_project', 'textarea', 55, 'Comprobar editar descripción válida', 'EDIT', true, ''],
  ['project', 'description_project', 'textarea', 56, 'Comprobar buscar por descripción válida', 'SEARCH', true, ''],
  ['project', 'description_project', 'textarea', 57, 'Comprobar buscar por descripción mayor a 8000', 'SEARCH', 'description_max_size_KO', 'La descripción debe tener máximo 8000 caracteres'],

  // ===== FILE_PROJECT =====
  ['project', 'file_project', 'file', 58, 'Comprobar archivo válido PDF', 'ADD', true, ''],
  ['project', 'file_project', 'file', 59, 'Comprobar archivo válido DOC', 'ADD', true, ''],
  ['project', 'file_project', 'file', 60, 'Comprobar archivo válido DOCX', 'ADD', true, ''],
  ['project', 'file_project', 'file', 61, 'Comprobar archivo válido ZIP', 'ADD', true, ''],
  ['project', 'file_project', 'file', 62, 'Comprobar archivo no seleccionado', 'ADD', 'file_required', 'El archivo es requerido'],
  ['project', 'file_project', 'file', 63, 'Comprobar archivo con extensión no permitida', 'ADD', 'file_format_KO', 'Solo se permiten archivos PDF, DOC, DOCX o ZIP'],
  ['project', 'file_project', 'file', 64, 'Comprobar archivo mayor a 5MB', 'ADD', 'file_max_size_KO', 'El archivo no debe superar 5MB'],
  ['project', 'file_project', 'file', 65, 'Comprobar archivo con acentos en nombre', 'ADD', 'file_name_format_KO', 'El nombre del archivo no puede contener acentos o ñ'],
  ['project', 'file_project', 'file', 66, 'Comprobar archivo con espacios en nombre', 'ADD', 'file_name_format_KO', 'El nombre del archivo no puede contener espacios'],
  ['project', 'file_project', 'file', 67, 'Comprobar archivo con nombre menor a 7 caracteres', 'ADD', 'file_name_min_size_KO', 'El nombre del archivo debe tener mínimo 7 caracteres'],
  ['project', 'file_project', 'file', 68, 'Comprobar archivo con nombre mayor a 100 caracteres', 'ADD', 'file_name_max_size_KO', 'El nombre del archivo debe tener máximo 100 caracteres'],
  ['project', 'file_project', 'file', 69, 'Comprobar editar archivo válido', 'EDIT', true, ''],
  ['project', 'file_project', 'file', 70, 'Comprobar buscar por nombre archivo', 'SEARCH', true, ''],

  // ===== CODE_PROJECT =====
  ['project', 'code_project', 'input', 71, 'Comprobar código válido', 'ADD', true, ''],
  ['project', 'code_project', 'input', 72, 'Comprobar código vacío', 'ADD', 'code_required', 'El código es requerido'],
  ['project', 'code_project', 'input', 73, 'Comprobar código con caracteres especiales', 'ADD', 'code_format_KO', 'El código solo puede contener letras números guiones y guiones bajos'],
  ['project', 'code_project', 'input', 74, 'Comprobar código menor a 3 caracteres', 'ADD', 'code_min_size_KO', 'El código debe tener mínimo 3 caracteres'],
  ['project', 'code_project', 'input', 75, 'Comprobar código mayor a 20 caracteres', 'ADD', 'code_max_size_KO', 'El código debe tener máximo 20 caracteres'],
  ['project', 'code_project', 'input', 76, 'Comprobar código duplicado (UNIQUE)', 'ADD', 'code_duplicate_KO', 'El código ya existe en la base de datos'],
  ['project', 'code_project', 'input', 77, 'Comprobar editar código válido', 'EDIT', true, ''],
  ['project', 'code_project', 'input', 78, 'Comprobar buscar por código válido', 'SEARCH', true, ''],
  ['project', 'code_project', 'input', 79, 'Comprobar buscar por código mayor a 20', 'SEARCH', 'code_max_size_KO', 'El código debe tener máximo 20 caracteres'],

  // ===== ACRONYM_PROJECT =====
  ['project', 'acronym_project', 'input', 80, 'Comprobar acrónimo válido', 'ADD', true, ''],
  ['project', 'acronym_project', 'input', 81, 'Comprobar acrónimo vacío', 'ADD', 'acronym_required', 'El acrónimo es requerido'],
  ['project', 'acronym_project', 'input', 82, 'Comprobar acrónimo con espacios', 'ADD', 'acronym_format_KO', 'El acrónimo no puede contener espacios'],
  ['project', 'acronym_project', 'input', 83, 'Comprobar acrónimo mayor a 15 caracteres', 'ADD', 'acronym_max_size_KO', 'El acrónimo debe tener máximo 15 caracteres'],
  ['project', 'acronym_project', 'input', 84, 'Comprobar editar acrónimo válido', 'EDIT', true, ''],
  ['project', 'acronym_project', 'input', 85, 'Comprobar buscar por acrónimo válido', 'SEARCH', true, ''],

  // ===== ID_SAMPLING_METHODOLOGY_PROJECT =====
  ['project', 'id_sampling_methodology_project', 'select', 86, 'Comprobar existencia de metodología de muestreo', 'ADD', true, '']
];

window.project_tests_fields = [
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
  ['project', 'name_project', 12, 12, 'ADD', [{name_project: 'a'.repeat(151)}], 'name_max_size_KO'],
  ['project', 'name_project', 13, 13, 'ADD', [{name_project: 'Duplicate Project Name'}], 'name_duplicate_KO'],
  ['project', 'name_project', 14, 14, 'EDIT', [{id_project: '789', name_project: 'Updated Project Name'}], true],
  ['project', 'name_project', 15, 15, 'EDIT', [{id_project: '789', name_project: ''}], 'name_required'],
  ['project', 'name_project', 16, 16, 'SEARCH', [{name_project: 'Research'}], true],
  ['project', 'name_project', 17, 17, 'SEARCH', [{name_project: 'a'.repeat(151)}], 'name_max_size_KO'],

  // ===== START_DATE_PROJECT =====
  ['project', 'start_date_project', 18, 18, 'ADD', [{start_date_project: '15-03-2023'}], true],
  ['project', 'start_date_project', 19, 19, 'ADD', [{start_date_project: ''}], 'start_date_required'],
  ['project', 'start_date_project', 20, 20, 'ADD', [{start_date_project: '2023-03-15'}], 'start_date_format_KO'],
  ['project', 'start_date_project', 21, 21, 'ADD', [{start_date_project: '01-01-1800'}], 'start_date_min_KO'],
  ['project', 'start_date_project', 22, 22, 'ADD', [{start_date_project: '01-01-2050'}], 'start_date_future_KO'],
  ['project', 'start_date_project', 23, 23, 'EDIT', [{id_project: '789', start_date_project: '20-03-2023'}], true],
  ['project', 'start_date_project', 24, 24, 'SEARCH', [{start_date_project: '15-03-2023'}], true],
  ['project', 'start_date_project', 25, 25, 'SEARCH', [{start_date_project: '01-01-2050'}], 'start_date_future_KO'],

  // ===== END_DATE_PROJECT =====
  ['project', 'end_date_project', 26, 26, 'ADD', [{end_date_project: '30-12-2024'}], true],
  ['project', 'end_date_project', 27, 27, 'ADD', [{end_date_project: ''}], 'end_date_required'],
  ['project', 'end_date_project', 28, 28, 'ADD', [{end_date_project: '2024-12-30'}], 'end_date_format_KO'],
  ['project', 'end_date_project', 29, 29, 'ADD', [{end_date_project: '10-03-2023'}], 'end_date_min_KO'],
  ['project', 'end_date_project', 30, 30, 'ADD', [{end_date_project: '01-01-2100'}], 'end_date_max_KO'],
  ['project', 'end_date_project', 31, 31, 'EDIT', [{id_project: '789', end_date_project: '31-12-2024'}], true],
  ['project', 'end_date_project', 32, 32, 'SEARCH', [{end_date_project: '30-12-2024'}], true],
  ['project', 'end_date_project', 33, 33, 'SEARCH', [{end_date_project: '10-03-2023'}], 'end_date_min_KO'],

  // ===== RESPONSABLE_PROJECT =====
  ['project', 'responsable_project', 34, 34, 'ADD', [{responsable_project: '5'}], true],
  ['project', 'responsable_project', 35, 35, 'ADD', [{responsable_project: ''}], 'responsable_required'],
  ['project', 'responsable_project', 36, 36, 'ADD', [{responsable_project: '99999'}], 'responsable_not_found'],
  ['project', 'responsable_project', 37, 37, 'ADD', [{responsable_project: 'abc'}], 'responsable_format_KO'],
  ['project', 'responsable_project', 38, 38, 'EDIT', [{id_project: '789', responsable_project: '6'}], true],
  ['project', 'responsable_project', 39, 39, 'SEARCH', [{responsable_project: '5'}], true],
  ['project', 'responsable_project', 40, 40, 'SEARCH', [{responsable_project: '99999'}], 'responsable_not_found'],

  // ===== ORGANIZATION_PROJECT =====
  ['project', 'organization_project', 41, 41, 'ADD', [{organization_project: 'National Environment Agency'}], true],
  ['project', 'organization_project', 42, 42, 'ADD', [{organization_project: ''}], 'organization_required'],
  ['project', 'organization_project', 43, 43, 'ADD', [{organization_project: 'Agencia Nacional de Medioambiente'}], 'organization_format_KO'],
  ['project', 'organization_project', 44, 44, 'ADD', [{organization_project: 'Org'}], 'organization_min_size_KO'],
  ['project', 'organization_project', 45, 45, 'ADD', [{organization_project: 'a'.repeat(121)}], 'organization_max_size_KO'],
  ['project', 'organization_project', 46, 46, 'EDIT', [{id_project: '789', organization_project: 'Updated Organization'}], true],
  ['project', 'organization_project', 47, 47, 'SEARCH', [{organization_project: 'Agency'}], true],
  ['project', 'organization_project', 48, 48, 'SEARCH', [{organization_project: 'a'.repeat(121)}], 'organization_max_size_KO'],

  // ===== DESCRIPTION_PROJECT =====
  ['project', 'description_project', 49, 49, 'ADD', [{description_project: 'This project focuses on environmental monitoring and data collection across multiple regions including soil water and air quality measurements'}], true],
  ['project', 'description_project', 50, 50, 'ADD', [{description_project: ''}], 'description_required'],
  ['project', 'description_project', 51, 51, 'ADD', [{description_project: 'Proyecto de monitoreo ambiental con técnicas modernas y análisis químicos'}], 'description_format_KO'],
  ['project', 'description_project', 52, 52, 'ADD', [{description_project: 'Short description'}], 'description_min_size_KO'],
  ['project', 'description_project', 53, 53, 'ADD', [{description_project: 'a'.repeat(8001)}], 'description_max_size_KO'],
  ['project', 'description_project', 54, 54, 'ADD', [{description_project: 'This project includes\nmultiple phases\nand several workstreams'}], true],
  ['project', 'description_project', 55, 55, 'EDIT', [{id_project: '789', description_project: 'Updated description with sufficient length for validation and testing purposes'}], true],
  ['project', 'description_project', 56, 56, 'SEARCH', [{description_project: 'monitoring'}], true],
  ['project', 'description_project', 57, 57, 'SEARCH', [{description_project: 'a'.repeat(8001)}], 'description_max_size_KO'],

  // ===== FILE_PROJECT =====
  ['project', 'file_project', 58, 58, 'ADD', [{file_project: 'project_plan.pdf', mimeType: 'application/pdf', size: 3000000}], true],
  ['project', 'file_project', 59, 59, 'ADD', [{file_project: 'project_doc.doc', mimeType: 'application/msword', size: 3000000}], true],
  ['project', 'file_project', 60, 60, 'ADD', [{file_project: 'project_file.docx', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', size: 3000000}], true],
  ['project', 'file_project', 61, 61, 'ADD', [{file_project: 'project_archive.zip', mimeType: 'application/zip', size: 3000000}], true],
  ['project', 'file_project', 62, 62, 'ADD', [{file_project: null}], 'file_required'],
  ['project', 'file_project', 63, 63, 'ADD', [{file_project: 'invalid.txt', mimeType: 'text/plain', size: 2000000}], 'file_format_KO'],
  ['project', 'file_project', 64, 64, 'ADD', [{file_project: 'large_file.pdf', mimeType: 'application/pdf', size: 6000000}], 'file_max_size_KO'],
  ['project', 'file_project', 65, 65, 'ADD', [{file_project: 'projécto.pdf', mimeType: 'application/pdf', size: 3000000}], 'file_name_format_KO'],
  ['project', 'file_project', 66, 66, 'ADD', [{file_project: 'my project.pdf', mimeType: 'application/pdf', size: 3000000}], 'file_name_format_KO'],
  ['project', 'file_project', 67, 67, 'ADD', [{file_project: 'doc.pdf', mimeType: 'application/pdf', size: 3000000}], 'file_name_min_size_KO'],
  ['project', 'file_project', 68, 68, 'ADD', [{file_project: 'a'.repeat(92) + '.pdf', mimeType: 'application/pdf', size: 3000000}], 'file_name_max_size_KO'],
  ['project', 'file_project', 69, 69, 'EDIT', [{id_project: '789', file_project: 'updated_plan.pdf', mimeType: 'application/pdf', size: 2500000}], true],
  ['project', 'file_project', 70, 70, 'SEARCH', [{file_project: 'project'}], true],

  // ===== CODE_PROJECT =====
  ['project', 'code_project', 71, 71, 'ADD', [{code_project: 'ENV_MON_2023'}], true],
  ['project', 'code_project', 72, 72, 'ADD', [{code_project: ''}], 'code_required'],
  ['project', 'code_project', 73, 73, 'ADD', [{code_project: 'PROJ@123'}], 'code_format_KO'],
  ['project', 'code_project', 74, 74, 'ADD', [{code_project: 'AB'}], 'code_min_size_KO'],
  ['project', 'code_project', 75, 75, 'ADD', [{code_project: 'a'.repeat(21)}], 'code_max_size_KO'],
  ['project', 'code_project', 76, 76, 'ADD', [{code_project: 'DUPLICATE_CODE'}], 'code_duplicate_KO'],
  ['project', 'code_project', 77, 77, 'EDIT', [{id_project: '789', code_project: 'NEW_CODE_2024'}], true],
  ['project', 'code_project', 78, 78, 'SEARCH', [{code_project: 'ENV'}], true],
  ['project', 'code_project', 79, 79, 'SEARCH', [{code_project: 'a'.repeat(21)}], 'code_max_size_KO'],

  // ===== ACRONYM_PROJECT =====
  ['project', 'acronym_project', 80, 80, 'ADD', [{acronym_project: 'EMRP'}], true],
  ['project', 'acronym_project', 81, 81, 'ADD', [{acronym_project: ''}], 'acronym_required'],
  ['project', 'acronym_project', 82, 82, 'ADD', [{acronym_project: 'EM RP'}], 'acronym_format_KO'],
  ['project', 'acronym_project', 83, 83, 'ADD', [{acronym_project: 'a'.repeat(16)}], 'acronym_max_size_KO'],
  ['project', 'acronym_project', 84, 84, 'EDIT', [{id_project: '789', acronym_project: 'EMR'}], true],
  ['project', 'acronym_project', 85, 85, 'SEARCH', [{acronym_project: 'EMP'}], true],

  // ===== ID_SAMPLING_METHODOLOGY_PROJECT =====
  ['project', 'id_sampling_methodology_project', 86, 86, 'ADD', [{id_sampling_methodology_project: '3'}], true]
];
