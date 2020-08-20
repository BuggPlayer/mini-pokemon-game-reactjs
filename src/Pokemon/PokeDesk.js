import React, { Component } from "react";
import "./PokeDesk.css";
import PokeCard from "./Pokemon";

class PokeDesk extends Component {


  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner"> Winning hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser"> Losing  hand</h1>;
    }
    return (
      <div className="PokeDesk">
         {title} 
        <h4> Total Exprience:{this.props.exp}</h4>
       

        <div className="PokeDesk_card">
          {this.props.pokemon.map((p) => (
            <PokeCard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PokeDesk;
