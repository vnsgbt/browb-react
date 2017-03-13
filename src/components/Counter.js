import React, { Component } from 'react'

class Counter extends Component {

  render() {
    return (
      <p>
        Clicked: times
        {' '}
        <button> + </button>
        {' '}
        <button> - </button>
        {' '}
        <button> Increment if odd </button>
        {' '}
        <button> Increment async </button>
      </p>
    )
  }
}

export default Counter