import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var Board = React.createClass({
  propTypes: {
    count: function (props, propName) {
      if(typeof props[propName] !== "number") {
        return new Error("the count must be a number")
      }

      if(props[propName] > 100) {
        return new Error('Creating ' + props[propName] + ' notes is ridiculous')
      }
      
    }

  },
  getInitialState() {
    return {
      notes: []
    }
  },
  ComponentWillMount() {
    if(this.props.count) {
      
    }
  }


})

export default App;
