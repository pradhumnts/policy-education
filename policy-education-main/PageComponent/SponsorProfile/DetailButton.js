import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const DetailButton = () => {
  const [isButton1Pressed, setIsButton1Pressed] = useState(false);
  const [isButton2Pressed, setIsButton2Pressed] = useState(false);

  const handleButton1Press = () => {
    setIsButton1Pressed(true);
    setIsButton2Pressed(false);
  };
  
  const handleButton2Press = () => {
    setIsButton1Pressed(false);
    setIsButton2Pressed(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={handleButton1Press}
        style={[styles.button, { backgroundColor: isButton1Pressed ? "c" : "white" }]}
      >
        <Text style={[styles.buttonText, { color: isButton1Pressed ? "#fff" : "#000" }]}>32 Bills</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleButton2Press}
        style={[styles.button, { backgroundColor: isButton2Pressed ? "#a18cd1" : "white" }]}
      >
        <Text style={[styles.buttonText, { color: isButton2Pressed ? "#fff" : "#000" }]}>45 Voting Record</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    justifyContent: "space-evenly",
  },
  button: {
    width: 160,
    height: 55,
    borderRadius: 50,
    alignItems: "center",
    justifyContent:'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight:500
  },
});

export default DetailButton;
