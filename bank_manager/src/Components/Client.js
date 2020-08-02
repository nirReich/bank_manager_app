import React, { useState } from 'react'
import Action from './Action';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

//propsname=props.user,index
export default function Client(props) {
    const [flag, setFlag] = useState(false);


    let showAction = () => {
        if (flag) {
            return <Action addAction={props.addAction} index={props.index} user={props.user} />
        }
    }

    //----------------------------------------------- 
    return (
        <div>
            <h1 className="headers">welcom {props.user.name}</h1>
            <br />
            <Button className="clientBtn" variant="outline-success" onClick={() => { alert(props.user.money) }}>Chack Balance</Button>
            <Button className="clientBtn" variant="outline-success" onClick={() => { setFlag(!flag) }}>Add Action</Button>
            <br />
            <Link to={'/'}><Button className="clientBtn" variant="outline-primary">Exit</Button></Link>
            <Link to={'/edit'}><Button className="clientBtn" variant="outline-primary" onClick={() => { return props.passClientToEdit(props.index) }}>Edit Profile</Button></Link>

            {showAction()}
        </div>
    )
}
