window.project_estructura = {
    name: 'project',
    description: 'Estructura de la entidad Project (Proyecto)',
    attributes: [
        {
            name: 'id_project',
            type: 'input',
            label: 'ID del Proyecto',
            required: true,
            validations: [
                { rule: 'required' },
                { rule: 'integer' },
                { rule: 'maxSize', params: { size: 11 } }
            ]
        },
        {
            name: 'name_project',
            type: 'input',
            label: 'Nombre del Proyecto',
            required: true,
            validations: [
                { rule: 'required' },
                { rule: 'minSize', params: { size: 10 } },
                { rule: 'maxSize', params: { size: 150 } },
                { rule: 'noAccents' }
            ]
        },
        {
            name: 'start_date_project',
            type: 'date',
            label: 'Fecha de Inicio',
            required: true,
            validations: [
                { rule: 'required' },
                { rule: 'validDate' }
            ]
        },
        {
            name: 'end_date_project',
            type: 'date',
            label: 'Fecha de Fin',
            required: false,
            validations: [
                { rule: 'validDate' }
            ]
        },
        {
            name: 'responsable_project',
            type: 'input',
            label: 'Responsable',
            required: false,
            validations: [
                { rule: 'minSize', params: { size: 5 } },
                { rule: 'maxSize', params: { size: 100 } }
            ]
        },
        {
            name: 'organization_project',
            type: 'input',
            label: 'Organización',
            required: false,
            validations: [
                { rule: 'minSize', params: { size: 5 } },
                { rule: 'maxSize', params: { size: 100 } }
            ]
        },
        {
            name: 'description_project',
            type: 'textarea',
            label: 'Descripción',
            required: false,
            validations: [
                { rule: 'maxSize', params: { size: 500 } }
            ]
        },
        {
            name: 'file_project',
            type: 'file',
            label: 'Archivo Asociado',
            required: false,
            validations: [
                { rule: 'fileType', params: { types: ['pdf', 'doc', 'docx', 'txt'] } }
            ]
        },
        {
            name: 'code_project',
            type: 'input',
            label: 'Código del Proyecto',
            required: false,
            validations: [
                { rule: 'maxSize', params: { size: 20 } },
                { rule: 'noSpaces' }
            ]
        },
        {
            name: 'acronym_project',
            type: 'input',
            label: 'Acrónimo',
            required: false,
            validations: [
                { rule: 'maxSize', params: { size: 10 } },
                { rule: 'noSpaces' }
            ]
        },
        {
            name: 'id_sampling_methodology_project',
            type: 'input',
            label: 'ID Metodología de Muestreo',
            required: false,
            validations: [
                { rule: 'integer' }
            ]
        }
    ]
};
