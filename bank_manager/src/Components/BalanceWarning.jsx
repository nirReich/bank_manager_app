import React from 'react';
import Button from 'react-bootstrap/Button';

export default function BalanceWarning(props) {
    return (
        <div className="balanceWarnContainer">
            <h4>
            Your balance is {props.balance}
                <br/>
            Cant create new transactions with negative balance!
            </h4>

            <Button variant="danger" onClick={() => { props.cancle() }}>Cancel</Button>
        </div>
    )
}
