// Import Statements

import React, { Component } from "react";
import "./App.css";
import HeroCard from "./HeroCard";
import axios from "axios";

// Initializing Class Component

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      showCard: false,
      apiData: [],
      loading: false,
    };
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSearch = (event) => {
    event.preventDefault();
    this.setState({ showCard: true, loading: true });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10222600563671771
/search/${this.state.query}`
      )
      .then((response) =>
        this.setState({
          apiData: response.data.results,
          loading: false,
        })
      );
  };

  render() {
    return (
      <div className="App">
        <div className="headerContainer">
          <h1>Concise Comic Compendium</h1>
          <p className="introContent">Who is Your Favourite Character?</p>
          <form className="searchToggle">
            <input
              type="text"
              placeholder="Enter Name"
              className="searchBar"
              value={this.state.query}
              onChange={this.handleChange}
            />
            <button className="searchBtn" onClick={this.handleSearch}>
              Search
            </button>
          </form>

          {this.state.loading ? (
            <p className="loadingMessage">Loading Please wait...</p>
          ) : null}
        </div>

        <div className="heroContainer">
          {this.state.apiData ? (
            this.state.apiData.map((val) => (
              <div className={this.state.showCard ? "show" : "hide"}>
                <HeroCard
                  // Biography
                  image={val.image.url}
                  alt={`${val.biography["full-name"]} ${val.name} Image`}
                  name={val.name}
                  fullName={`Full Name: ${val.biography["full-name"]}`}
                  publisher={`Publisher: ${val.biography.publisher}`}
                  alignment={`Alignment: ${val.biography.alignment}`}
                  // Powerstats
                  intelligence={`Inteligence - ${val.powerstats.intelligence}`}
                  strength={`Strength - ${val.powerstats.strength}`}
                  speed={`Speed - ${val.powerstats.speed}`}
                  durability={`Durability - ${val.powerstats.durability}`}
                  power={`Power - ${val.powerstats.power}`}
                  combat={`Combat - ${val.powerstats.combat}`}
                />
              </div>
            ))
          ) : (
            <p className="tryAgain">Try Another Option</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
