import axios from 'axios';

export default class PetService {

    constructor() {}
    
    // app.post('/api/pets/new', PetController.createNewPet);

  /*   async createNewPet(request, response) {

        try {
            const {pet_type, pet_name, description, skill, likes } = request.body;
            pet_type, 
            pet_name, 
            description, 
            skill, 
            likes
        }
        

    }
    module.exports.createProduct = (request, response) => {

        const {NameProduct, PriceProduct, DescriptProduct } = request.body;
        Product.create( {
          NameProduct,
          PriceProduct,
          DescriptProduct
        }).then(product => response.json(product))
          .catch(err => response.json(err));
      }
      

 */

    async getOneSinglePet(id) {
        try {
            console.log(id)
            const pet = await axios.get(`http://localhost:8000/api/pets/${id}`)
            return pet.data.pet;
        } catch(err) {
            return err;
        }
    };

    async findAllPets() {
         try {
            const petList = await axios.get('http://localhost:8000/api/pets');
            console.log("🚀 ~ file: Home.jsx ~ line 10 ~ getAllPets ~ petList", petList)
            return petList.data.pets;

        } catch (error) {
            return error;
        }
    }

    async updatePet(id, pet) {
        try {
            const updatedPet = await axios.put(`http://localhost:8000/api/pets/update/${id}`, pet)
            return updatedPet.data.pet;
        } catch(err) {
            return err;
        }
    }

    async deletePet(id) {
        try{
            const deletePet = await axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
            return deletePet.data.response;
        } catch(err) {
            return err;
        }
    }

    /* async registerUser(user) {
        try {
            const response = await axios.post('http://localhost:8000/api/users/new', user);
            return response.data.user;

        } catch(err) {
            return err;
        }
    }

    async loginUser(user) {
        try {
            const response = await axios.post('http://localhost:8000/api/users/login', user);
            return response.data.user;

        } catch(err) {
            return err;
        }
    }
 */


};