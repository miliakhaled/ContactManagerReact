import React, { Component } from 'react';

export default class addContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  };

  changeState = (variable, value) => {
    let newState = {};
    switch (variable) {
      case 'name':
        newState = {
          ...this.state,
          name: value,
        };
        break;
      case 'email':
        newState = {
          ...this.state,
          email: value,
        };
        break;
      case 'phone':
        newState = {
          ...this.state,
          phone: value,
        };
        break;
    }
    this.setState(newState);
  };

  onChangeHandler = (event, variable) => {
    const { value } = event.target;
    this.changeState(variable, value);
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control form-control-lg"
                type="text"
                name="name"
                value={name}
                placeholder="Enter Name..."
                required
                onChange={event => this.onChangeHandler(event, 'name')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control form-control-lg"
                type="text"
                name="email"
                value={email}
                onChange={event => this.onChangeHandler(event, 'email')}
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
                onChange={event => this.onChangeHandler(event, 'phone')}
                required
              />
            </div>
            <input className="btn btn-primary btn-block" type="submit" value="Add Contact" />
          </form>
        </div>
      </div>
    );
  }
}
