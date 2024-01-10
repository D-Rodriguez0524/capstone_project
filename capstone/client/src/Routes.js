import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import StarwarsList from "./components/StarwarsList";
import People from "./components/People";
import Starships from "./components/Starships";
import Planets from "./components/Planets";
import Movie from "./components/Movie";
import Vehicle from "./components/Vehicle";
import Species from "./components/Species";
import SignupForm from "./auth/SignupForm";
import LoginForm from "./auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";

const Routes = ({
  movies,
  planets,
  people,
  starships,
  vehicles,
  species,
  isMovies,
  signup,
  login,
}) => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/signup">
        <SignupForm signup={signup} />
      </Route>

      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>

      <Route exact path="/people">
        <StarwarsList data={people} title="people" />
      </Route>
      <Route exact path="/people/:id">
        <People peopleData={people} />
      </Route>

      <Route exact path="/starships">
        <StarwarsList data={starships} title="starships" />
      </Route>
      <Route exact path="/starships/:id">
        <Starships starshipData={starships} />
      </Route>

      <Route exact path="/planets">
        <StarwarsList data={planets} title="planets" />
      </Route>
      <Route exact path="/planets/:id">
        <Planets planetData={planets} />
      </Route>

      <Route exact path="/movies">
        <StarwarsList data={movies} title="movies" isMovies={isMovies} />
      </Route>
      <Route exact path="/movies/:id">
        <Movie movieData={movies} />
      </Route>

      <Route exact path="/vehicles">
        <StarwarsList data={vehicles} title="vehicles" />
      </Route>
      <Route exact path="/vehicles/:id">
        <Vehicle vehicleData={vehicles} />
      </Route>

      <Route exact path="/species">
        <StarwarsList data={species} title="species" />
      </Route>
      <Route exact path="/species/:id">
        <Species speciesData={species} />
      </Route>

      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
