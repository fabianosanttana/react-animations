import React, { useState, useCallback } from "react";
import FlareComponent from "flare-react";
import LoginForm from "./components/loginForm";
import { AppWrapper } from "./styles/styles";

export default function App() {
  const [teddy, setTeddy] = useState("idle");

  const teddyController = useCallback((state) => {
    setTeddy(state);
  }, []);

  return (
    <AppWrapper>
      <h1>React + Flare(Rive)</h1>
      <FlareComponent
        width={300}
        height={350}
        animationName={teddy}
        file="/assets/flare/Teddy.flr"
      />
      <LoginForm teddyController={teddyController} />
    </AppWrapper>
  );
}
