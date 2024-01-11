import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./People.css";

const People = ({ peopleData }) => {
  const { id } = useParams();

  let person = peopleData.find((pId) => pId.name === id);

  return (
    <div className="People">
      <Card
        style={{ width: "20rem", backgroundColor: "black", opacity: "0.7" }}
      >
        <Card.Title style={{ color: "white" }}>{id}</Card.Title>
        <Card.Body>
          <Card.Text>
            <ul>Gender: {person.gender}</ul>
            <ul>Birth Year: {person.birth_year}</ul>
            <ul>Height: {person.height}</ul>
            <ul>Mass: {person.mass}</ul>
            <ul>Eye Color: {person.eye_color}</ul>
            <ul>Skin Color: {person.skin_color}</ul>
            <ul>Hair Color: {person.hair_color}</ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default People;
