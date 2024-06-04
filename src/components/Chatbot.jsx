import { Button } from "bootstrap";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import moment from "moment";

function Chatbot() {
  const [message, setMessage] = useState([
    {
      message: "Hi, May I know your good name?",
    },
  ]);

  const [text, setText] = useState("");

  const onSend = () => {
    let list = [...message, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text);
      list = [...list, { message: reply }];
    } else {
      list = [
        ...list,
        {
          message: `Hi! ${text}`,
        },
        {
          message: `How can I help you?`,
        },
      ];
    }
    setMessage(list);
    setText("");
    setTimeout(() => {
      document.querySelector("#footer").scrollIntoView();
    });
  };

  return (
    <div>
      <div className="  d-flex align-items-center justify-content-center ">
        <img
          src="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?size=626&ext=jpg&ga=GA1.1.1755107411.1717427288&semt=sph"
          alt="logo"
          height={200}
          width={200}
        />
        <h2 className="text-primary">ChatTalk</h2>
      </div>

      <div className="chat-message ">
        {
          message.length > 0 && message.map((data, index) => (
            <ChatMessage key={index} {...data} />
          ))
        }
        <div className="d-flex mt-2">
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn ms-3"
            onClick={onSend}
            style={{
              backgroundColor: "lightgreen",
              borderRadius: 10,
              width: 80,
              border: "none",
            }}
          >
            Send
          </button>
        </div>
        <div id="footer" className="mt-3">
                 ChatTalk can make mistakes
        </div>
      </div>
      <div id="copyright" className="copy">
      <small>&copy; Copyright <img src="/public/images/my-logo.png" alt="logo"  height={100}/>2024</small> 
        </div>
    </div>
  );
}

export default Chatbot;

export const analyze = (text) => {
  if (text.includes('hi') || text.includes('hai') || text.includes('hello') || text.includes('Hello'))
    return `Welcome to Chatbot, how can I help you?`;
  else if (text.includes('date'))
    return moment().format('MMMM Do YYYY');
  else if (text.includes('time'))
    return moment().format('h:mm:ss a');
  else if (text.includes('google link'))
    return 'https://www.google.com';
  else if (text.includes('interest'))
    return 'Bank interest rate is 8.7%';
  else if (text.includes('thank you') || text.includes('Thank you'))
    return 'Thank you, have a nice day';
  return `I can't understand you, can you rephrase the message?`;
}
