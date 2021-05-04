import React, { useState } from 'react'
import { Link } from "react-router-dom";
import BalanceChangeBox from './BalanceChangeBox';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import balanceCard from './BalanceCard';



export default function Manager(props) {

    const [flag, setFlag] = useState(1)

    const [showBalance, setShowBalance] = useState({
        balanceFlag: false,
        index: '',
        balance: ''
    })

    const balanceChangeHandler = (clientIndex) => {
        showBalance.balanceFlag = !showBalance.balanceFlag
        showBalance.index = clientIndex
        showBalance.balance = props.clients[clientIndex].name
        setShowBalance({ ...showBalance })
    }

    const cancleBalanceChange = () => {
        showBalance.balanceFlag = !showBalance.balanceFlag
        setShowBalance({ ...showBalance })
    }

    const showBalanceChange = () => {
        if (showBalance.balanceFlag) {
            return <BalanceChangeBox cancleBalanceChange={cancleBalanceChange} name={props.clients[showBalance.index].name} index={showBalance.index} balance={props.clients[showBalance.index].money} balanceChangeFunc={props.balanceChangeFunc} />
        }
    }

    const premissionBtn = (index) => {
        if (props.clients[index].premission) {
            return "success"
        }
        return "danger"
    }


    //---------------------------------------------------------------
    return (
        <div className="container">
            <div className="adminHeader">
                <h1 className="headers">Admin Page</h1>
            </div>

            {props.clients.map((element, clientIndex) => {
                return <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <h4 > {element.name}</h4>
                            <h5 > {element.id}</h5>
                            <div className="balanceFrameManeger">
                                <h3>{element.money}</h3>
                            </div>


                            <Accordion.Toggle as={Button} variant="link" eventKey={flag}>
                                <Button variant="primary inAppButtons">Show</Button>
                            </Accordion.Toggle>
                            <br />
                            <Button variant="danger inAppButtons" onClick={() => { balanceChangeHandler(clientIndex) }}>Balance Cange</Button>
                        </Card.Header>
                        <Accordion.Collapse eventKey={flag}>
                            <Card.Body>

                                {element.actions.map((e, actionIndex) => {
                                    return (

                                        <div className="row mb-1">
                                            <div className="col-1"></div>
                                            <div className="col-5">{e.company}</div>
                                            <div className="col-4">{e.amount}</div>
                                            <div className="col-1"></div>
                                            <div className="col-1"><Button variant="danger" onClick={() => { props.removeAction(clientIndex, actionIndex) }}> X </Button></div>
                                        </div>
                                    )
                                })}
                                <div className="row">
                                    <div>
                                    <Button variant="danger" className="cancelBtn" onClick={() => { props.removeClient(clientIndex) }}>Erase {element.name}</Button>

                                    </div>
                                    <div>

                                    <Button variant={premissionBtn(clientIndex)} className="premissionBtn" onClick={() => { props.changePremission(clientIndex) }}>Premission</Button>
                                    </div>
                                    
                                </div>

                            </Card.Body>

                        </Accordion.Collapse>

                    </Card>
                </Accordion>
            })}

            <br />

            <Link to={'/'}>  <Button variant="primary" className="inAppButtons">Exit</Button></Link>

            {showBalanceChange()}
        </div>
    )
}

