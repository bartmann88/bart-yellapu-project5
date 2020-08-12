import React, { Component } from "react";

class HeroCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>

        <img src={this.props.image} alt={this.props.atl} />

        <h3>Biography</h3>
        <ul>
          <li>{this.props.fullName}</li>
          <li>{this.props.placeOfBirth}</li>
          <li>{this.props.alterEgo}</li>
          <li>{this.props.publisher}</li>
          <li>{this.props.alignment}</li>
        </ul>

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
    );
  }
}

export default HeroCard;
