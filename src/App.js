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
import Collections from './components/Collections';
import Messages from './components/Messages';
import Notification from './components/Notification';



class App extends Component {
  
  render(){
  return (
    <div className = "App">
    <Router>
          <div className="Route"> 
              <Switch> 
                  <Route exact path ={ "/home"} component={Home}/>
                  <Route exact path = {"/account"} component={Account}/>
                  <Route exact path = {"/compose"} component={Compose}/>
                  <Route exact path = {"/trending"} component = {Trending}/>
                  <Route exact path = {"/tweets"} component = {Collections}/>
                  <Route exact path = {"/messages"} component = {Messages}/>
                  <Route exact path = {"/notifications"} component = {Notification}/>
              </Switch>
          </div>
      </Router>
  </div>
  )}
}

export default App;
 