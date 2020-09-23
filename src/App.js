import { FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import { db } from "./firebase";
import firebase from "firebase";
import Flipmove from "react-flip-move";

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([]);
  const [username, setusername] = useState("");

  useEffect(() => {
    setusername(prompt("Please enter your name"));
  }, []);

  useEffect(() => {
    db.collection("messengers")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messengers").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };

  return (
    <div className="app">
      <img
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <h2>Welcome : {username} 😊 </h2>
      <form className="app__form">
        <FormControl className="app__formcontrol">
          <Input
            placeholder="Enter the text"
            className="app__input"
            value={input}
            onChange={(event) => {
              setinput(event.target.value);
            }}
          />

          <IconButton
            className="app__iconbutton"
            type="submit"
            variant="contained"
            color="primary"
            disabled={!input}
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <Flipmove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </Flipmove>
    </div>
  );
}

export default App;
