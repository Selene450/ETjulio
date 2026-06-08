window.project_TestSubmit = [
  // ===== ADD TESTS =====
  ['project', 'ADD', 1, 'Crear proyecto válido', {id_project: '789', name_project: 'European Soil Survey Study', start_date_project: '15/03/2024', end_date_project: '20/06/2024', responsable_project: 'Dr James Smith', organization_project: 'European Research Center', description_project: 'A comprehensive study of soil quality and composition across European territories', file_project: 'projectPlan.pdf', code_project: 'PROJ2024EU', acronym_project: 'ESS', id_sampling_methodology_project: '123'}, true],
  ['project', 'ADD', 2, 'Crear sin ID', {id_project: '', name_project: 'Soil Characterization Initiative', start_date_project: '01/04/2024', end_date_project: '31/08/2024', responsable_project: 'Dr Maria Garcia', organization_project: 'Research Institute', description_project: 'Detailed characterization of soil properties across different geographic regions', file_project: 'studyOutline.pdf', code_project: 'SCI2024', acronym_project: 'SCI', id_sampling_methodology_project: '456'}, 'id_required'],
  ['project', 'ADD', 3, 'Crear sin nombre', {id_project: '790', name_project: '', start_date_project: '10/05/2024', end_date_project: '15/09/2024', responsable_project: 'Dr John Wilson', organization_project: 'Agricultural Institute', description_project: 'Investigation of agricultural practices and soil degradation in European regions', file_project: 'agriculture_study.doc', code_project: 'AGR2024', acronym_project: 'AGR', id_sampling_methodology_project: '789'}, 'name_required'],
  ['project', 'ADD', 4, 'Crear sin fecha inicio', {id_project: '791', name_project: 'Ecosystem Health Assessment', start_date_project: '', end_date_project: '20/11/2024', responsable_project: 'Dr Patricia Brown', organization_project: 'Environmental Center', description_project: 'Assessment of ecosystem health through soil analysis and biological indicators', file_project: 'ecosystemReport.pdf', code_project: 'EHA2024', acronym_project: 'EHA', id_sampling_methodology_project: '654'}, 'start_date_required'],
  ['project', 'ADD', 5, 'Crear sin fecha fin', {id_project: '792', name_project: 'Climate Change Impact Study', start_date_project: '01/06/2024', end_date_project: '', responsable_project: 'Dr Robert Davis', organization_project: 'Climate Institute', description_project: 'Evaluation of climate change impacts on soil properties and agricultural productivity', file_project: 'climateAnalysis.docx', code_project: 'CCI2024', acronym_project: 'CCI', id_sampling_methodology_project: '321'}, 'end_date_required'],
  ['project', 'ADD', 6, 'Crear sin responsable', {id_project: '793', name_project: 'Contamination Assessment Project', start_date_project: '15/06/2024', end_date_project: '30/10/2024', responsable_project: '', organization_project: 'Environmental Protection', description_project: 'Investigation of soil contamination sources and remediation strategies', file_project: 'contaminationStudy.pdf', code_project: 'CAP2024', acronym_project: 'CAP', id_sampling_methodology_project: '147'}, 'responsable_required'],
  ['project', 'ADD', 7, 'Crear sin organización', {id_project: '794', name_project: 'Nutrient Cycling Analysis', start_date_project: '20/07/2024', end_date_project: '15/11/2024', responsable_project: 'Dr Susan Miller', organization_project: '', description_project: 'Analysis of nutrient cycling processes and plant nutrient availability', file_project: 'nutrientReport.pdf', code_project: 'NCA2024', acronym_project: 'NCA', id_sampling_methodology_project: '258'}, 'organization_required'],
  ['project', 'ADD', 8, 'Fecha fin memor que fecha inicio', {id_project: '795', name_project: 'Long Term Soil Monitoring', start_date_project: '15/08/2024', end_date_project: '14/08/2024', responsable_project: 'Dr Helen Taylor', organization_project: 'Monitoring Agency', description_project: 'Long term monitoring of soil conditions to track changes over extended periods', file_project: 'monitoringPlan.pdf', code_project: 'LTSM2024', acronym_project: 'LTSM', id_sampling_methodology_project: '369'}, 'end_date_min_KO'],
  ['project', 'ADD', 9, 'Crear con fecha inválida', {id_project: '796', name_project: 'Soil Biology Research', start_date_project: '32/08/2024', end_date_project: '30/11/2024', responsable_project: 'Dr Andrew White', organization_project: 'Biology Institute', description_project: 'Research on soil biological communities and their ecological functions', file_project: 'biologyResearch.docx', code_project: 'SBR2024', acronym_project: 'SBR', id_sampling_methodology_project: '741'}, 'start_date_format_KO'],

  // ===== EDIT TESTS =====
  ['project', 'EDIT', 10, 'Editar nombre proyecto', {id_project: '789', name_project: 'EDITd European Study'}, true],
  ['project', 'EDIT', 11, 'Editar con fecha fin menor', {id_project: '789', start_date_project: '20/06/2024', end_date_project: '15/03/2024'}, 'end_date_min_KO'],
  ['project', 'EDIT', 12, 'Editar código', {id_project: '790', code_project: 'NEWSCI2024'}, true],
  ['project', 'EDIT', 13, 'Editar acrónimo', {id_project: '791', acronym_project: 'UES'}, true],
  ['project', 'EDIT', 14, 'Editar múltiples campos', {id_project: '792', responsable_project: 'Dr New Person', organization_project: 'New Org'}, true],
  ['project', 'EDIT', 15, 'Editar permitir todos los campos editables', {id_project: '789', responsable_project: 'Dr Shane', name_project: 'EDITd European Soil Study', start_date_project: '20/04/2024', end_date_project: '25/07/2024', organization_project: 'EDITd Research Institute', description_project: 'EDITd comprehensive study with new information', file_project: 'EDITdPlan.pdf'}, true],
  ['project', 'EDIT', 16, 'Editar con ID inexistente', {id_project: '', name_project: 'New'}, 'id_not_found'],
  ['project', 'EDIT', 17, 'Editar solo descripción', {id_project: '790', description_project: 'New comprehensive soil characterization with EDITd details and analysis'}, true],
  ['project', 'EDIT', 18, 'Editar fecha fin posterior a inicio', {id_project: '791', end_date_project: '30/11/2024'}, true],

  // ===== SEARCH TESTS =====
  ['project', 'SEARCH', 19, 'Buscar por ID exacto', {id_project: '789'}, true],
  ['project', 'SEARCH', 20, 'Buscar por ID mayor a máximo', {id_project: '123456789012'}, 'id_max_size_KO'],
  ['project', 'SEARCH', 21, 'Buscar por nombre exacto', {name_project: 'European Soil Survey Study'}, true],
  ['project', 'SEARCH', 22, 'Buscar por nombre mayor a max', {name_project: 'a'.repeat(101)}, 'name_max_size_KO'],
  ['project', 'SEARCH', 23, 'Buscar por código', {code_project: 'PROJ2024EU'}, true],
  ['project', 'SEARCH', 24, 'Buscar por acrónimo exacto', {acronym_project: 'ESS'}, true],
  ['project', 'SEARCH', 25, 'Buscar por acrónimo mayor a max', {acronym_project: 'VERYLONGACRONYMHERE'}, 'acronym_max_size_KO'],
  ['project', 'SEARCH', 26, 'Buscar por responsable', {responsable_project: 'Smith'}, true],
  ['project', 'SEARCH', 27, 'Buscar por organización', {organization_project: 'European'}, true],
  ['project', 'SEARCH', 28, 'Buscar por descripción parcial', {description_project: 'soil quality'}, true],
  ['project', 'SEARCH', 29, 'Buscar descripción mayor a max', {description_project: 'a'.repeat(501)}, 'description_max_size_KO'],
  ['project', 'SEARCH', 30, 'Buscar por fecha inicio', {start_date_project: '15/03/2024'}, true],
  ['project', 'SEARCH', 31, 'Buscar por fecha fin', {end_date_project: '20/06/2024'}, true],
  ['project', 'SEARCH', 32, 'Buscar con múltiples criterios', {code_project: 'PROJ', organization_project: 'European'}, true],
  ['project', 'SEARCH', 33, 'Buscar sin coincidencias', {name_project: 'NonExistentProject'}, true],

];
