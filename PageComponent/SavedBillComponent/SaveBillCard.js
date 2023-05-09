import React, { useState } from "react";
import { Button, View, StyleSheet, TouchableOpacity, Text } from "react-native";  
import Icon from 'react-native-vector-icons/Ionicons'; 
import * as Animatable from "react-native-animatable";
import Swiper from 'react-native-swiper';
import {Alert, Share} from 'react-native';

const SaveBillCard = (props) => {


  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  
  return (
   
    <Animatable.View
    animation={props.backgroundColor ? 'bounceIn' : undefined}
    duration={900}
    style={[styles.card, { backgroundColor: props.color }]}
  >
        <View style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
            <Text style={{color: 'white', fontSize :18}}>Bill</Text>
            <View style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center', gap: 10}}>
                <Icon onPress={onShare} name={props.share} style={{fontSize: 30, color: 'white'}}/> 
            </View>
        </View>
        <Swiper>
          <View style={{marginTop: 20}}>
            <Text style={[styles.text]}>{props.text}</Text>
          </View>
        </Swiper>
        <View style={{marginTop: 30, marginBottom:50}}>
            <Text style={[styles.detail]}>Introduced On : {props.date}</Text>
            <Text style={[styles.detail]}>Sponsor : {props.sponsor}</Text>
        </View>
        
        </Animatable.View>
  );
};

const styles = StyleSheet.create({
  card: { 
    borderRadius: 30,
    padding: 20,
    height:430
  },
  text:{
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    color: "white",
    lineHeight: 35,
  },
  detail:{
    fontSize: 18,
    color: "white",
    fontWeight: 700,
    marginBottom: 10
  }
 
});


export default SaveBillCard;
