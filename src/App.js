import React, { Component } from "react";
import Menu from "./Menu";
import Body from "./Body";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemMenu: 0,
    };

    this.handleItemMenuClicked = this.handleItemMenuClicked.bind(this);
    this.handleDoSeach = this.handleDoSeach.bind(this);
  }

  handleDoSeach(inputValue) {
    this.setState({
      searchTxt: inputValue,
      itemMenu: 2,
    });
  }

  handleItemMenuClicked(itemClickeado) {
    this.setState({
      itemMenu: itemClickeado,
    });
  }

  render() {
    return (
      <div>
        <Menu
          doSeach={this.handleDoSeach}
          handler={this.handleItemMenuClicked}
        />
        <Body
          inputValue={this.state.searchTxt}
          itemClicked={this.state.itemMenu}
        />
      </div>
    );
  }
}
