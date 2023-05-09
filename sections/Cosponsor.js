import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Avatar from '../Design System/Avatar/Avatar'

const Cosponsor = ({ member, index, length }) => {
  return (
    <View style={{...styles.container, paddingLeft: index === 0 ? 18 : 5,
      paddingRight: index === length - 1 ? 30 : 5,}}>
      <View
        style={{
          marginTop: 20,
          marginBottom: 5,
    
        }}
      >
        <Avatar size={70} source={{ uri: member.image }} />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 20,
        }}
      >
        {member.Firstname}
        {"\n"}
        {member.Lastname}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
});

export default Cosponsor;
