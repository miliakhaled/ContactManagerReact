import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from './Contex';

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { deleteContact } = value;
          const { contacts } = value;

          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} onDelete={value.deleteContact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
