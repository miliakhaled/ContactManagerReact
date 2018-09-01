import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import { Provider } from './components/Contex';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </Provider>
    );
  }
}
