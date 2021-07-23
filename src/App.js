import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import ResultComponent from './components/ResultComponent';
import ButtonComponent from './components/ButtonComponent';
import calculation from "./calculation-logic/calculation";


class App extends Component {
  constructor() {
    super();

    this.state = {
      result: '',
      reset: false
    }
  }

  onClick = (button) => {
    this.setState(calculation(this.state, button));
  }

  render() {
    return (
      <>
        <div className='container-sm calculator'>
          <div className="calculator-body">
            <ResultComponent result={this.state.result} />
            <ButtonComponent onClick={this.onClick} />
          </div>
        </div>
      </>
    );
  }
}

export default App;