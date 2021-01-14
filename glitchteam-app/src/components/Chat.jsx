import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import queryString from 'query-string';
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #710099;
  flex-direction: column;
`;

const Title = styled.div`
  width:400px;
  color:white;
  text-align:center;
`;

const Container = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 1px solid #fffff;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  width: 96.5%;
  background-color: white;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  border: 1px solid #ffff;
  outline: none;
  color: #black;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: #710099;
  }
`;

const Button = styled.button`
  background-color: #B20081;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: white;
  font-size: 17px;
  cursor:pointer;
    :hover {
    background-color : #ééB08DAA
  }
`;

const Form = styled.form`
  width: 400px;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  width: 45%;
  background-color: #B20081;
  color: #ffff;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-radius: 30px; ;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
  display:flex;
  flex-direction: column;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: lightgrey ;
  color: black;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-radius: 30px;
`;




const Chat = ({ location }) => {
  const [yourId, setYourId] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [room , setRoom] = useState("");
  const [name , setName] = useState("")
  const ENDPOINT = "http://localhost:3000/"

  const socketRef = useRef();
  const countRef = useRef();
  countRef.current = -1;


  useEffect(()=>{
    const { name, room } = queryString.parse(location.search);

    const socket = io(ENDPOINT)

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  },[ENDPOINT, location.search])

  console.log(room , name)

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:8000/");

    socketRef.current.on("your id", (id) => {
      setYourId(id);
    });

    socketRef.current.on("message", (message) => {
      if (message.msgId <= countRef.current)
        return console.log(
          `Avoiding message ${message.msg} (${message.msgId})`
        );
      countRef.current = message.msgId;
      receivedMessage(message.msg);
    });

  }, []);

  const receivedMessage = (message) => {
    setMessages((oldMsgs) => [...oldMsgs, message]);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourId,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Page>
      <Title>
        <h1>Bienvenue {name} <br/> sur la room {room}</h1>
      </Title>
      <Container>
        {messages.map((message, index) => {
          if (message.id === yourId) {
            return (
              <MyRow key={index}>
                <MyMessage>{message.body}</MyMessage>
              </MyRow>
            );
          }
          return (
            <PartnerRow key={index}>
              <PartnerMessage>{message.body}</PartnerMessage>
            </PartnerRow>
          );
        })}
      </Container>
      <Form onSubmit={sendMessage}>
        <TextArea
          value={message}
          onChange={handleChange}
          onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
          placeholder='Envoyer un message'
          required
        />
        <Button>ENVOYER</Button>
      </Form>
    </Page>
  );
};

export default Chat;