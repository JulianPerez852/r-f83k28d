import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      contador: 0,
    }
    this.onClickButton = this.onClickButton.bind(this)
  }

  onClickButton(){
    const conteo = this.state.contador;
    this.setState({
      contador: conteo + 1
    })
  }

  render() {
    const { contador }= this.state;
    return (
      <div>
        <span className="value">{contador}</span>
        <button id="inc" onClick={this.onClickButton}>Incrementa</button>
      </div>
    );
  }
}

export default App;
