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

  componentDidMount() {
    /* let contact = this.props.match.params.contact.split(','); */
    const { id } = this.props.match.params;

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
      const contact = {
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
      };
      this.setState(contact);
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (e, dispatch) => {
    e.preventDefault();
    // addContact(dispatch(state));
    // const { id, name, phone, email } = this.state;

    const newContact = { ...this.state };
    axios.put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, newContact).then(res => {
      dispatch({
        type: 'MODIFY_CONTACT',
        payload: res.data,
      });
    });
    // const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);

    this.props.history.push('/'); // redirecting to '/'
  };

  render() {
    // this parameters are recuperated from Link component as a string

    // contact = contact.splite(':');
    const { id, name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Modify Contact</div>
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
