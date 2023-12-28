import React from "react";
import Card from "react-bootstrap/Card"
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const StarwarsList = ({ data, title, isMovies }) => {

    return (
        <section >
            <h1>Starwars {title}</h1>
            {

                isMovies ?
                    data.map(d => (
                        <Card style={{
                            width: '25%',
                            margin: 'auto',
                            flex: 'auto',
                            borderRadius: '10px'
                        }}>
                            <ListGroup style={{ margin: '20px', height: '150px' }}>
                                <Link to={`/${title}/${d.name}`} key={d.name}>
                                    <Card.Title>{d.name}</Card.Title>
                                </Link>
                                <Card.Text>
                                    <ul>
                                        <p>{d.producer}</p>
                                        <p>{d.director}</p>
                                        <p>{d.release_date}</p>
                                    </ul>
                                </Card.Text>
                            </ListGroup>
                        </Card>
                    )) :
                    data.map(d => (
                        <Card style={{
                            width: '25%',
                            margin: 'auto',
                            flex: 'auto',
                            display: 'inline-block',
                            borderRadius: '10px'
                        }}>
                            <ListGroup style={{ margin: '20px', height: '100px' }}>
                                <Link to={`/${title}/${d.name}`} key={d.name}>
                                    <Card.Title>{d.name}</Card.Title>
                                </Link>
                            </ListGroup>
                        </Card>
                    ))
            }

        </section >
    )
}

export default StarwarsList;