import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./Starships.css";

const Starships = ({ starshipData }) => {
  const { id } = useParams();

  let starship = starshipData.find((sId) => sId.name === id);

  return (
    <div className="Starships">
      <Card
        style={{ width: "20rem", backgroundColor: "black", opacity: "0.7" }}
      >
        <Card.Title style={{ color: "white" }}>{id}</Card.Title>
        <Card.Body>
          <Card.Text>
            <ul>Model: {starship.model}</ul>
            <ul>Manufacturer: {starship.manufacturer}</ul>
            <ul>Starship Class: {starship.starship_class}</ul>
            <ul>Cost In Credits: {starship.cost_in_credits}</ul>
            <ul>Cargo Capacity: {starship.cargo_capacity}</ul>
            <ul>Crew Capacity: {starship.crew}</ul>
            <ul>Passengers: {starship.passengers}</ul>
            <ul>Length: {starship.length}</ul>
            <ul>Consumables: {starship.consumables}</ul>
            <ul>Max Atmosphering Speed: {starship.max_atmosphering_speed}</ul>
            <ul>Hyperdrive Rating: {starship.hyperdrive_rating}</ul>
            <ul>MGLT: {starship.MGLT}</ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Starships;
