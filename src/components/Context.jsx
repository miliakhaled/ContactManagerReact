import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(c => c.id !== action.payload),
      };
    case 'ADD_CONTACT': {
      action.payload.id = state.contacts.length + 1;
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    default:
      return state;
  }
};
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
    ],
    dispatch: action => this.setState(state => reducer(state, action)),
  };

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

export const { Consumer } = Context;
