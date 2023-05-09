import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

const LikeIcon = () => {

  const [rateStar, setRateStar] = useState(true);

  const saveStar = () => {
    setRateStar(!rateStar);
  };
  return (
    <View style={styles.iconContainer}>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 60,
          height: 60,
          borderRadius: 100,
          shadowColor: "#000000",
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 2,  
        }}
      >
        <Icon name="thumbs-down" size={24} color="#D8D8D8" />
      </View>
      <LinearGradient
        colors={["#FFAABE", "#A18CD1"]}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 100,
          elevation: 2,  
        }}
      >
        <Icon name="thumbs-up" size={46} color="#FFFFFF" />
      </LinearGradient>
      <View
  style={{
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 100,
    shadowColor: "#b4b4b4",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,  
  }}
>
  <Icon onPress={() => saveStar()} name={rateStar ? "star" : "star-outline"} size={24} color="#FFAB00" />
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    gap: 30,
    width: "100%",
    top: -50,
  },
});

export default LikeIcon;
