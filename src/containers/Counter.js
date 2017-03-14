import { connect } from 'react-redux'

import CounterComponent from '../components/CounterComponent'

// Container defines how state mapped to component

const mapStateToProps = (state, ownProps) => ({
    value: state.value
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onIncrement: ()=> {dispatch({type: 'INCREMENT'})},
    onDecrement: ()=> {dispatch({type: 'DECREMENT'})},
    onIncrementOdd: value => {
      value % 2 !== 0 && dispatch({type: 'INCREMENT'})
    },
    onIncrementAsync:()=> {
      setTimeout(()=>{dispatch({type: 'INCREMENT'})}, 1000) 
    }
})

const Counter = connect(mapStateToProps,mapDispatchToProps)(CounterComponent)

export default Counter