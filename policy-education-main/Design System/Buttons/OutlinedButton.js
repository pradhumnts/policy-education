import React, { useState } from "react";
import { Button, View, Image, StyleSheet, TouchableOpacity, Text } from "react-native"; 
import Icon from 'react-native-vector-icons/Ionicons';

const OutlinedButton = (props) => {

  return (
    <TouchableOpacity {...props} activeOpacity={0.7}
        style={{...styles.button, borderColor: props.variant === "dark" ? "black" : "white"}} >
            <Text style={{...styles.text, color: props.variant === "dark" ? "black" : "white"}}>{props.text}</Text>
            {props.icon && <Icon name={props.icon} style={{...styles.icon,  color: props.variant === "dark" ? "black" : "white"}}/>} 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10, 
    borderRadius: 50,
    borderWidth: 1,
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  icon: {
    width: 20,
    height: 20,  
    fontSize: 22,
    marginLeft: 5, 

  },
  text: {
    fontWeight: 600,
    fontSize: 20
  },
});

export default OutlinedButton;
