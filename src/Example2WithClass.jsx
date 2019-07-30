import React from 'react'

class Example2WithClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  updateDocumentTitle() {
    document.title = `You have clicked ${this.state.count} times`
  }

  componentDidMount() {
    this.updateDocumentTitle()
  }

  componentDidUpdate() {
    this.updateDocumentTitle()
  }

  handleClick(event) {
    event.preventDefault()
    this.setState(state => ({count: state.count + 1}))
  }

  render() {
    return (
      <div>
        <h1>Example2WithClass</h1>
        <p>You have clicked me {this.state.count} times. See the document title too!</p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default Example2WithClass