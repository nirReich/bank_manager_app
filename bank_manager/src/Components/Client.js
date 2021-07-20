import React, { useState, useContext } from 'react'
import Action from './Action';
import BalanceCard from './BalanceCard';
import LoanCard from './LoanCard';
import BalanceWarning from './BalanceWarning';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


//-------------------------------------------------------------------
//propsname=props.user,index
export default function Client(props) {
    
    const [flag, setFlag] = useState(false);
    const [loanFlag, setLoanFlag] = useState(false);
    
   

    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const hour = dateObj.getUTCHours();
    const minuts = dateObj.getUTCMinutes();
    const newdate = day + "/" + month + "/" + year;
    const newdateTime =hour +":"+ minuts + "  " + day + "/" + month + "/" + year;




    const handelFlag=()=>{
        setFlag(!flag)
    }

    const handelLoanFlag=()=>{
        setLoanFlag(!loanFlag)
    }

    let showAction = () => {
        if (flag) {

            if (props.user.money <= 0) {
                return <BalanceWarning balance={props.user.money} cancle={handelFlag}/>
            }
            else {            
                return <Action addAction={props.addAction} index={props.index} user={props.user} cancle={handelFlag}/>
            }
            
        }
    }

    let showLoan = () => {
        if (loanFlag) {

            if (props.user.money <= 0) {
                return <BalanceWarning balance={props.user.money} cancle={handelLoanFlag}/>
            }
            else {            
                return <LoanCard userIndex = {props.index} handelLoanFlag={handelLoanFlag}/>
            }
            
        }
    }

    //----------------------------------------------- 
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/home" className="navBar">
                <Nav.Item>
                    <Link to={'/'}><Button variant="danger" className="exitBtn">Exit</Button></Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link ><Link to={'/edit'} onClick={() => { return props.passClientToEdit(props.index) }}>Edit Profile</Link></Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link ><Link to={`/${props.user.name}_transactions`}>Transactions</Link></Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="clientHeader">
            <div className="dateDiv">{newdate}</div>
            <h1 className="headers"> Welcom {props.user.name}</h1>
            </div>
          
            <BalanceCard balance={props.user.money} name={props.user.name} id={props.user.id} />
            <Button className="transBtn" variant="success" onClick={() => { handelFlag() }}> Create new transaction</Button>
            <Button className="transBtn loanBtn"  onClick={() => { handelLoanFlag() }}> Create new loan</Button>

            {showAction()}
            {showLoan()}
            

        </div>
    )
}
