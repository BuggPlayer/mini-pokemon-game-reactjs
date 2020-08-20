import React, { Component } from "react";
import "./Pokemon.css";

const Poke_Api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokemon extends Component {
  render() {
    let imgSrc = `${Poke_Api}${padToThree(this.props.id)}.png `;

    return (
      <div className="PokemonCard">
        <h1 className="Pokecard-title"> {this.props.name}</h1>

        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name} />{" "}
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokemon;
