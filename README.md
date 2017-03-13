
## Function as props

```js
// App.js
class App extends Component {

  constructor(props) {
    super(props)

    // Init state in constructor
    this.state = { countValue: 7 }

    // Bind functions to class
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  /******************** Class method **************/
  increment() {
    this.setState({countValue: this.state.countValue + 1})
  }

  decrement() {
    this.setState({countValue: this.state.countValue - 1})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

                  {/*pass functions as props*/}
        <Counter 
          value={this.state.countValue}
          onIncrement={this.increment}
          onDecrement={this.decrement} />
      </div>
    );
  }
}

export default App;

```

Use functions are props

```js
// ./components/Counter.js
class Counter extends Component {

  // Declare props types
  static propTypes = {
    value: PropTypes.number.isRequired,

    // Require function types
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired    
  }

  constructor(props) {
    super(props)
    this.incrementOdd = this.incrementOdd.bind(this)
    this.incrementAsync = this.incrementAsync.bind(this)
  }

  // Add local functions
  incrementOdd() {
    this.props.value % 2 !== 0 && this.props.onIncrement()
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }
  
  render() {
    // Get value from component's props
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}> + </button>
        {' '}
        <button onClick={onDecrement}> - </button>
        {' '}
        <button onClick={this.incrementOdd}> Increment if odd </button>
        {' '}
        <button onClick={this.incrementAsync}> Increment async </button>
      </p>
    )
  }
}

export default Counter

```
