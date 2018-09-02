import React, { Component } from 'react';
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
    console.log('default');
    let state = [...this.state];
    state = {
      type: 'ADD_CONTACT',
      payload: state,
    };
    // addContact(dispatch(state));
    dispatch({ type: 'ADD_CONTACT', payload: this.state });
  };

  addContact = dispatch => {
    const state = [...this.state];
    console.print(state);
    dispatch({
      type: 'ADD_CONTACT',
      payload: state,
    });
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
                      className="form-control form-control-lg"
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
                      className="form-control form-control-lg"
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
                      className="form-control form-control-lg"
                      type="text"
                      name="phone"
                      placeholder="Enter phone number..."
                      value={phone}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <input className="btn btn-primary btn-block" type="submit" value="Add Contact" />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
