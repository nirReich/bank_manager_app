import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'



export default function Manager(props) {
    
    const [flag, setFlag] = useState(1)

    //---------------------------------------------------------------
    return (
        <div className="container">

            <h1 className="headers">MANAGER</h1>
            {props.clients.map((element, clientIndex) => {
                return <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <p >{element.name}</p>
                            <p > {element.id}</p>
                            <Accordion.Toggle as={Button} variant="link" eventKey={flag}>
                                <button className="showBtn"></button>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={flag}>
                            <Card.Body>

                                {element.actions.map((element, actionIndex) => {
                                    return (

                                        <div className="row mb-2">
                                            <div className="col">{element.company}</div>
                                            <div className="col">{element.amount}</div>
                                            <div className="col"><Button variant="outline-danger" onClick={() => { props.removeAction(clientIndex, actionIndex) }}>X </Button> </div>

                                        </div>
                                    )
                                })}
                                <div className="row"><Button variant="outline-danger" className="cancelBtn" onClick={() => { props.removeClient(clientIndex) }}>Cancel</Button></div>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            })}

            <br />
            <Link to={'/'}>  <Button variant="outline-primary">Exit</Button></Link>

        </div>
    )
}

