import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import '../index.css';
import axios from 'axios';
import { Consumer } from '../Context';

export default class Constact extends Component {
  state = {
    showContact: false,
  };

  static propTypes = {
    contact: PropTypes.object.isRequired,
  };

  showInfo = () => {
    const { showContact } = this.state;
    this.setState({ showContact: !showContact });
  };

  formatArrow = () => {
    const { showContact } = this.state;
    const arrowStyle = showContact ? 'down' : 'up';
    return `p-1 fa fa-xs text-secondary  fa-sort-${arrowStyle}`;
  };

  onDeleteClick = (id, dispatch) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
      console.log(res);
    });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContact } = this.state;
    return (
      <Consumer>
        {value => (
          <div className="card card-body shadow mb-3 bg-light " onClick={this.showInfo}>
            <h5 className="text-secondary">
              {name}
              <i className={this.formatArrow()} onClick={this.showInfo} />

              <i
                className="fas fa-times text-danger float-right"
                onClick={this.onDeleteClick.bind(this, id, value.dispatch)}
              />
              <i
                className="fas fa-user-edit mr-3 text-secondary float-right"
                onClick={this.onDeleteClick.bind(this, id, value.dispatch)}
              />
            </h5>
            {showContact ? (
              <ul className="list-group animation">
                <li className="list-group-item">
                  email:
                  {email}
                </li>
                <li className="list-group-item">phone: {phone} </li>
              </ul>
            ) : null}
          </div>
        )}
      </Consumer>
    );
  }
}
