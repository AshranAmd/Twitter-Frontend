import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation'
import { Component } from 'react';
import Tweets from './components/tweets';
import Suggestions from './components/suggestions';
import Content from './components/content';
import Tweet from './components/Tweet';
import Trending from "./components/Trending"
import Account from './components/Account'
import Compose from './components/Compose'
import Home from './components/Home'
import { BrowserRouter as Router,Switch, Route} from "react-router-dom"
import Fetch from './components/fetch';



class App extends Component {
  
  render(){
  return (
    <div className = "App">
      <Fetch/>
    </div>
  )}
}

export default App;
 