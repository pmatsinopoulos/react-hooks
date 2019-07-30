import React from 'react'

class ExampleWithClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times (ExampleWithClass)</p>
        <button onClick={() => this.setState(state => ({count: state.count + 1}))}>Click Me</button>
      </div>
    )
  }
}

export default ExampleWithClass