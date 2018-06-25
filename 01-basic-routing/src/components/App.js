import React, { Component } from "react";
import "../styles/App.css";
import Hello from "./Hello/Hello";
import About from "./About/About";
import Books from "./Books/Books";
import Home from "./Home/Home";
// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li>
                <a>
                  <Link to="/hello">Hello</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/about">About</Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/books">Books</Link>
                </a>
              </li>
            </ul>
            <hr />
            {/* Routes will go here */}
            {/*Must have exact because every route is an item of history array
              if we don't specify exact, it will push the component to the view base on the "/"
            */}
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/hello" component={Hello} />
              <Route
                path="/hello/goodmorning"
                render={() => {
                  return <h1>goodmoring</h1>;
                }}
              />
              <Route path="/about" component={About} />
              <Route path="/books" component={Books} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
