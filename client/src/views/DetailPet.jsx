import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import PetService from '../services/PetService';
import { useHistory } from "react-router-dom";

const DetailPet = () => {

    const { id } = useParams()
    const petService = new PetService();
    const [pet, setPet] = useState({});
    const history = useHistory();

    const getPetFromService = async () => {
        try {
            const pet = await petService.getOneSinglePet(id);
            setPet(pet);
        } catch (err) {
            return err;
        }

    }

    const addLike = async () => {
        try {
            const updatedLikes = await petService.updatePet(id, { ...pet, likes: pet.likes + 1 })
            console.log("🚀 ~ file: DetailPet.jsx ~ line 27 ~ addLike ~ updatedLikes", updatedLikes)
            setPet({ ...pet, likes: updatedLikes.likes })
        } catch (err) {
            return err;
        }
    }

    const deletePet = async () => {
        try {
            const deletePetInDB = await petService.deletePet(id);
            deletePetInDB && history.push('/');

        } catch (err) {

        }
    }

    useEffect(() => {
        getPetFromService();
    }, [])

    console.log('soy la mascota => ', pet);

    return (
        <div>
            {
                pet.name ? <div className="pet-container">
                    <h1>{pet.pet_type}</h1>
                    <h2>{pet.pet_name}</h2>
                    <h2>{pet.description}</h2>
                    <h2>{pet.skill}</h2>
                    <p>Likes: {pet.likes}</p>
                    <Button variant="info" onClick={addLike}>Agregar like</Button>
                    <Button variant="danger" onClick={deletePet}>Borrar Mascota</Button>

                </div> : 'No existe mascota'
            }

        </div>
    )

}

export default DetailPet;