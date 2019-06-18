import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {Container, } from 'semantic-ui-react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import About from './components/About';
import Register from './components/Register';
import FetchUser from './components/FetchUser';


const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route  exact path="/login" component={Login}/>
          <Route  exact path="/about" component={About}/>
          <Route  exact path="/register" component={Register}/>
          <Route  component={NoMatch}/>
        </Switch>
      </Container>
      </FetchUser>



  </>
)

export default App;
