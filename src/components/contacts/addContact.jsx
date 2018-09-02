import React, { Component } from 'react';
import uuid from 'uuid';
import { Consumer } from '../Context';

export default class addContact extends Component {
  state = {
    name: 'Milia Khaled',
    email: 'khaledmilia@live.fr',
    phone: '0777998844',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e, dispatch) => {
    e.preventDefault();
    // addContact(dispatch(state));
    const { name, phone, email } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };
    dispatch({
      type: 'ADD_CONTACT',
      payload: newContact,
    });
    this.setState({ name: '', email: '', phone: '' });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={e => this.onSubmit(e, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      className="form-control "
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Enter Name..."
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      className="form-control "
                      type="text"
                      name="email"
                      value={email}
                      onChange={this.onChange}
                      placeholder="Enter email address..."
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      className="form-control "
                      type="text"
                      name="phone"
                      placeholder="Enter phone number..."
                      value={phone}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <input className="btn btn-light btn-block" type="submit" value="Add Contact" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
