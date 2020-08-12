import React, { Component } from "react";
import "./App.css";
import HeroCard from "./HeroCard";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      showCard: false,
      name: "",
      image: "",
      strength: "",
      intelligence: "",
      speed: "",
      durability: "",
      power: "",
      combat: "",
      fullName: "",
      alterEgo: "",
      publisher: "",
      alignment: "",
      placeOfBirth: "",
    };

    // BInding function
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSearch() {
    this.setState({ showCard: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10158549574959596/search/${this.state.query}`
      )
      .then((response) =>
        response.data.results.map((val) => {
          console.log(val);
        })
      );
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="search by name"
          className="searchBar"
          value={this.state.query}
          onChange={this.handleChange}
        ></input>
        <button className="searchBtn" onClick={this.handleSearch}>
          Search
        </button>
        <div className={this.state.showCard ? "show" : "hide"}>
          <HeroCard
            // Biography
            image={this.state.image}
            name="{this.state.name}"
            fullName={this.state.fullName}
            placeOfBirth={this.state.placeOfBirth}
            alterEgo={this.state.alterEgo}
            publisher={this.state.publisher}
            alignment={this.state.alignment}
            // Powerstats
            intelligence={this.state.intelligence}
            strength={this.state.strength}
            speed={this.state.speed}
            durability={this.state.durability}
            power={this.state.power}
            combat={this.state.combat}
          />
        </div>
      </div>
    );
  }
}

export default App;
