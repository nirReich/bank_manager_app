import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function LogIn(props) {
    const [user, setUser] = useState('');
    const [passWord, setPassWord] = useState('');
    


    const setTheLink = () => {//handels the enter button

        if (user === 'admin' && passWord === 'admin') {
            return <Link to={'/admin'}><Button variant="outline-success">enter</Button></Link>
        }
        else if (props.pickClient(user, passWord)) {
            return <Link to={`/${user}`}><Button variant="outline-success">enter</Button></Link>
        }
        else { return <Button variant="outline-success" onClick={() => { alert('User not found!') }}>enter</Button> }



    }
    
    //---------------------------------------
    return (
        <div className="container">

            <h1 className="headers">Banking App</h1>
            <br />
            <input type="text" placeholder="user name" onChange={(e) => { setUser(e.target.value) }} />
            <br />
            <br/>
            <input type="Password" placeholder="password" onChange={(e) => { setPassWord(e.target.value) }} />
            <br />
            <br/>
            <Link to={'/register'}><Button variant="outline-primary">Create New User</Button></Link>
            <br />
            <br />
            {setTheLink()}

        </div>
    )
}
