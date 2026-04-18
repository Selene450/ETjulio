window.analysis_preparation_estructura = {
    name: 'analysis_preparation',
    description: 'Estructura de la entidad Analysis Preparation (Preparación de Análisis)',
    attributes: [
        {
            name: 'id_analysis_preparation',
            type: 'input',
            label: 'ID de Análisis',
            required: true,
            validations: [
                { rule: 'required' },
                { rule: 'integer' },
                { rule: 'maxSize', params: { size: 11 } }
            ]
        },
        {
            name: 'name_analysis_preparation',
            type: 'input',
            label: 'Nombre del Análisis',
            required: true,
            validations: [
                { rule: 'required' },
                { rule: 'minSize', params: { size: 8 } },
                { rule: 'maxSize', params: { size: 100 } },
                { rule: 'noAccents' }
            ]
        },
        {
            name: 'description_analysis_preparation',
            type: 'textarea',
            label: 'Descripción',
            required: true,
            validations: [
                { rule: 'required' },
                { rule: 'minSize', params: { size: 80 } },
                { rule: 'maxSize', params: { size: 5000 } },
                { rule: 'noAccents' }
            ]
        },
        {
            name: 'bib_analysis_preparation',
            type: 'input',
            label: 'Referencia Bibliográfica',
            required: false,
            validations: [
                { rule: 'maxSize', params: { size: 255 } }
            ]
        },
        {
            name: 'file_analysis_preparation',
            type: 'file',
            label: 'Archivo Asociado',
            required: false,
            validations: [
                { rule: 'fileType', params: { types: ['pdf', 'doc', 'docx', 'txt'] } }
            ]
        }
    ]
};
