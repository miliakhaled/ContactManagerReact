import React, { Component } from 'react';

export default class addContact extends Component {
  state = {
    name: 'khaled',
    email: 'email',
    phone: 'phone',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
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
  }
}
