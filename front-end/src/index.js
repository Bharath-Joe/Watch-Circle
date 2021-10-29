
import React from 'react'
import ReactDOM from 'react-dom'
import MyApp from './MyApp'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css'

import Page2 from "./CreateAccount";
import Page1 from "./LogIn";

const rootElement = document.getElementById("root");
ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/createAccount" component={Page2} />
      </Switch>
      </BrowserRouter>,
      rootElement
);

//ReactDOM.render(<MyApp />, document.getElementById('root'));