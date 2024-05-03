import React, { ChangeEvent, Component } from "react";

type State = {
  ch: string;
  t: string[];
};

export default class List extends Component<any, State> {
  state = {
    ch: "",
    t: [],
  };

  componentDidMount() {
    const savedTexts = localStorage.getItem("texts");
    if (savedTexts) {
      this.setState({ t: JSON.parse(savedTexts) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("texts", JSON.stringify(this.state.t));
  }

  chan = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ch: e.target.value });
  };

  newEle = () => {
    this.setState((prevState) => ({
      t: [...prevState.t, prevState.ch],
      ch: "",
    }));
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.ch}
          placeholder="Enter text here"
          onChange={this.chan}
        />
        <button onClick={this.newEle}>Submit</button>
        <div>{this.state.ch}</div>
        <ul>
          {this.state.t.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}