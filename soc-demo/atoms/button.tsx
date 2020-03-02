import * as React from "react";
import styled from "styled-components";

export type Props = {
  text: string;
};
export const Button: React.FC<Props> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
  width: 120px;
  height: 80px;
  border-radius: 8px;
  border: 1pt solid black;
`;
