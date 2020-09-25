import React, { Component } from "react";

class HeroCard extends Component {
  render() {
    return (
      <div className="cardContainer">
        <h2>{this.props.name}</h2>

        <img
          className="heroImage"
          src={this.props.image}
          alt={this.props.alt}
        />

        <div className="bioSection">
          <h3>Biography</h3>
          <ul>
            <li>{this.props.fullName}</li>
            <li>{this.props.publisher}</li>
            <li>{this.props.alignment}</li>
          </ul>
        </div>

        <div className="powerSection">
          <h3>PowerStats</h3>
          <ul>
            <li>{this.props.intelligence}</li>
            <li>{this.props.strength}</li>
            <li>{this.props.speed}</li>
            <li>{this.props.durability}</li>
            <li>{this.props.power}</li>
            <li>{this.props.combat}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeroCard;
