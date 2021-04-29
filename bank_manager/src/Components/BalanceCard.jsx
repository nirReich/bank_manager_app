import React, {useState} from 'react'

export default function balanceCard(props) {
    return (
        <div className="balanceCard_Container">
            <p>
            <p class="client_intro">
            Current balance for {props.name}
            <br/>
            ID number: {props.id}</p>

            <div className="balanceFrame">
            <h3>{props.balance}</h3>
            </div>
            
            </p>
        </div>
    )
}
