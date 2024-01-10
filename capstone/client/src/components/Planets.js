import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./Planets.css";

const Planets = ({ planetData }) => {
  const { id } = useParams();

  let planet = planetData.find((pId) => pId.name === id);

  return (
    <div className="Planets">
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>{id}</Card.Title>
          <Card.Text></Card.Text>
          <ListGroup>
            <ListGroupItem>Terrain: {planet.terrain} </ListGroupItem>
            <ListGroupItem>Population: {planet.population}</ListGroupItem>
            <ListGroupItem>Climate: {planet.climate}</ListGroupItem>
            <ListGroupItem>Gravity: {planet.gravity}</ListGroupItem>
            <ListGroupItem>Diameter: {planet.diameter}</ListGroupItem>
            <ListGroupItem>
              Orbital Period: {planet.orbital_period}
            </ListGroupItem>
            <ListGroupItem>Surface Water: {planet.surface_water}</ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Planets;
