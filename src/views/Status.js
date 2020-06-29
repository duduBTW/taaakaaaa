import React, { useState, useEffect } from "react";
import {
  CardStepper,
  CardStepperContent,
  Conteiner,
  InputStepper,
} from "../styles/StatusCard";
import { w3cwebsocket } from "websocket";

let client = null;

export default function Status() {
  const [userNameTemp, setUserNameTemp] = useState();
  const [userName, setUserName] = useState();
  const [content, setContent] = useState("Default");

  const setUser = () => {
    client.send(
      JSON.stringify({
        type: "setNick",
        nick: userNameTemp,
      })
    );
    setUserName(userNameTemp);
  };

  useEffect(() => {
    // if (!client) client = new w3cwebsocket("ws://192.168.0.110:8000");
    if (!client) client = new w3cwebsocket("wss://aac4be10c1ab.ngrok.io");

    console.log("useEffect");
    client.onopen = () => {
      console.log("Conectado");
    };
    client.onmessage = (message) => {
      setContent(JSON.parse(message.data).status);
      console.log();
    };

    return function cleanup() {
      client.close();
    };
  }, []);

  return (
    <Conteiner>
      {userName ? (
        <>
          <h3>
            <span onClick={() => setUserName(null)}> {" < "} </span> {userName}{" "}
          </h3>
          <CardStepper>
            <CardStepperContent> {content} </CardStepperContent>
          </CardStepper>
        </>
      ) : (
        <form onSubmit={setUser} action="">
          <InputStepper
            type="text"
            placeholder="UserName"
            value={userNameTemp}
            onChange={(e) => setUserNameTemp(e.target.value)}
          />
        </form>
      )}
    </Conteiner>
  );
}
