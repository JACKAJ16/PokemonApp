import React from 'react';
import axios from 'axios';
import './App.css';
import Card from '../Card/Card';
import Colors from '../Colors/Colors';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data:'',
      pokemonData: [],
      pokemonInfo: [],
      limit: 12,
      isClicked: false,
      type: '',
      isFiltered: false,
      options: []
    }

    this.getPokemonInfo = this.getPokemonInfo.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }
  

    componentDidMount() {
      this.loadPokemons()
      this.handleOptions()
    }
    
    //fetching pokemons list limited by 12 every call
    loadPokemons() {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${this.state.limit - 12}`)
        .then((res) => {
          this.setState({
            data: res.data.results
          }, () => this.getPokemon(this.state.data))
      })
        .catch((error) => {
          console.log(error);
      })
    }
    
    //mapping through gotten list to get pokemons urls, then fetching data from pokemons urls and putting every single pokemon object in an array for the future mapping through
    getPokemon(data) {
      data.map((val) => {
        return (
          axios.get(val.url)
          .then((res) =>  {
             this.setState({
              pokemonData: [...this.state.pokemonData, res.data].sort((a, b) => a.id - b.id)
            })
          })
        )})
      }
    
    //fetching single pokemon data by clicking the info button
    getPokemonInfo(e) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${e.target.id}`)
          .then((res) => {
            this.setState({
              pokemonInfo: res.data,
              isClicked: true
            })
          })
          .catch((error) => {
          console.log(error);
          })        
        }
    
    //loading 12 more pokemons on the main page
    handleClick() {
      this.setState({
        limit: this.state.limit + 12
      }, () => this.loadPokemons())
    }
    
    //fetching pokemons types list for drop menu
    handleOptions() {
      axios.get('https://pokeapi.co/api/v2/type')
        .then((res) => {
          this.setState({
            options: res.data.results
          })
        })
        .catch((error) => {
          console.log(error);
        })
      }
    
    //handling selected pokemon type 
    handleSelect(e) {
      this.setState({
        type: e.target.value,
        isFiltered: e.target.value === 'Showall' ? false : true
      })
    }


  render() {

  const { pokemonData, pokemonInfo, isClicked, type, isFiltered, options } = this.state

  return (

     <div className="wrapper">

      <div className="header">
       <select value={type} className="select capitalize" onChange={this.handleSelect}>
        <option hidden>Choose type</option>
        <option value="Showall">Show all</option>
        {options ? options.map(val => <option key={val.name} className="capitalize" value={val.name}>{val.name}</option>) : null}
       </select>


       <h1>Pokedex</h1>
      </div>  
        <div className="main">
          <div className="cards">
            {pokemonData[0] ? 
              pokemonData.filter(el => isFiltered ? (el.types[1] !== undefined && el.types[1].type.name === type) || el.types[0].type.name === type : el)
              .map((val, index) => 

            <div className="card" key={val.id}>
              <img className="image" src={val.sprites.front_default} alt={val.name}/>
              <p className="name">{val.name}</p>
                {val.types.sort((a, b) => a.slot - b.slot).map((val)=> <p style={{background: Colors[val.type.name]}} key={val.type.name} className="type capitalize">{val.type.name + ' '}</p>)}
              <button className="info-btn" id={val.id} onClick={this.getPokemonInfo}>Show info</button>
          </div>

          ) : null}

          <button onClick={this.handleClick} className="loadMore-btn">Load more</button>  

        </div>
        <div className="info">
          {isClicked ? <Card pokemonInfo={pokemonInfo}/> : null}
        </div>
      </div>
    </div>
  );
}
}

export default App;
