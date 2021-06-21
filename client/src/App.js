import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './views/Home';
import NewPetForm from './views/NewPetForm';
import DetailPet from './views/DetailPet';
/* import Login from './views/Login'; */


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
        <p>Proyecto PetShelter</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">Nueva Mascota</Link>
            </li>
            <li>
              <Link to="/details/:id">Consultar Mascota</Link>
            </li>
           {/*  <li>
              <Link to="/listpet/">Listar Mascotas</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li> */}
          </ul>
        </nav>        
        <Switch>         
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/new">
                <NewPetForm/>
            </Route>
            <Route exact path="/details/:id">
                <DetailPet/>
            </Route>
            <Route exact path="/new/:id">
                <NewPetForm/>
            </Route> 
            
 {/*            <Route exact path="/listpet">
                <ListPets/>
            </Route> 

            <Route exact path="/login">
                <Login/>
            </Route> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;