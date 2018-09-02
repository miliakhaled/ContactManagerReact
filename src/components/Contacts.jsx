import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from './Context';

export default class Contacts extends Component {
  evaluate = state => ({
    ...state.contacts.filter(c => c.id === 2),
  });

  render() {
    return (
      <Consumer>
        {value => {
          const { deleteContact } = value;
          const { contacts } = value;
          console.log(this.evaluate(value));
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
