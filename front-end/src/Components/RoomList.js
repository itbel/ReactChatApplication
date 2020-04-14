import React from "react";
import { ListGroup } from "react-bootstrap";
import Axios from "axios";
export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatRoomList: []
    };
  }
  componentDidMount() {
    this.retrieveRoomList();
  }

  retrieveRoomList = () => {
    Axios.get("http://localhost:3001/api/rooms")
      .then((response) => {
        let rooms = [...this.state.chatRoomList];
        (response.data).map(val => {
          if (val.Status === "Active") {
            return rooms.push(val.Name);
          }
          else {
            return [];
          }
        })
        this.setState({ chatRoomList: rooms })
      })
      .catch((error) => {
      });
  };

  setRoom = event => {
    this.props.onRoomSelect(event.target.value);
  };

  render() {
    return (
      <div>
        <ListGroup className="roomList">
          <ListGroup.Item bsPrefix>
            <b>Room List</b>
          </ListGroup.Item>
          {this.state.chatRoomList.map((val, ctr) => {
            return (
              <React.Fragment key={ctr}>
                <ListGroup.Item bsPrefix action className="roomListEntry" onClick={this.setRoom} value={val}>
                  {val}
                </ListGroup.Item>
              </React.Fragment>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}
