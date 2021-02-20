import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout/index';
import LoginLayout from './layout/LoginLayout/index';
import { ContextProvider } from './appReducer';

import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './assets/style/base.less';
function App(): JSX.Element {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginLayout />
          </Route>
          <Route path="/">
            <BasicLayout />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
