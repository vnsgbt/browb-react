
import React, { PropTypes } from 'react'

// Stateless component
const CounterComponent = ({ value, onIncrement, onDecrement, onIncrementOdd, onIncrementAsync }) => {
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}> + </button>
        {' '}
        <button onClick={onDecrement}> - </button>
        {' '}
        <button onClick={()=>onIncrementOdd(value)}> Increment if odd </button>
        {' '}
        <button onClick={()=>onIncrementAsync()}> Increment async </button>
      </p>
    )
}

// Still have propTypes
CounterComponent.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,  
    onIncrementOdd: PropTypes.func.isRequired,  
    onIncrementAsync: PropTypes.func.isRequired  
}

export default CounterComponent
