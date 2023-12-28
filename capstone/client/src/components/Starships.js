import React from "react"
import Card from "react-bootstrap/Card"
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { useParams } from "react-router-dom/cjs/react-router-dom.min"


const Starships = ({ starshipData }) => {
    const { id } = useParams();

    let starship = starshipData.find(sId => sId.name === id);

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>{id}</Card.Title>
                <Card.Text>

                </Card.Text>
                <ListGroup>
                    <ListGroupItem>Model: {starship.model}</ListGroupItem>
                    <ListGroupItem>Manufacturer: {starship.manufacturer}</ListGroupItem>
                    <ListGroupItem>Starship Class:  {starship.starship_class}</ListGroupItem>
                    <ListGroupItem>Cost In Credits: {starship.cost_in_credits}</ListGroupItem>
                    <ListGroupItem>Cargo Capacity: {starship.cargo_capacity}</ListGroupItem>
                    <ListGroupItem>Crew Capacity: {starship.crew}</ListGroupItem>
                    <ListGroupItem>Passengers: {starship.passengers}</ListGroupItem>
                    <ListGroupItem>Length: {starship.length}</ListGroupItem>
                    <ListGroupItem>Consumables: {starship.consumables}</ListGroupItem>
                    <ListGroupItem>Max Atmosphering Speed: {starship.max_atmosphering_speed}</ListGroupItem>
                    <ListGroupItem>Hyperdrive Rating: {starship.hyperdrive_rating}</ListGroupItem>
                    <ListGroupItem>MGLT: {starship.MGLT}</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}
export default Starships;