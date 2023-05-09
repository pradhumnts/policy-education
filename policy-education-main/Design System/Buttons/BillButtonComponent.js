import React from "react";
import BillButton from "../../Design System/Buttons/BillButton";
import { View, StyleSheet } from "react-native";

const BillButtonComponent = (props) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        marginTop: 20,
        width: "100%",
      }}
    >
      <BillButton
        variant="dark"
        text="House"
        icon="home-outline"
        gradient={["#FFAABE", "#A18CD1"]}
        color="#F3F3F3"
        onPress={() => props.handleButtonPress("House")}
        isSelected={props.selectedButton === "House"}
        style={{ width: "48%" }}
      />
      <BillButton
        variant="dark"
        text="Senate"
        icon="people-outline"
        gradient={["#FFAABE", "#A18CD1"]}
        color="#F3F3F3"
        onPress={() => props.handleButtonPress("Senate")}
        isSelected={props.selectedButton === "Senate"}
        style={{ width: "48%" }}
      />
    </View>
  );
};

export default BillButtonComponent;
