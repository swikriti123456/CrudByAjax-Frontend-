import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import ListPerson from './person/ListPerson';
import AddPerson from './person/AddPerson';
import EditPerson from './person/EditPerson';
import Home from './Home';
import NavBar from './Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
function App() {
  return (
        <div className="container">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/list" component={ListPerson}></Route>
            <Route exact path="/add" component={AddPerson}></Route>
            <Route  path="/edit/:id" component={EditPerson}></Route>
          </Switch>

        </div>
      );
}

export default App;

