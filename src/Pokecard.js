import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
    render() {
        return (
            <li className="Pokecard">
                <h3 className="Pokecard-title">{this.props.name}</h3>
                <img className="Pokecard-image" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.imageId}.png`}/>
                <p>Type: {this.props.type}</p>
                <p>EXP: {this.props.experience}</p>
            </li>
        )
    }
}

export default Pokecard;

