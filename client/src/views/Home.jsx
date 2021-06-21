import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import PetService from '../services/PetService';
import { Button } from 'react-bootstrap'

const Home = () => {
    const [pets, setPets] = useState([]);
    const petService = new PetService();

    const findAllPets = async () => {
        const pets = await petService.findAllPets()
        setPets(pets);
    }

    useEffect(() => {
        findAllPets();
    }, []);

    return (
        <div>
            <h1>Mascotas</h1>
                <div className="pets-container">
                <ul>
                    {
                        pets.length > 0 ? (
                            pets.map((pet) => (
                                <Link to={`/details/${pet._id}`}>
                                    <li key={pet._id} className="card">
                                        <tr>
                                            <td cellpadding="10px">{pet.pet_type}</td>
                                            <td>   </td>
                                            <td>{pet.pet_name}</td>
                                            <td>{pet.description}</td>
                                            <td>{pet.skill}</td>
                                            <td>{pet.likes}</td>
                                            <Link to={`/new/${pet._id}`}>
                                                <Button variant="dark">Editar</Button>
                                            </Link>
                                        </tr>
                                    </li>
                                </Link>
                            ))
                        ) : 'No ha creado ninguna mascota'
                    }
                </ul>
                <Link to="/new">
                    <button type="button" class="btn btn-primary">Nuevo Cachorro</button>
                </Link>
            </div> 
        </div>
    )
}
export default Home;