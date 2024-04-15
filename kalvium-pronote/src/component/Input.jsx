import { Component } from 'react'

export class input extends Component {
  render() {
    return (
        <div id='input'>

        <input type="text" placeholder='Enter Text' value={this.props.inputValue} onChange={(e)=>this.props.handleChange(e.target.value)} />
        <button onClick={this.props.handleSubmit}>Create</button>

      </div>
    )
  }
}

export default input
