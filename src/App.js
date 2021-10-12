import './App.css';
import Navbar from './Components/navbar';
import React from 'react';
import Tutorials from './Components/tutorials';
import AddTutorials from './Components/add';
import EditTutorials from './Components/edit';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route path="/tutorials" component={Tutorials}/>
        <Route path="/add" component={AddTutorials}/>
        <Route path="/edit" component={EditTutorials}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
