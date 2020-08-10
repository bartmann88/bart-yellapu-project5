import React, { Component } from "react";
import "./App.css";
import HeroCard from "./HeroCard";
import axios from "axios";

class App extends Component {

  // ComponentDidMount is used for fetching the api. 

  componentDidMount(){
    axios
      .get("https://superheroapi.com/api/10158549574959596/search/batman")
      .then((response) => {
        console.log(response.data)
      })
  
      
 
  }
  render() {
    return (
    <div className="App">
    
      <input type ="text" placeholder = "search by name" className = "searchBar" ></input>

    </div>

    )
  }
}

export default App;
