import React from 'react';
import './App.css';
import './pages/Main.css';
import Create from './pages/Create';
import Read from './pages/Read';
import Edit from './pages/Edit';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Setting from './pages/Setting';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />     
    <Route exact path="/read"  component={Read} />  
    <Route exact path="/create"  component={Create} /> 
    <Route exact path="/edit/:id"  component={Edit} />
    <Route exact path="/setting"  component={Setting} />   
    </Switch>
    </> 
  );
}
export default App;
