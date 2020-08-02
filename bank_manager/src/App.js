import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Client from './Components/Client';
import Login from './Components/Login'
import Register from './Components/Register';
import Manager from './Components/Manager'
import Editregister from './Components/Editregister'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function App() {
//hooks
  const [clients, setClients] = useState([
    { id: '123456789', name: 'nir reich', password: '111111', money: '10000', actions: [{ company: 'shufersal', amount: '500' }, { company: 'sonol', amount: '250' }] },
    { id: '987654321', name: 'johnny amir', password: '222222', money: '20000', actions: [{ company: 'pazgas', amount: '150' }, { company: 'castro', amount: '400' },] }
  ])
  const [clientEdit, setClientEdit] = useState({ client: '', index: '' });

//methods
  const addClient = (newClient) => {//add new client. from register comp
    setClients([...clients, { ...newClient }])
  }

  const addAction = (comp, amount, index) => {//adds new action. from client comp
    clients[index].actions.push({ company: comp, amount: amount })
    setClients([...clients]);

  }

  const pickClient = (user, password) => {//pick the spc client from clients for the login page
    for (let i = 0; i < clients.length; i++) {

      if (clients[i].name === user && clients[i].password === password) {
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


  //------------------------------------------------------------------------------
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path={'/'} component={() => { return <Login clients={clients} pickClient={pickClient} /> }} />

          {clients.map((e, i) => { return <Route exact path={`/${e.name}`} component={() => { return <Client addAction={addAction} user={clients[i]} index={i} passClientToEdit={passClientToEdit} /> }} /> })}

          <Route exact path={'/register'} component={() => { return <Register addClient={addClient} /> }} />
          <Route exact path={'/edit'} component={() => { return <Editregister editClient={editClient} clientEdit={clientEdit} addClient={addClient} /> }} />
          <Route exact path={'/admin'} component={() => { return <Manager removeClient={removeClient} removeAction={removeAction} clients={clients} showActions={showActions} /> }} />

        </Switch>
      </Router>

    </div>
  )
}