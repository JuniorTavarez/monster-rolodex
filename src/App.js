import { Component } from 'react';
import Monster from './Monster';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
   
  }
  render(){
  return (
    <div className="App">
      <Monster/>
    </div>
  );
}
}
export default App;
