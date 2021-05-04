import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Client from './Components/Client';
import Login from './Components/Login';
import Register from './Components/Register';
import Manager from './Components/Manager';
import Editregister from './Components/Editregister';
import Transactions from './Components/Transactions';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const clientsContext = React.createContext();

//-----------------------------------------------------------------------------------------------------------
export default function App() {
  //hooks
  const [clients, setClients] = useState([
    { 
    id: '123456789',
    name: 'rick sanchez',
    password: '111111',
    money: '10000',
    premission: false,
    actions: [{ company: 'shufersal', amount: '500' }, { company: 'sonol', amount: '250' }] 
  },
    { 
    id: '987654321',
    name: 'johnny amir',
    password: '222222',
    money: '20000',
    premission: true,
    actions: [{ company: 'pazgas', amount: '150' }, { company: 'castro', amount: '400' },]
  }
  ])
  const [clientEdit, setClientEdit] = useState({ client: '', index: '' });

  //methods
  const addClient = (newClient) => {//add new client. from register comp
    setClients([...clients, { ...newClient }])
  }

  const addAction = (comp, amount, index) => {//adds new action. from client comp
    clients[index].actions.push({ company: comp, amount: amount })
    clients[index].money = clients[index].money - amount
    console.log(clients[index].money);
    setClients([...clients]);
  }



//pick the spc client from clients for the login page
  const pickClientName = (user) => {
    for (let i = 0; i < clients.length; i++) {

      if (clients[i].name === user ) {
        return true;
      }
    }
    return false;
  }
  const pickClientPassword = (password)=>{
    for (let i = 0; i < clients.length; i++) {
      if (clients[i].password === password) {
        
        return true;
      }
    }
    return false;
  }

  const showActions = (i) => {//show action list on manager page

    return clients[i].actions.map((e) => { return e.company })
  }

  const passClientToEdit = (i) => {//pick spc client to edit

    setClientEdit({ client: clients[i], index: i });
  }

  const editClient = (id, name, password, money, index) => {// edit the client changes sent from edit page

    clients[index].id = id
    clients[index].name = name
    clients[index].password = password
    clients[index].money = money
    setClients([...clients])
  }

  const removeAction = (clientIndex, actionIndex) => {//remove the actions from theclient list. from manager page
    clients[clientIndex].actions.splice(actionIndex, 1)
    setClients([...clients]);
  }

  const removeClient = (index) => {// remove client from clients list. from manager page.

    clients.splice(index, 1)
    setClients([...clients]);
  }

  const balanceChangeFunc= (balance,index)=>{
    if (!isNaN(balance) && balance != '') {
      clients[index].money = balance
      setClients([...clients])

    }
  }

  const changePremission =(index)=> {
    clients[index].premission = !clients[index].premission
    setClients()
    setClients([...clients]);
  }


  //------------------------------------------------------------------------------
  return (
    <div className="App">
      <clientsContext.Provider value={{clients:clients, editClient:editClient}}>
      <Router>

        <Switch>
          <Route exact path={'/'} component={() => { return <Login clients={clients} pickClientName={pickClientName} pickClientPassword={pickClientPassword} /> }} />

          {clients.map((e, i) => { return <Route exact path={`/${e.name}`} component={() => { return   <Client addAction={addAction} user={clients[i]} index={i} passClientToEdit={passClientToEdit} clients={clients} /> }} /> })}
          {clients.map((e, i) => { return <Route exact path={`/${e.name}_transactions`} component={() => { return <Transactions clients={clients[i]} /> }} /> })}
          <Route exact path={'/register'} component={() => { return <Register addClient={addClient} /> }} />
          <Route exact path={'/edit'} component={() => { return <Editregister editClient={editClient} clientEdit={clientEdit} addClient={addClient} /> }} />
          <Route exact path={'/admin'} component={() => { return <Manager changePremission={changePremission} balanceChangeFunc={balanceChangeFunc} removeClient={removeClient} removeAction={removeAction} clients={clients} showActions={showActions} /> }} />

        </Switch>
      </Router>
      <Footer/>
      </clientsContext.Provider>
    </div>
  )
}