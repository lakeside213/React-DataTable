import React from "react";
import CoinTable from "./components/coin-table";

import data from "./data/coins.json";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      direction: {
        price_usd: "asc"
      }
    };

    this.sortBy = this.sortBy.bind(this);
  }

  sortBy(key) {
    this.setState({
      data: data.sort((a, b) => {
        console.log(parseFloat(a[key]));
        return this.state.direction[key] === "asc"
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key]);
      }),
      direction: {
        [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
      }
    });
  }

  render() {
    return (
      <div className="page-container">
        <CoinTable data={this.state.data} sortBy={this.sortBy} />
      </div>
    );
  }
}

export default App;
