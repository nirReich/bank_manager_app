import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function Transactions(props) {
    return (
        <div>
            <div className="transactionsHeader">

            <h3>Transactions List for {props.clients.name}</h3>
            </div>
        <div className="transactionsTable">

        
            {/* transactions list map */}
            {props.clients.actions.map((element, actionIndex) => {
                return (

                    <div className="row transactionsLines">
                        <div className="col-3"></div>
                        <div className="col-3 ">{element.company}</div>
                        <div className="col-3">{element.amount}</div>
                        <div className="col-3"></div>
                    </div>
                )
            })}
</div>
            <Link to={`/${props.clients.name}`}> <Button variant="primary" className="inAppButtons">Back</Button> </Link>
        </div>
        
    )
}
