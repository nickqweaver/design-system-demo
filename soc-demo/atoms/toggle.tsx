import * as React from "react";
import styled from "styled-components";

export type Props = {
  on: string;
};
export const Toggle: React.FC<Props> = ({ on }) => {
  return (
    <StyledToggle>
      <Switch>{on ? "ON" : "OFF"}</Switch>
    </StyledToggle>
  );
};

const StyledToggle = styled.div`
  width: 120px;
  height: 80px;
  border-radius: 8px;
  border: 1pt solid black;
`;

const Switch = styled.span`
  width: 20px;
  height: 80px;
  border-radius: 50%;
  background: green;
`;
