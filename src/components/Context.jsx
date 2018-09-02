import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(c => c.id !== action.payload),
      };
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
      {
        id: 3,
        name: 'Milia Khaled',
        email: ' miliakhaled@gmail.com',
        phone: ' 888888888',
      },
    ],
    dispatch: action => this.setState(state => reducer(state, action)),
  };

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

export const { Consumer } = Context;
