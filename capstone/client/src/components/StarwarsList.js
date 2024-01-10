import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./StarwarsList.css";

const StarwarsList = ({ data, title, isMovies }) => {
  return (
    <div className="StarwarsList">
      <h1>Starwars {title}</h1>
      {isMovies
        ? data.map((d) => (
            <Card
              style={{
                width: "25%",
                margin: "auto",
                borderRadius: "10px",
                background: "black",
                opacity: "0.5",
              }}
            >
              <ListGroup style={{ margin: "20px", height: "150px" }}>
                <Link
                  to={`/${title}/${d.name}`}
                  key={d.name}
                  style={{ color: "white" }}
                >
                  <Card.Title style={{ color: "white" }}>{d.name}</Card.Title>
                </Link>
                <Card.Text style={{ color: "white" }}>
                  <ul>
                    <p>{d.producer}</p>
                    <p>{d.director}</p>
                    <p>{d.release_date}</p>
                  </ul>
                </Card.Text>
              </ListGroup>
            </Card>
          ))
        : data.map((d) => (
            <Card
              style={{
                width: "20%",
                margin: "auto",
                borderRadius: "10px",
                background: "black",
                opacity: "0.5",
              }}
            >
              <ListGroup
                style={{
                  margin: "20px",
                }}
              >
                <Link
                  to={`/${title}/${d.name}`}
                  key={d.name}
                  style={{ color: "white" }}
                >
                  <Card.Title style={{ color: "white" }}>{d.name}</Card.Title>
                </Link>
              </ListGroup>
            </Card>
          ))}
    </div>
  );
};

export default StarwarsList;
