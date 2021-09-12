import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from './redux/store'
import UserRouter from "./pages/user/index";
import AuthRouter from "./pages/auth/index";

const store = configureStore()

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                  <Route path='/user' component={UserRouter}/>
                  <Route path='/' component={AuthRouter}/>
              </Switch>
          </BrowserRouter>
      </Provider>
  );
}

export default App;
