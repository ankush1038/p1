import React, { Component } from 'react'
type State = {
    ch: String
    counter: number
}
class TextChange extends Component<any,State> {
     state = {counter : 0 , ch : ""}
     change = (e: any) => {
        this.setState({ ch: e.target.value } )
        console.log(this.state);
        
     }

  render() {
    return (
      <div>
        <input type = "text" placeholder='Enter Text' onChange={this.change}></input>
        <div>{this.state.ch}</div>
      </div>
    )
  }
}

export default TextChange
