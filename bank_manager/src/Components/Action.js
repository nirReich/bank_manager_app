import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

export default function Action(props) {

    const [amount, setAmount] = useState('');
    const [comp, setComp] = useState('');




    //-------------------------------
    return (
        <div>
            <h3 className="headers">Action</h3>
            <input type="number" placeholder="Perceuse amount" onChange={(e) => { setAmount(e.target.value) }} />
            <br />
            <br/>
            <input type="text" placeholder="Company name" onChange={(e) => { setComp(e.target.value) }} />
            <br />
            <br/>
            <Button variant="outline-success" onClick={() => { props.addAction(comp, amount, props.index) }}>confirm</Button>
        </div>
    )
}
