import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function Action(props) {

    const [amount, setAmount] = useState('');
    const [comp, setComp] = useState('');

    //-------------------------------

    return (
        <div className="actionComp">
            <h4 className="headers">New Transaction</h4>
            <input type="number" placeholder="Perceuse amount" onChange={(e) => { setAmount(e.target.value) }} />
            <br />
            <br/>
            <input type="text" placeholder="Company name" onChange={(e) => { setComp(e.target.value) }} />
            <br />
            <br/>

           
            <Button variant="success" className="actionBtns" onClick={() => { props.addAction(comp, amount, props.index) }}>Confirm</Button>
            <Button variant="danger" className="actionBtns" onClick={() => { props.cancle() }}>Cancel</Button>
            
        </div>
    )
}
