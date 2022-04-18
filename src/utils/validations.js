const validate = require('validate.js');
const Constants = require('../utils/Constants');
const Constraints = require('../utils/cars_validation');

const Validation = {
    create(data){
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    }
};

module.exports =  Validation