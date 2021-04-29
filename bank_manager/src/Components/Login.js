import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button'

export default function LogIn(props) {
    const [user, setUser] = useState('');
    const [passWord, setPassWord] = useState('');


    //handels the enter button validation
    // change to switch!!!!
    const setTheLink = () => {

        if (user === 'admin' && passWord === 'admin') {
            return <Link to={'/admin'}><Button variant="success" className="loginButtonsStyle">Enter</Button></Link>
        }
        else if (!props.pickClientName(user)) {
            return <Button variant="success" className="loginButtonsStyle" onClick={() => { alert('User not found!') }}>Enter</Button>
        }
        else if (!props.pickClientPassword(passWord)) {
            return <Button variant="success" className="loginButtonsStyle" onClick={() => { alert('Password Incorrect!') }}>Enter</Button>
        }
        else if (props.pickClientName(user) && props.pickClientPassword(passWord)) {
            return <Link to={`/${user}`}><Button variant="success" className="loginButtonsStyle">Enter</Button></Link>
        }
        else { return <Button variant="success" className="loginButtonsStyle" onClick={() => { alert('User not found!') }}>Enter</Button> }

    }



    //---------------------------------------
    return (
        <div className="container">

            <div className="loginHeader">

                <h1 className="headers">Expenses App</h1>

            </div>

            <div className="loginBody">

                <div className="instructionsDiv">

                <p className="instructionsP">user name: "nir reich", password:"111111" for user page</p>
                <p className="instructionsP">user name: "admin", password:"admin" for manager page</p>
                </div>
                
                <div className="loginInpDiv">

                    <label>
                        User Name
                        <input type="text" placeholder="user name" className="loginInputs" onChange={(e) => { setUser(e.target.value) }} />
                    </label>

                    <br />

                    <label>
                        Password
                        <input type="Password" placeholder="password" className="loginInputs" onChange={(e) => { setPassWord(e.target.value) }} />
                    </label>

                </div>

                {setTheLink()}
                <br/>
                <br/>
                <p >New in here?</p>
                <Link to={'/register'}><Button variant="primary" className="loginButtonsStyle">Create New User</Button></Link>
                

            </div>


        </div>
    )
}
