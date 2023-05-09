import React, { useState } from "react";
import { Button, View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";  

const SocialButton = (props) => {

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} > 
            <Image style={styles.icon} source={props.icon} />
            <Text style={{...styles.text, color: props.variant === "dark" ? "black" : "white"}}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    paddingVertical: 10, 
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    gap: 10 ,
    flex: 1, width: "50%" 
  },
  icon: {
    width: 24,
    height: 24,  
  },
  text: {
    fontWeight: 500,
    fontSize: 18
  },
});

export default SocialButton;
