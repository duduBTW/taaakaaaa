import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import CardBottom from "../components/Card/CardBottom.png";
import { Link } from "react-router-dom";
import { w3cwebsocket as W3CWebSocket } from "websocket";

export default function Commission() {
  // const client = new W3CWebSocket("ws://192.168.0.110:8000");
  // const [message, setMessage] = useState([]);
  // const [messageContent, setMessageContent] = useState("");
  // const sendMessage = () => {
  //   client.send(
  //     JSON.stringify({
  //       type: "message",
  //       msg: messageContent,
  //     })
  //   );
  // };
  // useEffect(() => {
  //   client.onopen = () => {
  //     console.log("Conectado");
  //   };
  //   client.onmessage = (message) => {
  //     const dataFromServer = JSON.parse(message.data);
  //     console.log("got reply! ", dataFromServer);
  //     if (dataFromServer.type === "message") {
  //       setMessage((message) => [
  //         ...message,
  //         {
  //           msg: dataFromServer.msg,
  //           user: dataFromServer.user,
  //         },
  //       ]);
  //     }
  //   };
  //   return function cleanup() {
  //     console.log("Uwu");
  //     client.close();
  //   };
  // }, [client]);
  // return (
  //   <div>
  //     <h1>Messages</h1>
  //     {message.map((item) => (
  //       <div className=""> {item.msg} </div>
  //     ))}
  //     <input
  //       type="text"
  //       name="messContent"
  //       id="messContent"
  //       onChange={(e) => setMessageContent(e.target.value)}
  //     />
  //     <button onClick={sendMessage}>Enviar</button>
  //   </div>
  // );
}
