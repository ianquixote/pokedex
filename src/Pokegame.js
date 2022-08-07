import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static pokemon = [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ];

    //takes the pokemon array and returns an object containing two decks
    //each containing a random 4 of the 8 total pokemon
    getHands() {
        //initialize a new array to store randomly selected pokemon
        let randomPokemon = [];

        //loop through the pokemon array until there are no more pokemon in the array
        let pokemonCopy = Pokegame.pokemon.slice();
        while (pokemonCopy.length > 0) {
            //get a random index from 0 to the last index (length -1)
            let idx = Math.floor(Math.random() * (pokemonCopy.length));
            //remove the item from the pokemon array and push to the randomPokemon array
            let selected = pokemonCopy.splice(idx, 1)[0];
            randomPokemon.push(selected);
        }

        return {first: randomPokemon.slice(0, 4), second: randomPokemon.slice(4)};
    }
      
    render() {
        let decks = this.getHands();
        let firstDeckExp = decks.first.reduce((acc, curr) => acc + curr.base_experience, 0);
        let secondDeckExp = decks.second.reduce((acc, curr) => acc + curr.base_experience, 0);
        return (
            <div>
                <Pokedex pokemon={decks.first} totalExperience={firstDeckExp} isWinner={firstDeckExp > secondDeckExp}/>
                <Pokedex pokemon={decks.second} totalExperience={secondDeckExp} isWinner={firstDeckExp < secondDeckExp}/>
            </div>
        ); 
    }
}

export default Pokegame;