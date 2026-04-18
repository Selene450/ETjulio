window.characteristic_estructura = {
    name: 'characteristic',
    description: 'Estructura de la entidad Characteristic (Característica)',
    attributes: [
        {
            name: 'id_characteristic',
            type: 'input',
            label: 'ID de Característica',
            required: true,
            validations: [
                { rule: 'required' },
                { rule: 'integer' },
                { rule: 'maxSize', params: { size: 11 } }
            ]
        },
        {
            name: 'name_characteristic',
            type: 'input',
            label: 'Nombre de Característica',
            required: true,
            validations: [
                { rule: 'required' },
                { rule: 'minSize', params: { size: 8 } },
                { rule: 'maxSize', params: { size: 100 } },
                { rule: 'noAccents' }
            ]
        },
        {
            name: 'description_characteristic',
            type: 'textarea',
            label: 'Descripción',
            required: true,
            validations: [
                { rule: 'required' },
                { rule: 'maxSize', params: { size: 300 } }
            ]
        },
        {
            name: 'data_type_characteristic',
            type: 'select',
            label: 'Tipo de Dato',
            required: true,
            options: ['string', 'integer', 'decimal', 'date', 'boolean', 'text'],
            validations: [
                { rule: 'required' },
                { rule: 'validOption', params: { values: ['string', 'integer', 'decimal', 'date', 'boolean', 'text'] } }
            ]
        },
        {
            name: 'category_characteristic',
            type: 'input',
            label: 'Categoría',
            required: false,
            validations: [
                { rule: 'maxSize', params: { size: 50 } }
            ]
        },
        {
            name: 'bibref_characteristic',
            type: 'input',
            label: 'Referencia Bibliográfica',
            required: false,
            validations: [
                { rule: 'maxSize', params: { size: 255 } }
            ]
        },
        {
            name: 'file_characteristic',
            type: 'file',
            label: 'Archivo Asociado',
            required: false,
            validations: [
                { rule: 'fileType', params: { types: ['pdf', 'doc', 'docx', 'txt'] } }
            ]
        }
    ]
};
