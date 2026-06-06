window.analysis_preparation_estructura = {
    entity: 'analysis_preparation',
    attributes: {
        id_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'number',
                component_visible_size: 11
            },
            db: {
                is_pk: true,
                is_autoincrement: true,
                is_null: {},
                type: ['int']
            },
            rules: {
                validations: {
                    ADD: {
                        exp_reg: '^[0-9]+$',
                        min_size: 1,
                        max_size: 11
                    },
                    EDIT: {
                        exp_reg: '^[0-9]+$',
                        min_size: 1,
                        max_size: 11
                    },
                    SEARCH: {
                        exp_reg: '^[0-9]+$',
                        max_size: 11
                    }
                }
            }
        },
        name_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 100
            },
            db: {
                is_null: {},
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 8,
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9\\s]+$'
                    },
                    EDIT: {
                        min_size: 8,
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9\\s]+$'
                    },
                    SEARCH: {
                        max_size: 100
                    }
                }
            }
        },
        description_analysis_preparation: {
            html: {
                tag: 'textarea',
                rows: 5,
                columns: 80,
                component_visible_size: 80
            },
            db: {
                is_null: {},
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 80,
                        max_size: 5000,
                        exp_reg: '^[a-zA-Z0-9\\s\\.,;:!?\\(\\)\\-]+$'
                    },
                    EDIT: {
                        min_size: 80,
                        max_size: 5000,
                        exp_reg: '^[a-zA-Z0-9\\s\\.,;:!?\\(\\)\\-]+$'
                    },
                    SEARCH: {
                        max_size: 5000
                    }
                }
            }
        },
        bib_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 200
            },
            db: {
                is_null: {},
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 6,
                        max_size: 200
                    },
                    EDIT: {
                        min_size: 6,
                        max_size: 200
                    },
                    SEARCH: {
                        max_size: 200
                    }
                }
            }
        },
        file_analysis_preparation: {
            html: {
                tag: 'input',
                type: 'file',
                multiple: false,
                component_visible_size: 80
            },
            db: {
                is_null: {},
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        no_file: true,
                        type_file: [
                            { type_file: 'application/pdf' },
                            { type_file: 'application/msword' },
                            { type_file: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }
                        ],
                        max_size_file: [{ max_size_file: 2000000 }],
                        format_name_file: [{ format_name_file: '^[a-zA-Z0-9\\.]+$' }],
                        min_size: 7,
                        max_size: 100
                    },
                    EDIT: {
                        type_file: [
                            { type_file: 'application/pdf' },
                            { type_file: 'application/msword' },
                            { type_file: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }
                        ],
                        max_size_file: [{ max_size_file: 2000000 }],
                        format_name_file: [{ format_name_file: '^[a-zA-Z0-9\\.]+$' }],
                        min_size: 7,
                        max_size: 100
                    }
                }
            }
        }
    }
};
