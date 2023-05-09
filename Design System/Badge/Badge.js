import React, { useState } from "react";
import { Button, View, StyleSheet, TouchableOpacity, Text } from "react-native"; 

const Badge = (props) => {
 

  return ( 
        <View style={styles.container}><Text style={styles.text}>
          {props.badge}
        </Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        container:{
            backgroundColor: '#F3F3F3', 
            borderRadius: 50, 
            paddingHorizontal: 20,
            paddingVertical: 10,  
        },
      text: {
        fontSize: 16, 
        color: '#707070',
      },
    });

export default Badge;
