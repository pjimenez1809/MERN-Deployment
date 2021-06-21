const mongoose = require('mongoose');

const PetShelterSchema = new mongoose.Schema({
    pet_type: {
        type: String,
        required: [true, 'Debe ingresar Tipo mascota'],
        maxLength: [20, 'No debe excer los 30 caracteres']

    },
    pet_name: {
        type: String,
        required: [true, 'Debe ingresar Nombre'],
        maxLength: [30, 'No debe excer los 30 caracteres']
    },
    description: {
        type: String,
        required: [true, 'Debe ingresar descripcion'],
        maxLength: [100, 'No debe excer los 100 caracteres']
    },
    skill: {
        type: String,
        required: [true, 'Debe ingresar skill'],
        maxLength: [20, 'No debe excer los 20 caracteres']

    },
    likes: {
        type: Number,
        default: 0
    }   
},
{timestamps: true} 
);

const Pet = mongoose.model('Pet', PetShelterSchema);

module.exports = Pet;