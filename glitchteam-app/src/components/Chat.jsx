import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #333;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  background-color: black;
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
  width: 98%;
  background-color: black;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  border: 1px solid #ffff;
  outline: none;
  color: lightgray;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: lightgray;
  }
`;

const Button = styled.button`
  background-color: #ffff;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #46516e;
  font-size: 17px;
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
  background-color: #077dfb;
  color: #ffff;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-radius: 30px; ;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: white;
  color: black;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-radius: 30px;
`;

const Chat = () => {
  const [yourId, setYourId] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();
  const countRef = useRef();
  countRef.current = -1;

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
        <Button>Envoyer</Button>
      </Form>
    </Page>
  );
};

export default Chat;
