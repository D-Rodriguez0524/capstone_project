import React from "react"
import Card from "react-bootstrap/Card"
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { useParams } from "react-router-dom/cjs/react-router-dom.min"


const Vehicle = ({ vehicleData }) => {
    const { id } = useParams();

    let vehicle = vehicleData.find(vId => vId.name === id);

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>{id}</Card.Title>
                <Card.Text>

                </Card.Text>
                <ListGroup>
                    <ListGroupItem>Model: {vehicle.model}</ListGroupItem>
                    <ListGroupItem>Manufacturer: {vehicle.manufacturer}</ListGroupItem>
                    <ListGroupItem>Vehicle Class:  {vehicle.vehicle_class}</ListGroupItem>
                    <ListGroupItem>Cost In Credits: {vehicle.cost_in_credits}</ListGroupItem>
                    <ListGroupItem>Cargo Capacity: {vehicle.cargo_capacity}</ListGroupItem>
                    <ListGroupItem>Crew Capacity: {vehicle.crew}</ListGroupItem>
                    <ListGroupItem>Passengers: {vehicle.passengers}</ListGroupItem>
                    <ListGroupItem>Length: {vehicle.length}</ListGroupItem>
                    <ListGroupItem>Consumables: {vehicle.consumables}</ListGroupItem>
                    <ListGroupItem>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}
export default Vehicle;