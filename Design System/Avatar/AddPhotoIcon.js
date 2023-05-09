import React, { useState } from "react";
import {View, StyleSheet , Text } from "react-native"; 
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
 

const AddPhotoIcon = (props) => {
  return (
    <View style={styles.iconContainer}>
  <LinearGradient colors={props.gradientColors}style={{display:'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', borderRadius: 100}}>
  <Icon name={props.icon} size={26} color={props.color} /> 
 
    </LinearGradient>

</View>
  )
}

const styles = StyleSheet.create({
    iconContainer: {
      backgroundColor: '#A18CD1',
      borderRadius: 50,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    }, 
  });

export default AddPhotoIcon