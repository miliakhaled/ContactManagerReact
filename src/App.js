import React, { Component } from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/addContact';
import ModifyContact from './components/contacts/modifyContact';
import Header from './components/layouts/Header';
import { Provider } from './components/Context';
import About from './components/pages/about';
import Page404 from './components/pages/notfound';
import Test from './components/pages/test';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contact/modify/:id" component={ModifyContact} />

                <Route component={Page404} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
