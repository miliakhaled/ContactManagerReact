import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import '../index.css';

export default class Constact extends Component {
  state = {
    showContact: true,
  };

  static propTypes = {
    contact: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  showInfo = () => {
    const { showContact } = this.state;
    this.setState({ showContact: !showContact });
  };

  formatArrow = () => {
    const { showContact } = this.state;
    const arrowStyle = showContact ? 'down' : 'up';
    return ` fa fa-xs text-secondary  fa-sort-${arrowStyle}`;
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContact } = this.state;
    return (
      <div className="card card-body shadow mb-3 ">
        <h4>
          {name}
          <i className={this.formatArrow()} onClick={this.showInfo} />
          <i className="fas fa-times-circle text-danger float-right" onClick={() => this.props.onDelete(id)} />
        </h4>
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
    );
  }
}
