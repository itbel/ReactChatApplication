import React from "react";
import socketIOClient from "socket.io-client";
import "./app-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./Components/Landing";

let socket;

class App extends React.Component {
  componentDidMount() {
    socket = socketIOClient("http://ec2-18-224-228-195.us-east-2.compute.amazonaws.com:3001"); // Used for Testing
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
