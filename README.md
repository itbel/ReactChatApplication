# General Specifications

## Maintainers

###### Klifford Agujar [Github](https://github.com/ashencat)
###### Kevin Hy [Github](https://github.com/kevin-hy)
###### Igor Teixeira Belem [Github](https://github.com/itbel/)

## Admin Credentials

admin/password

## Instructions
Application deployed at:
- [AWS](http://ec2-18-224-228-195.us-east-2.compute.amazonaws.com/)
- To run node server just serve with 'node app.js'. I used PM2.
- To serve the react page build with 'npm run-script build' and serve with Apache or Nginx.
- To get application to run on EC2 we used a reverse proxy to point to localhost to allow a connection to Node @ port 3001.
- Using mongodb Atlas for database. Configure dbconf.js to suit your db configuration.

## Images
#### Landing View
![Landing](https://github.com/itbel/ReactChatApplication/blob/master/images/LandingPage.png?raw=true)
#### Chatroom View
![Chatroom](https://github.com/itbel/ReactChatApplication/blob/master/images/Chatroom.png?raw=true)
#### Admin Login View
![AdminLogin](https://github.com/itbel/ReactChatApplication/blob/master/images/AdminLogin.png?raw=true)
#### Admin Landing View
![AdminLanding](https://github.com/itbel/ReactChatApplication/blob/master/images/AdminLanding.png?raw=true)
#### Chat History View
![ChatHistory](https://github.com/itbel/ReactChatApplication/blob/master/images/ChatHistory.png?raw=true)
#### Room List View
![RoomList](https://github.com/itbel/ReactChatApplication/blob/master/images/RoomList.png?raw=true)
#### Add Room Modal
![AddRoomModal](https://github.com/itbel/ReactChatApplication/blob/master/images/AddRoomModal.png?raw=true)
#### Edit Room Modal
![EditRoomModal](https://github.com/itbel/ReactChatApplication/blob/master/images/EditRoomModal.png?raw=true)

## Frontend

- [x] Base frontend chat app W/ Socket.io
- [x] React-Material for UI
- [x] Guest
  - [x] Chat Screen
  - [x] Admin Login Screen
- [x] Admin
  - [x] Event History : Event Type(CONNECTED, JOINED, ERROR), Date, Time, User, EventID, PPID
  - [x] Chat History(Pagination, Sorting, Filter) : MessageID, Date, Time, MessageSender, MessageReceiver, Message, Room
  - [x] Rooms(Pagination, Sorting, Filter) : RoomID, Room Name, Created Date, Edit Date, Status, Add New Room
  - [x] Add/Edit Room Screen(Basic validation, no nameless room) : RoomName, Status(Active, Inactive)

## Backend

- [x] Base backend
  - [x] Socket.io
  - [x] Database API
- [x] Database - MongoDB Remote
- [x] Admin User table
- [x] Event History : Event Type(CONNECTED, JOINED, ERROR), Date, Time, User, EventID, PPID
- [x] Chat History : MessageID, Date, Time, Sender, Receiver, Message, Room
- [x] Rooms : RoomID, Room Name, Created Date, Edit Date, Status

## API targets

- `htttp://localhost:${port}/api/events`
- `htttp://localhost:${port}/api/chatlog`
- `htttp://localhost:${port}/api/rooms`

## Technologies

- [react-notification-system](https://github.com/igorprado/react-notification-system)
- [moment.js](https://github.com/moment/moment)
- [Material Design for Bootstrap](https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design)
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [axios](https://github.com/axios/axios)
- [socket.io](https://github.com/socketio/socket.io)
- [socket.io-client](https://github.com/socketio/socket.io-client)
- [express](https://github.com/expressjs/express)
- [mongoose](https://github.com/Automattic/mongoose)
- [body-parser](https://github.com/expressjs/body-parser)
- [morgan](https://github.com/expressjs/morgan)
- [helmet](https://github.com/helmetjs/helmet)
