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
                        min_size: 1,
                        max_size: 11
                    },
                    EDIT: {
                        min_size: 1,
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
                        max_size: 300,
                        exp_reg: '^[a-zA-Z0-9\\s\\.,;:!?\\(\\)\\-]+$'
                    },
                    EDIT: {
                        max_size: 300,
                        exp_reg: '^[a-zA-Z0-9\\s\\.,;:!?\\(\\)\\-]+$'
                    },
                    SEARCH: {
                        max_size: 300
                    }
                }
            }
        },
        data_type_characteristic: {
            html: {
                tag: 'select',
                options: ['string', 'integer', 'decimal', 'date', 'boolean', 'text'],
                component_visible_size: 20
            },
            db: {
                is_null: {},
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        exp_reg: '^(string|integer|decimal|date|boolean|text)$'
                    },
                    EDIT: {
                        exp_reg: '^(string|integer|decimal|date|boolean|text)$'
                    },
                    SEARCH: {
                        exp_reg: '^(string|integer|decimal|date|boolean|text)$'
                    }
                }
            }
        },
        category_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 50
            },
            db: {
                is_null: {
                    ADD: true,
                    EDIT: true,
                    SEARCH: true
                },
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        max_size: 50
                    },
                    EDIT: {
                        max_size: 50
                    },
                    SEARCH: {
                        max_size: 50
                    }
                }
            }
        },
        bibref_characteristic: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 255
            },
            db: {
                is_null: {
                    ADD: true,
                    EDIT: true,
                    SEARCH: true
                },
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        max_size: 255
                    },
                    EDIT: {
                        max_size: 255
                    },
                    SEARCH: {
                        max_size: 255
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
                is_null: {
                    ADD: true,
                    EDIT: true,
                    SEARCH: true
                },
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        type_file: [
                            { type_file: 'application/pdf' },
                            { type_file: 'application/msword' },
                            { type_file: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
                            { type_file: 'text/plain' }
                        ],
                        max_size_file: [{ max_size_file: 5242880 }],
                        format_name_file: [{ format_name_file: '^[a-zA-Z0-9\\._\\-]+$' }]
                    },
                    EDIT: {
                        type_file: [
                            { type_file: 'application/pdf' },
                            { type_file: 'application/msword' },
                            { type_file: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
                            { type_file: 'text/plain' }
                        ],
                        max_size_file: [{ max_size_file: 5242880 }],
                        format_name_file: [{ format_name_file: '^[a-zA-Z0-9\\._\\-]+$' }]
                    }
                }
            }
        }
    }
};
