import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./Vehicle.css";

const Vehicle = ({ vehicleData }) => {
  const { id } = useParams();

  let vehicle = vehicleData.find((vId) => vId.name === id);

  return (
    <div className="Vehicle">
      <Card
        style={{ width: "20rem", backgroundColor: "black", opacity: "0.7" }}
      >
        <Card.Title style={{ margin: "10px", color: "white" }}>{id}</Card.Title>
        <Card.Body>
          <Card.Text>
            <ul>Model: {vehicle.model}</ul>
            <ul>Manufacturer: {vehicle.manufacturer}</ul>
            <ul>Vehicle Class: {vehicle.vehicle_class}</ul>
            <ul>Cost In Credits: {vehicle.cost_in_credits}</ul>
            <ul>Cargo Capacity: {vehicle.cargo_capacity}</ul>
            <ul>Crew Capacity: {vehicle.crew}</ul>
            <ul>Passengers: {vehicle.passengers}</ul>
            <ul>Length: {vehicle.length}</ul>
            <ul>Consumables: {vehicle.consumables}</ul>
            <ul>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Vehicle;
