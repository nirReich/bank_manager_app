import React from 'react';
import Button from 'react-bootstrap/Button';

export default function BalanceWarning(props) {
    return (
        <div className="balanceWarnContainer">
            <h4>
            Low cash balance!
            <br />
            Cant create new actions
            </h4>

            <Button variant="danger" onClick={() => { props.cancle() }}>Exit</Button>
        </div>
    )
}
