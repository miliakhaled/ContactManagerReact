import React, { Component } from 'react';

export default class test extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {}
  /*
     componentWillMount() {
        console.log('component will mounted');
      }
      static componentWillReceiveProps(nextProps, nextState) {
        console.log('component will receive props');
        console.log(nextProps);
        console.log(nextState);
      }
    
      componentWillUpdate() {
        console.log('component will update');
      }
    
      componentDidUpdate() {
        console.log('component did update');
      }
      */

  increment = () => {
    this.setState(oldState => ({ count: oldState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>This page for testing life cycle</h1>
        <span className="lead text-warning p-4">{this.state.count}</span>
        <button className="btn btn-dark" onClick={this.increment}>
          increment
        </button>
        <h4>
          props:
          {this.props.match.params.id}
        </h4>
      </div>
    );
  }
}
