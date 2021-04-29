import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';

export default function BalanceChangeBox(props) {
    const [newBalance,setNewBalance] = useState('')
    
    return (
        <div className="balanceChangeCompContainer">
            <h3>Balance Change For {props.name}</h3>
            <br/>
            <p>Current Balance</p>
            
            <div className="balanceCahngeFrame">
            <h3>{props.balance}</h3>
            </div>
            <br/>
            <div>
                <p>Enter new balance</p>
                <input type="number" placeholder="New Balance" value={newBalance} onChange={(e) => { setNewBalance(e.target.value) }}/>
                <br/>
                <Button variant="success inAppButtons" onClick={()=>{props.balanceChangeFunc(newBalance,props.index)}}>Confirm</Button>
                <br/>
                <Button variant="danger inAppButtons" onClick={()=>{props.cancleBalanceChange()}}>Cancle</Button>
            </div>
        </div>
    )
}
