window.project_TestSubmit = [
  // ===== CREATE (ADD) TESTS =====
  ['project', 'CREATE', 1, 'Crear proyecto válido', {id_project: '789', name_project: 'European Soil Survey Study', start_date_project: '15/03/2024', end_date_project: '20/06/2024', responsable_project: 'Dr. James Smith', organization_project: 'European Research Center', description_project: 'A comprehensive study of soil quality and composition across European territories', file_project: 'project_plan.pdf', code_project: 'PROJ2024EU', acronym_project: 'ESS', id_sampling_methodology_project: '123'}, true],
  ['project', 'CREATE', 2, 'Crear sin ID', {name_project: 'Soil Characterization Initiative', start_date_project: '01/04/2024', end_date_project: '31/08/2024', responsable_project: 'Dr. Maria Garcia', organization_project: 'Research Institute', description_project: 'Detailed characterization of soil properties across different geographic regions', file_project: 'study_outline.pdf', code_project: 'SCI2024', acronym_project: 'SCI', id_sampling_methodology_project: '456'}, 'id_required'],
  ['project', 'CREATE', 3, 'Crear sin nombre', {id_project: '790', start_date_project: '10/05/2024', end_date_project: '15/09/2024', responsable_project: 'Dr. John Wilson', organization_project: 'Agricultural Institute', description_project: 'Investigation of agricultural practices and soil degradation in European regions', file_project: 'agriculture_study.doc', code_project: 'AGR2024', acronym_project: 'AGR', id_sampling_methodology_project: '789'}, 'name_required'],
  ['project', 'CREATE', 4, 'Crear sin fecha inicio', {id_project: '791', name_project: 'Ecosystem Health Assessment', end_date_project: '20/11/2024', responsable_project: 'Dr. Patricia Brown', organization_project: 'Environmental Center', description_project: 'Assessment of ecosystem health through soil analysis and biological indicators', file_project: 'ecosystem_report.pdf', code_project: 'EHA2024', acronym_project: 'EHA', id_sampling_methodology_project: '654'}, 'start_date_required'],
  ['project', 'CREATE', 5, 'Crear sin fecha fin', {id_project: '792', name_project: 'Climate Change Impact Study', start_date_project: '01/06/2024', responsable_project: 'Dr. Robert Davis', organization_project: 'Climate Institute', description_project: 'Evaluation of climate change impacts on soil properties and agricultural productivity', file_project: 'climate_analysis.docx', code_project: 'CCI2024', acronym_project: 'CCI', id_sampling_methodology_project: '321'}, 'end_date_required'],
  ['project', 'CREATE', 6, 'Crear sin responsable', {id_project: '793', name_project: 'Contamination Assessment Project', start_date_project: '15/06/2024', end_date_project: '30/10/2024', organization_project: 'Environmental Protection', description_project: 'Investigation of soil contamination sources and remediation strategies', file_project: 'contamination_study.pdf', code_project: 'CAP2024', acronym_project: 'CAP', id_sampling_methodology_project: '147'}, 'responsable_required'],
  ['project', 'CREATE', 7, 'Crear sin organización', {id_project: '794', name_project: 'Nutrient Cycling Analysis', start_date_project: '20/07/2024', end_date_project: '15/11/2024', responsable_project: 'Dr. Susan Miller', description_project: 'Analysis of nutrient cycling processes and plant nutrient availability', file_project: 'nutrient_report.pdf', code_project: 'NCA2024', acronym_project: 'NCA', id_sampling_methodology_project: '258'}, 'organization_required'],
  ['project', 'CREATE', 8, 'Crear todo vacío', {}, 'multiple_errors'],
  ['project', 'CREATE', 9, 'Crear fechas iguales', {id_project: '795', name_project: 'Long Term Soil Monitoring', start_date_project: '15/08/2024', end_date_project: '15/08/2024', responsable_project: 'Dr. Helen Taylor', organization_project: 'Monitoring Agency', description_project: 'Long term monitoring of soil conditions to track changes over extended periods', file_project: 'monitoring_plan.pdf', code_project: 'LTSM2024', acronym_project: 'LTSM', id_sampling_methodology_project: '369'}, true],
  ['project', 'CREATE', 10, 'Crear con fecha inválida', {id_project: '796', name_project: 'Soil Biology Research', start_date_project: '32/08/2024', end_date_project: '30/11/2024', responsable_project: 'Dr. Andrew White', organization_project: 'Biology Institute', description_project: 'Research on soil biological communities and their ecological functions', file_project: 'biology_research.docx', code_project: 'SBR2024', acronym_project: 'SBR', id_sampling_methodology_project: '741'}, 'start_date_format_KO'],

  // ===== UPDATE/EDIT TESTS =====
  ['project', 'UPDATE', 11, 'Actualizar nombre proyecto', {id_project: '789', name_project: 'Updated European Study'}, true],
  ['project', 'UPDATE', 12, 'Actualizar con fecha fin menor', {id_project: '789', start_date_project: '20/06/2024', end_date_project: '15/03/2024'}, 'end_date_min_KO'],
  ['project', 'UPDATE', 13, 'Actualizar código', {id_project: '790', code_project: 'NEWSCI2024'}, true],
  ['project', 'UPDATE', 14, 'Actualizar acrónimo', {id_project: '791', acronym_project: 'UES'}, true],
  ['project', 'UPDATE', 15, 'Actualizar múltiples campos', {id_project: '792', responsable_project: 'Dr. New Person', organization_project: 'New Org'}, true],
  ['project', 'EDIT', 16, 'Editar permitir todos los campos editables', {id_project: '789', name_project: 'Updated European Soil Study', start_date_project: '20/04/2024', end_date_project: '25/07/2024', responsable_project: 'Dr. Updated Manager', organization_project: 'Updated Research Institute', description_project: 'Updated comprehensive study with new information', file_project: 'updated_plan.pdf'}, true],
  ['project', 'EDIT', 17, 'Editar con ID inexistente', {id_project: '999', name_project: 'New'}, 'id_not_found'],
  ['project', 'EDIT', 18, 'Editar solo descripción', {id_project: '790', description_project: 'New comprehensive soil characterization with updated details and analysis'}, true],
  ['project', 'EDIT', 19, 'Editar fecha fin posterior a inicio', {id_project: '791', end_date_project: '30/11/2024'}, true],

  // ===== SEARCH TESTS =====
  ['project', 'SEARCH', 20, 'Buscar por ID exacto', {id_project: '789'}, true],
  ['project', 'SEARCH', 21, 'Buscar por ID mayor a máximo', {id_project: '123456789012'}, 'id_max_size_KO'],
  ['project', 'SEARCH', 22, 'Buscar por nombre exacto', {name_project: 'European Soil Survey Study'}, true],
  ['project', 'SEARCH', 23, 'Buscar por nombre mayor a max', {name_project: 'a'.repeat(101)}, 'name_max_size_KO'],
  ['project', 'SEARCH', 24, 'Buscar por código', {code_project: 'PROJ2024EU'}, true],
  ['project', 'SEARCH', 25, 'Buscar por acrónimo exacto', {acronym_project: 'ESS'}, true],
  ['project', 'SEARCH', 26, 'Buscar por acrónimo mayor a max', {acronym_project: 'VERYLONGACRONYMHERE'}, 'acronym_max_size_KO'],
  ['project', 'SEARCH', 27, 'Buscar por responsable', {responsable_project: 'Smith'}, true],
  ['project', 'SEARCH', 28, 'Buscar por organización', {organization_project: 'European'}, true],
  ['project', 'SEARCH', 29, 'Buscar por descripción parcial', {description_project: 'soil quality'}, true],
  ['project', 'SEARCH', 30, 'Buscar descripción mayor a max', {description_project: 'a'.repeat(501)}, 'description_max_size_KO'],
  ['project', 'SEARCH', 31, 'Buscar por fecha inicio', {start_date_project: '15/03/2024'}, true],
  ['project', 'SEARCH', 32, 'Buscar por fecha fin', {end_date_project: '20/06/2024'}, true],
  ['project', 'SEARCH', 33, 'Buscar con múltiples criterios', {code_project: 'PROJ', organization_project: 'European'}, true],
  ['project', 'SEARCH', 34, 'Buscar sin coincidencias', {name_project: 'NonExistentProject'}, true],

  // ===== DELETE TESTS =====
  ['project', 'DELETE', 35, 'Eliminar proyecto válido', {id_project: '789'}, true],
  ['project', 'DELETE', 36, 'Eliminar proyecto inexistente', {id_project: '999'}, 'id_not_found'],
  ['project', 'DELETE', 37, 'Eliminar proyecto en uso', {id_project: '790'}, 'integrity_constraint_violation'],
  ['project', 'DELETE', 38, 'Eliminar sin ID', {}, 'id_required'],
  ['project', 'DELETE', 39, 'Eliminar última entrada', {id_project: '796'}, true],

  // ===== READ TESTS =====
  ['project', 'READ', 40, 'Leer todos los proyectos', {}, true],
  ['project', 'READ', 41, 'Leer proyecto específico', {id_project: '789'}, true],
  ['project', 'READ', 42, 'Leer proyecto inexistente', {id_project: '999'}, 'id_not_found'],
  ['project', 'READ', 43, 'Leer con ID inválido', {id_project: 'invalid'}, 'id_format_KO'],
  ['project', 'READ', 44, 'Leer ordenados por fecha inicio', {sort: 'start_date'}, true],
  ['project', 'READ', 45, 'Leer de forma descendente', {sort: 'name', order: 'DESC'}, true],
  ['project', 'READ', 46, 'Leer con paginación', {limit: 5, offset: 0}, true],
  ['project', 'READ', 47, 'Leer activos únicamente', {active: true}, true],
  ['project', 'READ', 48, 'Leer por organización', {organization_project: 'European Research Center'}, true],
  ['project', 'READ', 49, 'Leer después de actualización', {id_project: '790'}, true]
];
