import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Milia Khaled',
        email: ' miliakhaled@gmail.com',
        phone: ' 07777777777',
      },
      {
        id: 2,
        name: 'Hamimed wassim',
        email: ' wassimhamimed@gmail.com',
        phone: ' 05555555555',
      },
      {
        id: 3,
        name: 'Milia Khaled',
        email: ' miliakhaled@gmail.com',
        phone: ' 888888888',
      },
    ],
    deleteContact: id => {
      const { contacts } = this.state;
      const newContacts = contacts.filter(c => c.id !== id);
      this.setState({ contacts: newContacts });
    },
  };

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

export const { Consumer } = Context;
