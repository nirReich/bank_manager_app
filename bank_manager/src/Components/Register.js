import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'


export default function Register(props) {

    const [newClient, setNewClient] = useState({ id: '', name: '', password: '', money: '', actions: [] });
    const [passConf, setPassConf] = useState('')




    let setData = (e) => {
        let data = e.target.value
        if (e.target.id === "id") {
            if (isNaN(e.target.value)) {
                alert('numbers only!')
            }
            else { setNewClient({ ...newClient, id: data }) }

        }
        else if (e.target.id === "name") {

            setNewClient({ ...newClient, name: data })

        }
        else if (e.target.id === 'password') {

            setNewClient({ ...newClient, password: data })

        }
        else if (e.target.id === "passwordConf") {
            setPassConf(data)
        }
        else {

            setNewClient({ ...newClient, money: data })

        }
    }

    let sendClient = () => {
        if (isNaN(newClient.id) === false && newClient.id.toString().length < 9) {
            alert('i.d length must be 9 and numbers only!')
        }
        else if (newClient.name.length < 4) {
            alert('name must be longer then 4 letters!')
        }
        else if (newClient.password.length < 6) {
            alert('password must be at least 6 letters')
        }
        else if (newClient.password !== passConf) {
            alert('password not same with confirme!')
        }
        else if (isNaN(newClient.money) || newClient.money > 1000000 || newClient.money < 0) {
            alert('money amount must be between 0 and 1000000!')
        }
        else {
            props.addClient(newClient)
        }

    }



    //----------------------------------------------------
    return (
        <div>
            <h1 className="headers">REGISTER</h1>
            <br />
            <input type="text" id="id" placeholder="id" onChange={setData} />
            <br />
            <input type="text" id="name" placeholder="user name" onChange={setData} />
            <br />
            <input type="text" id="password" placeholder="Password" onChange={setData} />
            <br />
            <input type="text" id="passwordConf" placeholder="Confirm password" onChange={setData} />
            <br />
            <input type="text" id="money" placeholder="Money" onChange={setData} />
            <br />
            <br/>
            <Link to={'/'}> <Button variant="outline-success" onClick={() => { sendClient() }}>Create</Button></Link>
            <br/>
            <br/>
            <Link to={'/'}><Button variant="outline-primary">Back</Button></Link>
        </div>
    )
}
