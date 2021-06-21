import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import PetService from '../services/PetService';

const NewPetForm = () => {
    const { id } = useParams();
    const petService = new PetService;
    //console.log("🚀 ~ file: NewPetForm.jsx ~ line 8 ~ NewPetForm ~ useParams()", useParams());

    const [petForm, setPetform] = useState({
        pet_type: '',
        pet_name: '',
        description: '',
        skill: '',
        likes: 0
    })
    const history = useHistory()


    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('llegué')
        if (id) {
            petService.updatePet(id, petForm);
            history.push("/");
        } else {
            axios.post('http://localhost:8000/api/pets/new', petForm)
                .then(() => history.push("/"))
                .catch(err => console.log(err))
        }
    }

    
    /* const getPetFromService = async () => {
        try {

            // app.post('/api/pets/new', PetController.createNewPet);
            const petFromService = await petService.getOneSinglePet(id);
            setPetform({
                pet_type: petFromService.pet_type,
                pet_name: petFromService.pet_name,
                description: petFromService.description,
                skill: petFromService.skill,
                likes: petFromService.likes
            })
        } catch (err) {
            return err;
        }
    }

    useEffect(() => {
        console.log(petForm);
        getPetFromService();
    }, [])
 */


    return (
        <div className="pet-form-container">
            <h1>Nuevas Mascotas:</h1>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Control type="text" name="pet_type" value={petForm.pet_type} onChange={(e) => setPetform({ ...petForm, [e.target.name]: e.target.value })} />
                </Form.Group>
              
               <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Nombre de Mascota</Form.Label>
                    <Form.Control type="text" name="pet_name" value={petForm.pet_name} onChange={(e) => setPetform({ ...petForm, [e.target.name]: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" name="description" value={petForm.description} onChange={(e) => setPetform({ ...petForm, [e.target.name]: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Skill</Form.Label>
                    <Form.Control type="text" name="skill" value={petForm.skill} onChange={(e) => setPetform({ ...petForm, [e.target.name]: e.target.value })} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Likes</Form.Label>
                    <Form.Control type="text" name="likes" value={petForm.likes} onChange={(e) => setPetform({ ...petForm, [e.target.name]: e.target.value })} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {id ? 'Editar' : 'Enviar'}
                </Button>
            </Form>


        </div>
    )
}

export default NewPetForm;