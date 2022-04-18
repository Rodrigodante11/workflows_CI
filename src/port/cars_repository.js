const { CarsModel } = require('../infrastructure/database');

const CarsRepository = {
    async create(data) {
        try {
            const model = new CarsModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nome: data.nome,
            };
            const options = { new: true };
            const filter = { id: data.id };
            const result = await CarsModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await CarsModel.deleteOne({ id: data.id }).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const result = await CarsModel.find().exec();
            return result;
        } catch (error) {
            return error;
        }
    },
};

module.exports = CarsRepository;