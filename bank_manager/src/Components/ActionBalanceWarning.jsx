import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ActionBalanceWarning(props) {
    return (
        <div>
            <div className="actionWarnContainer">
            <h4>
            Not enough funds!
            <br />
            Cant create new transaction
            </h4>

            <Button variant="danger" onClick={() => { props.cancle() }}>Exit</Button>
        </div>
        </div>
    )
}
