import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

const SingleIconBar = ({ icon, selected, onPress }) => {
  const backgroundColor = selected ? "#A18CD1" : "white";
  const color = selected ? "white" : "black";

  return (
    <Animatable.View
      animation={selected ? "bounceIn" : undefined}
      duration={400}
    >
      <TouchableOpacity
        style={[styles.iconContainer, { backgroundColor }]}
        underlayColor="transparent"
        onPress={onPress}
      >
        <Icon name={icon} size={25} color={color} />
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    transition: 1000,
  },
});

export default SingleIconBar;
