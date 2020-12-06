import React from 'react';
import Home from './pages/Home';
import FormAddTodo from './containers/FormAddTodo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./assets/styles/style.scss"


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
