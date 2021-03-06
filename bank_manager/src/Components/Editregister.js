import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function Register(props) {

    const [id, setId] = useState(props.clientEdit.client.id);
    const [name, setName] = useState(props.clientEdit.client.name);
    const [password, setPassword] = useState(props.clientEdit.client.password);
    const [money, setMoney] = useState(props.clientEdit.client.money);
    

    let editClient = () => {//validation and if OK send it to clients list
        if (isNaN(id) === false && id.toString().length < 9) {
            alert('i.d length must be 9 and numbers only!')
        }
        else if (name.length < 4) {
            alert('name must be longer then 4 letters!')
        }
        else if (password.length < 6) {
            alert('password must be at least 6 letters')
        }
        else if (isNaN(money) || money > 1000000 || money < 0) {
            alert('money amount must be between 0 and 1000000!')
        }
        else {
            props.editClient(id, name, password, money, props.clientEdit.index)
        }

    }

    return (
        <div>
            <div className="editRegisterHeader">
            <h1 className="headers">Edit Details</h1>
            </div>

            <br />

        <div className="editInputs">
            <label>
                id:
                <input className="editInp" type="text" id="id" value={id} onChange={(e) => { setId(e.target.value) }} />
            </label>
            <br />
            <label>
                User Name:
                <input className="editInp" type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
            </label>
            <br />
            <label>
                Password:
                <input className="editInp" type="text" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </label>
            <br />
            <label>
                Cash Balance:
                <input className="editInp" type="text" id="money" value={money} disabled={!props.clientEdit.client.premission} onChange={(e) => { setMoney(e.target.value) }}  />
            </label>
            </div>
            <div className="editButtonsDiv">
            <Link to={'/'}> <Button variant="primary" className="editButtons" onClick={() => { editClient() }}>Edit</Button></Link>
            <br />
            
            <Link to={`/${props.clientEdit.client.name}`}>  <Button variant="danger" className="editButtons">Back</Button></Link>

            </div>


        </div>
    )
}
