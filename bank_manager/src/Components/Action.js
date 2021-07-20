import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ActionBalanceWarning from './ActionBalanceWarning';

export default function Action(props) {

    const [amount, setAmount] = useState('');
    const [comp, setComp] = useState('');
    const [flag, setFlag] = useState(false)

    const handelAction = (comp, amount, index) => {
        debugger
        if (amount > props.user.money || props.user.money === '0') {
            setFlag(true)
        }
        else {
            props.addAction(comp, amount, index)
        }
    }

    const showBalanceWarning = () => {
        if (flag) {
            return <ActionBalanceWarning cancle={() => setFlag(false)} />
        }
    }
    //-------------------------------

    return (
        <div className="actionComp">
            <h4 className="headers">New Transaction</h4>
            <input type="number" placeholder="Perceuse amount" onChange={(e) => { setAmount(e.target.value) }} />
            <br />
            <br />
            <input type="text" placeholder="Company name" onChange={(e) => { setComp(e.target.value) }} />
            <br />
            <br />


            <Button variant="success" className="actionBtns" onClick={() => { handelAction(comp, amount, props.index) }}>Confirm</Button>
            <Button variant="danger" className="actionBtns" onClick={() => { props.cancle() }}>Cancel</Button>
            {showBalanceWarning()}

        </div>
    )
}
