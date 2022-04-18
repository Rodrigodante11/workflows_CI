const mongoose = require('mongoose');

const uri = `mongodb+srv://admin:admin@cluster0.rkn5v.mongodb.net/myFirstDatabase?`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    nome: String,
    color: String,
    doorQtd: String ,
    license_plate: String
    
});

const CarModel = mongoose.model('CarModel', CarSchema);

module.exports = {
    CarModel,
};