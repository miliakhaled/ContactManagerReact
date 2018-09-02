import React, { Component } from 'react';

export default class addContact extends Component {
  static defaultProps = {
    name: 'Milia Khaled',
    email: 'miliakhlaed@gmail.com',
    phone: '0792894215',
  };

  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };

  render() {
    const { name, email, phone } = this.props;
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
                name={name}
                defaultValue={name}
                placeholder="Enter Name..."
                ref={this.nameInput}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control form-control-lg"
                type="text"
                name="email"
                defaultValue={email}
                placeholder="Enter email address..."
                ref={this.emailInput}
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
                defaultValue={phone}
                ref={this.phoneInput}
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
