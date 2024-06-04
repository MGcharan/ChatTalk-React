import React from "react";
import {Person,ChatHeartFill} from 'react-bootstrap-icons'
function ChatMessage(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={`d-flex ${props.user && 'justify-content-end'}`}>
      {
         
        // eslint-disable-next-line react/prop-types
        props.user ? (
          <span className="message-right">
            <span className="message-text">{props.message}</span>
          <Person className="message-icon"/>
          </span>
        ) : (
          <span className="message-left">
            <ChatHeartFill className="message-icon"/>
            <span className="message-text">{props.message}</span>
          </span>
        )
      }
    </div>
  );
}

export default ChatMessage;
