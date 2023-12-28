import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './Routes';
import StarwarsApi from './api/StarwarsApi';
import { useEffect, useState } from 'react';
import UserContext from './useContext'
import UsersApi from './api/UsersApi';


function App() {

  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
  const [species, setSpecies] = useState([]);
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useState('');


  useEffect(() => {
    async function fetchData() {
      try {


        //fetch data from api 
        const moviesData = await StarwarsApi.getData('movies');
        const peopleData = await StarwarsApi.getData('people');
        const planetsData = await StarwarsApi.getData('planets');
        const vehiclesData = await StarwarsApi.getData('vehicles');
        const starshipsData = await StarwarsApi.getData('starships');
        const speciesData = await StarwarsApi.getData('species');


        // Update all state variables together
        setMovies(moviesData);
        setPeople(peopleData);
        setPlanets(planetsData);
        setVehicles(vehiclesData);
        setStarships(starshipsData);
        setSpecies(speciesData);


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);


  const isMovies = movies.map(m => {
    let { producer, director, release_date } = m
    return ({
      producer: producer,
      director: director,
      release_date: release_date
    });
  })

  // User API Call to grab data. Dependency: Token. Will grab user data from DB
  useEffect(() => {
    async function getUser() {
      console.log("TOKEN state app", token);
      if (token) {
        try {
          let { username } = token;
          UsersApi.token = token;
          let user = await UsersApi.getOneUser(username);
          setCurrUser(user)
        } catch (error) {
          console.log("User loading error:", error);
        }
      }
    };
    getUser()
  }, [token]);

  // Signup Function = Takes Userdata -> returns: token if user successfully added
  const signup = async (formData) => {
    try {
      let token = await UsersApi.signup(formData);
      setToken(token)
      return { success: true }
    } catch (e) {
      console.error("Error: ", e);
      return { success: false, e };
    }
  }

  const loginUser = async (formData) => {
    try {
      let token = UsersApi.login(formData);
      setToken(token);
      return { success: true }
    } catch (e) {
      console.error("Error: ", e)
      return { success: false, e };
    }
  }

  // Logout:
  const logout = () => {
    setCurrUser(null);
    setToken(null);
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ logout, currUser, setCurrUser }}>
        <BrowserRouter>

          <Navbar />
          <Routes
            movies={movies}
            people={people}
            planets={planets}
            vehicles={vehicles}
            starships={starships}
            species={species}
            isMovies={isMovies}
            signup={signup}
            login={loginUser}
          />

        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;

// getting tids of people etc... for later use
// const peopleNum = people.map(p =>
//   p.url.split('/')[5]);
// this turns the array of strings into an array of numbers
// let id = peopleNum.map(Number);
// console.log(peopleId);