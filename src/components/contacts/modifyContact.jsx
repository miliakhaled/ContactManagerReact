import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../Context';
import InputTextGroup from '../layouts/textInputGroup';

export default class modifyContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  // onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (e, dispatch, newContact) => {
    e.preventDefault();
    console.log(newContact);
    // addContact(dispatch(state));
    const { name, phone, email } = this.state;

    // const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);
    dispatch({
      type: 'MODIFY_CONTACT',
      payload: newContact,
    });
    this.props.history.push('/'); // redirecting to '/'
  };

  render() {
    // this parameters are recuperated from Link component as a string
    let contact = this.props.match.params.contact.split(',');
    contact = {
      id: contact[0],
      name: contact[1],
      email: contact[2],
      phone: contact[3],
    };
    // contact = contact.splite(':');
    const { id, name, email, phone } = contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Modify Contact</div>
              <div className="card-body">
                <form onSubmit={e => this.onSubmit(e, dispatch, contact)}>
                  <InputTextGroup label="name" value={name} placeholder="Enter Name..." />
                  <InputTextGroup label="email" type="email" value={email} placeholder="Enter Email..." />
                  <InputTextGroup label="phone" value={phone} placeholder="Enter Phone..." />
                  <input className="btn btn-light btn-block" type="submit" value="Update contact" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
