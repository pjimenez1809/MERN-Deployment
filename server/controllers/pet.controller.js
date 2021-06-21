const Pet = require('../models/pet.model');

module.exports.findAllPets = (req, res) => {
    Pet.find()
    .then(allPets => res.json({pets: allPets}))
    .catch(err => res.json({error: err}));
}

module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
    .then(newPet => res.send({pet: newPet}))
    .catch(err => res.send({errors: err}));
}

module.exports.getOneSinglePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
    .then(pet => res.json({pet: pet}))
    .catch(err => res.status(404).json(err));
}

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedPet => res.json({pet: updatedPet}))
    .catch(err => res.status(404).json(err));
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(response => res.json({response: response}))
    .catch(err => res.json(err))
}





















