import styled from "styled-components";

export const HUD = ({ bobaBux, boba }) => {
  return (
    <HUDWrapper>
      <div>{`BOBA BUX: ${bobaBux}`}</div>
      <div>{`BOBA: ${boba}`}</div>
    </HUDWrapper>
  );
};

const HUDWrapper = styled.div`
  background-color: tomato;
`;
