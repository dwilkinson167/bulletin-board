import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

var Board = React.createClass({
  propTypes: {
    count: function (props, propName) {
      if (typeof props[propName] !== 'number') {
        return new Error('the count must be a number')
      }

      if (props[propName] > 100) {
        return new Error('Creating ' + props[propName] + ' notes is ridiculous')
      }

    }

  },
  getInitialState () {
    return {
      notes: []
    }
  },
  ComponentWillMount () {
    if (this.props.count) {
      var url = `http://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`
      fetch(url)
        .then(results => results.json())
        .then(array => array[0])
        .then(text => text.split('. '))
        .then(array => array.forEach(
          sentence => this.add(sentence)))
        .catch(function (err) {
          console.log('Did not connect to the API', err)
        })
    }
  },
  nextId () {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  },
  add (text) {
    var notes = [
      ...this.state.notes,
      {
        id: this.nextId(),
        note: text
      }
    ]
    this.setState({notes})
  },
  update(newText, id) {
    var notes = this.state.notes.map(
      note => (note.id !== id) ?
        note :
        {
          ...note,
          note: newText
        }
    )
    this.setState({notes})
  },
  

}





