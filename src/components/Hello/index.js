import React, { Component } from "react";
import { DumbHello } from './DumbHello';

export class Hello extends Component {
DumbHello
  constructor(props) {
    super(props);
    this.state = {
      who: props.who,
    };
    this.onWhoChange = this.onWhoChange.bind(this);
  }

  onWhoChange(e) {
    e.preventDefault();
    const who = e.target.value;
    this.setState((prevState, props) => ({
        who,
    }));
  }

  render() {
    const { who } = this.state;
    return (
      <DumbHello who={who} onWhoChange={this.onWhoChange}/>   
    );
  }
}
