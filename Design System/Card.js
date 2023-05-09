import React from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'

const Card = (props) => {
    return (
        <View style={{...styles.Card, ...props.style }}>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            {props.Heading && <Text style={{...styles.CardHeader, ...props.headerStyles}}>{props.Heading}</Text>}
            {props.SubHeading && <Text onPress={() => props.navigation.push("Cosponsors")} style={{  ...styles.SubHeading, ...props.headerStyles}}>{props.SubHeading}</Text>}
          </View>
        <View>{props.children}</View>
    </View>
    );
  };

const styles = StyleSheet.create({
    Card: {
        marginVertical:15,
        backgroundColor: "white",
        paddingVertical:15,
        paddingHorizontal:15,
        elevation: 20,
        borderRadius:20,
        shadowColor: 'black',
        ...Platform.select({
            ios: {
              shadowOffset: { width: 0, height: 2 },
              shadowColor: '#b4b4b4',
              shadowOpacity: 0.3,
              shadowRadius: 10,
              borderRadius:20,
            },
          }),
    },
    CardHeader: {
        fontSize:20,
        fontWeight:500, 
    },
    SubHeading: {
      color:'#707070',
      fontSize:16,
    }
});

export default Card