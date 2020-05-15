import React, { useState, useCallback } from "react";
import FlareComponent from "flare-react";
import LoginForm from "./components/loginForm";
import {
  AppWrapper,
  Divider,
  FlexContainer,
  RangeInput,
} from "./styles/styles";

export default function App() {
  const [teddy, setTeddy] = useState("idle");
  const [house, setHouse] = useState("to 3");

  const teddyController = useCallback((state) => {
    setTeddy(state);
  }, []);

  return (
    <AppWrapper>
      <h1>React + Flare(Rive)</h1>
      <FlexContainer>
        <Divider>
          <FlareComponent
            width={300}
            height={350}
            animationName={teddy}
            file="/assets/flare/Teddy.flr"
          />
          <LoginForm teddyController={teddyController} />
        </Divider>
        <Divider>
          <FlareComponent
            width={300}
            height={350}
            animationName={house}
            file="/assets/flare/house.flr"
          />
          <RangeInput
            type="range"
            min={3}
            max={6}
            onInput={(e) => setHouse(`to ${e.target.value}`)}
          />
        </Divider>
      </FlexContainer>
    </AppWrapper>
  );
}
