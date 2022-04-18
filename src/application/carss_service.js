const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const CarsRepository = require('../port/cars_repository');
const Constraints = require('../utils/cars_validation');
const Validation =  require('../utils/validation');

const Cars = {
    async create(data) {
        try {
            const validation = Validation.create(data)
            if (validation) {
                
                return response;
            }

            data.id = Utils.generateUuid();
  
            const response = await CarsRepository.create(data);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const validation = validate.validate(data, Constraints.update);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await CarsRepository.update(data);

            if (response === []) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {
            const validation = validate.validate(data, Constraints.deleteBy);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await CarsRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

   
    async list() {
        try {
            const response = await CarsRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Cars;