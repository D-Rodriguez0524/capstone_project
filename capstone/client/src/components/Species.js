import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Card from "react-bootstrap/Card";
import "./Species.css";

const Species = ({ speciesData }) => {
  const { id } = useParams();

  let species = speciesData.find((sId) => sId.name === id);
  console.log(species);

  return (
    <div className="Species">
      <Card
        style={{ width: "20rem", backgroundColor: "black", opacity: "0.7" }}
      >
        <Card.Title style={{ color: "white" }}>{id}</Card.Title>
        <Card.Body>
          <Card.Text>
            <ul>Classification: {species.classification} </ul>
            <ul>Language: {species.language}</ul>
            <ul>Average Height: {species.average_height}</ul>
            <ul>Average Lifespan: {species.average_lifespan}</ul>
            <ul>Eye Colors: {species.eye_colors}</ul>
            <ul>Hair Colors: {species.hair_colors}</ul>
            <ul>Designation: {species.designation}</ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Species;
