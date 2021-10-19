import './App.css';
import Navbar from './Components/navbar';
import React from 'react';
import Tutorials from './Components/tutorials';
import AddTutorials from './Components/add';
import EditTutorials from './Components/edit';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { GlobalProvider } from './Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/tutorials" component={Tutorials}/>
        <Route path="/add" component={AddTutorials}/>
        <Route path="/edit" component={EditTutorials}/>
        <Tutorials/>
      </Switch>
    </Router>
    </GlobalProvider>
  );
}

export default App;
