const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    color: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    doorQtd: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    license_plate: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    id: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    color: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    id: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    deleteBy,
};