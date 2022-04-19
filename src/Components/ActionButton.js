import styled from "styled-components";

export const ActionButton = ({ boba, setBoba }) => {
  return (
    <ActionButtonWrapper
      onClick={(e) => {
        setBoba((boba += 1));
      }}
    >
      Make Boba
    </ActionButtonWrapper>
  );
};

const ActionButtonWrapper = styled.button`
  background-color: red;
`;
