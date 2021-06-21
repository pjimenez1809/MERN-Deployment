const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/api/pets', PetController.findAllPets);
    app.put('/api/pets/update/:id', PetController.updatePet);
    app.get('/api/pets/:id', PetController.getOneSinglePet);
    app.post('/api/pets/new', PetController.createNewPet);
    app.delete('/api/pets/delete/:id', PetController.deletePet);
}