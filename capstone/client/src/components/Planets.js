import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./Planets.css";

const Planets = ({ planetData }) => {
  const { id } = useParams();

  let planet = planetData.find((pId) => pId.name === id);

  return (
    <div className="Planets">
      <Card
        style={{ width: "20rem", backgroundColor: "black", opacity: "0.7" }}
      >
        <Card.Title style={{ color: "white" }}>{id}</Card.Title>
        <Card.Body>
          <Card.Text>
            <ul>Terrain: {planet.terrain} </ul>
            <ul>Population: {planet.population}</ul>
            <ul>Climate: {planet.climate}</ul>
            <ul>Gravity: {planet.gravity}</ul>
            <ul>Diameter: {planet.diameter}</ul>
            <ul>Orbital Period: {planet.orbital_period}</ul>
            <ul>Surface Water: {planet.surface_water}</ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Planets;
