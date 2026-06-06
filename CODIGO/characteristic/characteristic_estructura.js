window.characteristic_estructura = {
    entity: 'characteristic',
    attributes: {
        id_characteristic: {
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
        name_characteristic: {
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
        description_characteristic: {
            html: {
                tag: 'textarea',
                rows: 4,
                columns: 60,
                component_visible_size: 60
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
        data_type_characteristic: {
            html: {
                tag: 'select',
                options: ['number', 'text', 'set'],
                component_visible_size: 20
            },
            db: {
                is_null: {},
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        exp_reg: '^(number|text|set)$'
                    },
                    EDIT: {
                        exp_reg: '^(number|text|set)$'
                    },
                    SEARCH: {
                        exp_reg: '^(number|text|set)$'
                    }
                }
            }
        },
        category_characteristic: {
            html: {
                tag: 'select',
                options: ['soil_site', 'soil_chem', 'soil_bio'],
                component_visible_size: 20
            },
            db: {
                is_null: {},
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        exp_reg: '^(soil_site|soil_chem|soil_bio)$'
                    },
                    EDIT: {
                        exp_reg: '^(soil_site|soil_chem|soil_bio)$'
                    },
                    SEARCH: {
                        exp_reg: '^(soil_site|soil_chem|soil_bio)$'
                    }
                }
            }
        },
        bibref_characteristic: {
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
                        min_size: 16,
                        max_size: 200
                    },
                    EDIT: {
                        min_size: 16,
                        max_size: 200
                    },
                    SEARCH: {
                        max_size: 200
                    }
                }
            }
        },
        file_characteristic: {
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
                        max_size_file: [{ max_size_file: 200000 }],
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
                        max_size_file: [{ max_size_file: 200000 }],
                        format_name_file: [{ format_name_file: '^[a-zA-Z0-9\\.]+$' }],
                        min_size: 7,
                        max_size: 100
                    }
                }
            }
        }
    }
};
