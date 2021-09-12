import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from './redux/store'
import {UserRouter} from './pages/user'
import {AuthRouter} from './pages/auth'

const store = configureStore()

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component = {authPages}/>
            <Route path='/user' component={userPages}/>
          </Switch>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
