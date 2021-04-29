import React, { useState, useContext } from 'react'
import Client from './Client';
import { clientsContext } from '../App';
import Button from 'react-bootstrap/Button'


export default function LoanCard(props) {

    //clients context from app js comp
    let context = useContext(clientsContext);

    const newList = context.clients.filter(element => element.id != context.clients[props.userIndex].id)
    const [userList, setUserList] = useState(newList);
    const [selectedUser, setSelectedUser] = useState('');
    const [loanAmount, setloanAmount] = useState('');
    const [warningMsg, setWarningMsg] = useState('');
    const [confBtn, setConfBtn] = useState(true);


    const handelSelectedClient = (e) => {
        setSelectedUser(e.target.value)

    }

    const amountHandler = (e) => {
        if (isNaN(e.target.value)) {
            setWarningMsg('Amount must be a number!')
        }
        else if (e.target.value <= 0) {
            setWarningMsg('Amount must be greater then 0!')
        }
        else {
            setWarningMsg('')
            setConfBtn(false)
            setloanAmount(e.target.value)
        }

    }

    const confirmLoan = () => {

        if (isNaN(loanAmount)) {

        }
        else if (loanAmount <= 0) {
            alert('Amount must be greater then 0!')
        }
        else {

            for (let index = 0; index < context.clients.length; index++) {
                if (context.clients[index].id === selectedUser) {
                    debugger
                    //plus money to selected user
                    context.editClient(
                        context.clients[index].id,
                        context.clients[index].name,
                        context.clients[index].password,
                        (context.clients[index].money + loanAmount),
                        index
                    )
                    //minus money to user
                    context.editClient(
                        context.clients[props.userIndex].id,
                        context.clients[props.userIndex].name,
                        context.clients[props.userIndex].password,
                        (context.clients[props.userIndex].money - loanAmount),
                        props.userIndex
                    )
                    alert(`loan of ${loanAmount} is confirmed!`)
                    setloanAmount('')
                    setConfBtn(!confBtn)
                }

            }



        }
    }



    const showLoanDetails = () => {
        if (selectedUser) {
            return (
                <form>
                    <div>
                        <label htmlFor="loanAmount">
                            Set loan amount:
                    </label>
                        <input type="number" placeholder="Amount" onChange={amountHandler} />
                        <h6 className="amountWarning">{warningMsg}</h6>
                    </div>
                    
                </form>
            )
        }
    }

    const handelCancelLoan=()=>{
        setSelectedUser('')
        setloanAmount('')
        props.handelLoanFlag()
    }


    //-------------------------------------------------------------------------
    return (
        <div className="actionComp">

            <h4 className="headers">Creat New Loan</h4>
            <div>
                <label htmlFor="users">Pick user for your loan:</label>

                <select id="users" name="users" size="1" value={selectedUser} onChange={handelSelectedClient}>
                    <option value=''></option>
                    {userList.map((element, index) => {
                        return (
                            <option value={element.id}>{element.name}</option>
                        )
                    })}

                </select>
                {showLoanDetails()}
                <div>
                        <Button onClick={() => confirmLoan()} disabled={confBtn}>Confirm</Button>
                        <Button variant="danger" onClick={() => handelCancelLoan()} >Cancle</Button>
                </div>
            </div>
        </div>
    )
}
