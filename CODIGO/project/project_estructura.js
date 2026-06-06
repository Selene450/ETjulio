window.project_estructura = {
    entity: 'project',
    attributes: {
        id_project: {
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
        name_project: {
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
                        min_size: 15,
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9\\s]+$'
                    },
                    EDIT: {
                        min_size: 15,
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9\\s]+$'
                    },
                    SEARCH: {
                        max_size: 100
                    }
                }
            }
        },
        start_date_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 15
            },
            db: {
                is_null: {},
                type: ['date']
            },
            rules: {
                validations: {
                    ADD: {
                        valid_date: true,
                        personalized: true
                    },
                    EDIT: {
                        valid_date: true,
                        personalized: true
                    },
                    SEARCH: {
                        valid_date: true,
                        personalized: true
                    }
                }
            }
        },
        end_date_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 15
            },
            db: {
                is_null: {},
                type: ['date']
            },
            rules: {
                validations: {
                    ADD: {
                        valid_date: true,
                        personalized: true
                    },
                    EDIT: {
                        valid_date: true,
                        personalized: true
                    },
                    SEARCH: {
                        valid_date: true,
                        personalized: true
                    }
                }
            }
        },
        responsable_project: {
            html: {
                tag: 'select',
                options: [],
                component_visible_size: 60
            },
            db: {
                is_null: {},
                type: ['int']
            },
            rules: {
                validations: {
                    ADD: {
                        exp_reg: '^[0-9]+$'
                    },
                    EDIT: {
                        exp_reg: '^[0-9]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[0-9]+$'
                    }
                }
            }
        },
        organization_project: {
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
                        min_size: 5,
                        max_size: 120,
                        exp_reg: '^[a-zA-Z0-9\\s]+$'
                    },
                    EDIT: {
                        min_size: 5,
                        max_size: 120,
                        exp_reg: '^[a-zA-Z0-9\\s]+$'
                    },
                    SEARCH: {
                        max_size: 120
                    }
                }
            }
        },
        description_project: {
            html: {
                tag: 'textarea',
                rows: 5,
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
                        min_size: 30,
                        max_size: 500
                    },
                    EDIT: {
                        min_size: 30,
                        max_size: 500
                    },
                    SEARCH: {
                        max_size: 500
                    }
                }
            }
        },
        file_project: {
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
        },
        code_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 50
            },
            db: {
                is_null: {},
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 3,
                        max_size: 20,
                        exp_reg: '^[a-zA-Z0-9_\\-]+$'
                    },
                    EDIT: {
                        min_size: 3,
                        max_size: 20,
                        exp_reg: '^[a-zA-Z0-9_\\-]+$'
                    },
                    SEARCH: {
                        max_size: 20
                    }
                }
            }
        },
        acronym_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 15
            },
            db: {
                is_null: {},
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 2,
                        max_size: 15,
                        exp_reg: '^\\S+$'
                    },
                    EDIT: {
                        min_size: 2,
                        max_size: 15,
                        exp_reg: '^\\S+$'
                    },
                    SEARCH: {
                        max_size: 15
                    }
                }
            }
        },
        id_sampling_methodology_project: {
            html: {
                tag: 'select',
                options: [],
                component_visible_size: 11
            },
            db: {
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
        }
    }
};