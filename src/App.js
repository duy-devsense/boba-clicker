import styled from "styled-components";
import { Menu } from "./Components/Menu";
import { GameArea } from "./Components/GameArea";
import { HUD } from "./Components/HUD";
import { useState } from "react";

const App = () => {
  const [bobaBux, setBobaBux] = useState(0);
  const [boba, setBoba] = useState(0);

  return (
    <AppWrapper className="App">
      <HUD bobaBux={bobaBux} boba={boba} />
      <GameArea bobaBux={bobaBux} boba={boba} setBoba={setBoba} />
      <Menu />
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  background-color: plum;
  height: 100vh;
`;
