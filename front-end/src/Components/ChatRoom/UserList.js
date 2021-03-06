import React from "react";
import { ListGroup } from "react-bootstrap";
import { socket } from "../../App";
export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [...this.props.userList],
      userCount: 0,
    };
  }

  componentDidMount = () => {
    socket.on("updateList", (data) => {
      this.setState({ userList: [...data] });
      this.setState({ userCount: this.state.userList.length });
    });
  };

  component;
  render() {
    return (
      <ListGroup className="userList">
        <ListGroup.Item bsPrefix className="userListEntry">
          <b>Users Online:{this.state.userCount}</b>
        </ListGroup.Item>
        {this.state.userList.map((val, ctr) => {
          return (
            <React.Fragment key={ctr}>
              <ListGroup.Item className="userListEntry" bsPrefix>{val}</ListGroup.Item>
            </React.Fragment>
          );
        })}
      </ListGroup>
    );
  }
}
