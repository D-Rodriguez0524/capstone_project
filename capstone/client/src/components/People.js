import React from "react"
import Card from "react-bootstrap/Card"
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { useParams } from "react-router-dom/cjs/react-router-dom.min"


const People = ({ peopleData }) => {
    const { id } = useParams();

    let person = peopleData.find(pId => pId.name === id);

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title>{id}</Card.Title>
                <Card.Text>

                </Card.Text>
                <ListGroup>
                    <ListGroupItem>Gender: {person.gender}</ListGroupItem>
                    <ListGroupItem>Birth Year: {person.birth_year}</ListGroupItem>
                    <ListGroupItem>Height: {person.height}</ListGroupItem>
                    <ListGroupItem>Mass: {person.mass}</ListGroupItem>
                    <ListGroupItem>Eye Color: {person.eye_color}</ListGroupItem>
                    <ListGroupItem>Skin Color: {person.skin_color}</ListGroupItem>
                    <ListGroupItem>Hair Color: {person.hair_color}</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}
export default People;