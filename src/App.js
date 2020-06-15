import React from "react";
import "./App.css";
import AddUser from "./AddUser";
import { Provider } from "react-redux";
import User from "./Users";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Form State, Spread Syntax, Ternary Operator</h1>
          </header>
          <AddUser/>
          <hr />
          <User />
        </div>
      </Provider>
    );
  }
}

export default App;
