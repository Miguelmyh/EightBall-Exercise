import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const random = () => Math.floor(Math.random() * answers.length);
  const [message, setMessage] = useState(answers[random()]);
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a Question");
  const reset = () => {
    setMessage(answers[random()]);
    setColor(message.color);
    setMsg(message.msg);
  };

  return (
    <>
      <div
        onClick={reset}
        className="EightBall"
        style={{ backgroundColor: `${color}` }}
      >
        <p className="EightBall-text">{msg}</p>
      </div>
    </>
  );
};

export default EightBall;
