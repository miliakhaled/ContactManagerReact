import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/addContact';
import Header from './components/layouts/Header';
import { Provider } from './components/Context';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContact />

          <Contacts />
        </div>
      </Provider>
    );
  }
}
