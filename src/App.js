import React, { PureComponent } from "react";
import Header from "./components/header/Header";
import SearchInput from "./components/search/SearchInput";
import EmojiResults from "./components/emoji/EmojiResults";
import filterEmoji from "./utils/filterEmoji";

import "./App.css"

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
