import React from "react";
import socketIOClient from "socket.io-client";
import "./app-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Components/Landing";

let socket;

class App extends React.Component {
  componentDidMount() {
    socket = socketIOClient("http://18.224.228.195:3001");
  }
  render() {
    return (
      <>
        <Landing></Landing>
      </>
    );
  }
}

export { App, socket };
