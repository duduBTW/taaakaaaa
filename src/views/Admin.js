import React, { useEffect, useState } from "react";
import { InputStepper, Conteiner, ButtonStepper } from "../styles/StatusCard";
import { w3cwebsocket as W3CWebSocket } from "websocket";
let client = null;

export default function Admin() {
  const [nick, setNick] = useState("");
  const [status, setStatus] = useState("");
  const setUser = () => {
    client.send(
      JSON.stringify({
        type: "changeStatus",
        nick: nick,
        status: status,
      })
    );
  };

  useEffect(() => {
    // if (!client) client = new W3CWebSocket("ws://192.168.0.110:8000");
    if (!client) client = new W3CWebSocket("wss://aac4be10c1ab.ngrok.io");

    client.onopen = () => {
      console.log("Conectado");
    };
    // client.onmessage = (message) => {
    // };
    return function cleanup() {
      client.close();
    };
  }, []);
  return (
    <Conteiner>
      <InputStepper
        type="text"
        placeholder="UserName"
        onChange={(e) => setNick(e.target.value)}
      />
      <InputStepper
        onChange={(e) => setStatus(e.target.value)}
        type="text"
        placeholder="Status"
      />
      <ButtonStepper onClick={setUser}>Change Status</ButtonStepper>
    </Conteiner>
  );
}
