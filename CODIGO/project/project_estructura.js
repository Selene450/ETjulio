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
        name_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 150
            },
            db: {
                is_null: {},
                type: ['string']
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 10,
                        max_size: 150,
                        exp_reg: '^[a-zA-Z0-9\\s]+$'
                    },
                    EDIT: {
                        min_size: 10,
                        max_size: 150,
                        exp_reg: '^[a-zA-Z0-9\\s]+$'
                    },
                    SEARCH: {
                        max_size: 150
                    }
                }
            }
        },
        start_date_project: {
            html: {
                tag: 'input',
                type: 'date',
                component_visible_size: 15
            },
            db: {
                is_null: {},
                type: ['date']
            },
            rules: {
                validations: {
                    ADD: {
                        valid_date: true
                    },
                    EDIT: {
                        valid_date: true
                    },
                    SEARCH: {
                        valid_date: true
                    }
                }
            }
        },
        end_date_project: {
            html: {
                tag: 'input',
                type: 'date',
                component_visible_size: 15
            },
            db: {
                is_null: {
                    ADD: true,
                    EDIT: true,
                    SEARCH: true
                },
                type: ['date']
            },
            rules: {
                validations: {
                    ADD: {
                        valid_date: true
                    },
                    EDIT: {
                        valid_date: true
                    },
                    SEARCH: {
                        valid_date: true
                    }
                }
            }
        },
        responsable_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 100
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
                        min_size: 5,
                        max_size: 100
                    },
                    EDIT: {
                        min_size: 5,
                        max_size: 100
                    },
                    SEARCH: {
                        max_size: 100
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
                        min_size: 5,
                        max_size: 100
                    },
                    EDIT: {
                        min_size: 5,
                        max_size: 100
                    },
                    SEARCH: {
                        max_size: 100
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
                        max_size: 500
                    },
                    EDIT: {
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
        },
        code_project: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 20
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
                        max_size: 20,
                        exp_reg: '^\\S+$'
                    },
                    EDIT: {
                        max_size: 20,
                        exp_reg: '^\\S+$'
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
                component_visible_size: 10
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
                        max_size: 10,
                        exp_reg: '^\\S+$'
                    },
                    EDIT: {
                        max_size: 10,
                        exp_reg: '^\\S+$'
                    },
                    SEARCH: {
                        max_size: 10
                    }
                }
            }
        },
        id_sampling_methodology_project: {
            html: {
                tag: 'input',
                type: 'number',
                component_visible_size: 11
            },
            db: {
                is_null: {
                    ADD: true,
                    EDIT: true,
                    SEARCH: true
                },
                type: ['int']
            },
            rules: {
                validations: {
                    ADD: {
                        max_size: 11
                    },
                    EDIT: {
                        max_size: 11
                    }
                }
            }
        }
    }
};
