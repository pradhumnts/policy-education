import React, { useState } from "react";
import { Button, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const FilledButton = (props) => {
 

  return (
    <TouchableOpacity onPress={() => props.onPress()}  activeOpacity={0.7}> 
        <LinearGradient colors={['#A18CD1', '#FFAABE']} style={styles.button} >
            <Text style={styles.text}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { 
    paddingVertical: 10, 
    borderRadius: 50,
  },
  text: {
    color: "white",
    fontWeight: 600,
    fontSize: 18,
    textAlign: "center",
  },
});

export default FilledButton;
