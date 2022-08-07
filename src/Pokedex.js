import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
    padId(id) {
        return id.toString().padStart(3, '0');
    }

    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-win">Winning Hand</h1>;
        } else {
            title = <h1 className="Pokedex-lose">Losing Hand</h1>;
        }
        return (
            <div>
                {title}
                <p>Total Experience: {this.props.totalExperience}</p>
                <ul className="Pokedex">
                    {this.props.pokemon.map(p => <Pokecard name={p.name} type={p.type} experience={p.base_experience} imageId={this.padId(p.id)}/>)}
                </ul>
            </div>
        )
    }
}

export default Pokedex;