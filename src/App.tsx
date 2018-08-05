import * as React from 'react';
import './App.css';

import logo from './logo.svg';

export interface IAppState {
  name: string
}

class App extends React.Component<any, IAppState> {

  public componentWillMount() {
    this.setState ({
      name: 'toto'
    })
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          My name is {this.state.name}
        </p>
      </div>
    );
  }
}

export default App;
