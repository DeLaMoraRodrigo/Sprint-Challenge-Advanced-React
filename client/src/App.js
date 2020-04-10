import React from 'react';
import axios from "axios";
import NavBar from "./components/NavBar";
import PlayerCard from "./components/PlayerCard";
import './App.css';
import nextId from "react-id-generator";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res)
        this.setState({
          player: res.data
        })
      })
      .catch(err => {
        console.log(`Failed to retrieve data`, err)
      })
  }

  render() {
    return (
      <div className="App">

          <NavBar />

          <div className="cardGroup">
            {this.state.player && this.state.player.map(val => (
              <PlayerCard name={val.name} country={val.country} searches={val.searches} key={nextId()} />
            ))}
          </div>

      </div>
    );
  }
}

export default App;
