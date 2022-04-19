import styled from "styled-components";

import { ActionButton } from "./ActionButton";

export const GameArea = ({ boba, setBoba }) => {
  return (
    <GameAreaWrapper>
      <ActionButton boba={boba} setBoba={setBoba} />
    </GameAreaWrapper>
  );
};

const GameAreaWrapper = styled.div`
  //   height: 100%;
`;
