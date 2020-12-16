// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import './index.css';
import DoublePlayer from './components/DoublePlayer.js';
import SinglePlayer from './components/singlePlayer.js';
import Game from './components/game.js';
import Homepage from './components/Homepage.js';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      name1 : "",
      name2 : "Computer",
      nameTaken : false,
    }
  }

  updateName1 = (name) => {
    this.setState({
      name1 : name
    })
  }

  updateName2 = (name) => {
    this.setState({
      name2 : name
    })
  }

  nameTaken = () => {
    this.setState({
      nameTaken : true,
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route
                path="/Homepage"
                render={props => <Homepage history={props.history}/>}
              />
              <Route
                path="/singlePlayer"
                render={props => <SinglePlayer 
                                  nameTaken={this.nameTaken} 
                                  updateName1={this.updateName1}  
                                  history={props.history}
                                  name1={this.state.name1}
                                  name2={this.state.name2}
                                />
                }
              />
              <Route
                path="/doublePlayer"
                render={props => <DoublePlayer 
                                  nameTaken={this.nameTaken} 
                                  updateName1={this.updateName1} 
                                  updateName2={this.updateName2}  
                                  history={props.history}
                                  name1={this.state.name1}
                                  name2={this.state.name2}
                                />
                }
              />
              {this.state.nameTaken &&
                <Route
                  path="/game"
                  render={props => <Game
                                    name1={this.state.name1}
                                    name2={this.state.name2}
                                    history={props.history}
                                    location={props.location}
                                  />
                        }
                />
              }
              <Route
                path="*"
                render={() => <Redirect to={{pathname: "/Homepage"}} />}
              />
            </Switch>
          </div>
        </BrowserRouter>
        {/* <Homepage /> */}
      </div>
    );
  }
}

export default App;
