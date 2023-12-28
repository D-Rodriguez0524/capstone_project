import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Card from "react-bootstrap/Card"


const Species = ({ speciesData }) => {
    const { id } = useParams();

    let species = speciesData.find(sId => sId.name === id);
    console.log(species);

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>{id}</Card.Title>
                <Card.Text>

                </Card.Text>
                <ListGroup>
                    <ListGroupItem>Classification: {species.classification} </ListGroupItem>
                    <ListGroupItem>Language: {species.language}</ListGroupItem>
                    <ListGroupItem>Average Height: {species.average_height}</ListGroupItem>
                    <ListGroupItem>Average Lifespan: {species.average_lifespan}</ListGroupItem>
                    <ListGroupItem>Eye Colors: {species.eye_colors}</ListGroupItem>
                    <ListGroupItem>Hair Colors: {species.hair_colors}</ListGroupItem>
                    <ListGroupItem>Designation: {species.designation}</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default Species;