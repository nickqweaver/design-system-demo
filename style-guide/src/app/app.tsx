import * as React from "react";
import { PrimaryButton } from "../components/atoms/primaryButton/PrimaryButton";
export const App = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap"
      }}
    >
      <PrimaryButton type={"normal"} colorVariation={"grey"} title={"Normal"} />
      <PrimaryButton
        type={"pressed"}
        colorVariation={"grey"}
        title={"Pressed"}
      />
      <PrimaryButton
        type={"disabled"}
        colorVariation={"grey"}
        title={"Disabled"}
      />
      <PrimaryButton type={"normal"} colorVariation={"blue"} title={"Normal"} />
      <PrimaryButton
        type={"pressed"}
        colorVariation={"blue"}
        title={"Pressed"}
      />
      <PrimaryButton
        type={"disabled"}
        colorVariation={"blue"}
        title={"Disabled"}
      />
    </div>
  );
};
