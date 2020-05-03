import React, { useState } from "react";
import FlareComponent from "flare-react";
import LoginForm from "./components/loginForm";
import { AppWrapper } from "./styles/styles";

export default function App() {
  const [teddy, setTeddy] = useState("idle");
  return (
    <AppWrapper>
      <h1>React + Flare(River)</h1>
      <FlareComponent
        width={300}
        height={350}
        animationName={teddy}
        file="/assets/flare/Teddy.flr"
      />
      <LoginForm teddyController={setTeddy} />
    </AppWrapper>
  );
}
