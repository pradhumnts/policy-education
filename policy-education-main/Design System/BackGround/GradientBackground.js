import React, { useState } from "react";
import { Button, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; 

const Background = (props) => {
 

  return (
   
    <LinearGradient colors={props.gradient} style={styles.card}></LinearGradient> 
  );
};

const styles = StyleSheet.create({
  card: {
 
    width :"100%",
    height :"50%",
  },
 
});

export default Background;
