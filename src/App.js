import React from 'react';
import './App.scss';
import Home from './components/Home';
import FormAddTodo from './containers/FormAddTodo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addtodo" component={FormAddTodo} />

      </Switch>
    </Router>
  );
}

export default App;
