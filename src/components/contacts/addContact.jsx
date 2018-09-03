import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../Context';
import InputTextGroup from '../layouts/textInputGroup';

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
      name,
      email,
      phone,
    };
    axios.post('https://jsonplaceholder.typicode.com/users', newContact).then(res =>
      dispatch({
        type: 'ADD_CONTACT',
        payload: res.data,
      })
    );

    this.props.history.push('/');
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
                  <InputTextGroup label="name" value={name} placeholder="Enter Name..." onChange={this.onChange} />
                  <InputTextGroup
                    label="email"
                    type="email"
                    value={email}
                    placeholder="Enter Email..."
                    onChange={this.onChange}
                  />
                  <InputTextGroup label="phone" value={phone} placeholder="Enter Phone..." onChange={this.onChange} />
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
