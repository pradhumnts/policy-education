import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import OutlinedButton from "../Buttons/OutlinedButton";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
import { colors } from "../Colors";

const BillCard = (props) => {
  const [billSaved, setBillSaved] = useState(true);

  const saveBill = () => {
    setBillSaved(!billSaved);
  };

  const { width, height } = Dimensions.get('window');
  console.log(height)
  return (
    <Animatable.View
      animation={props.backgroundColor ? "bounceIn" : undefined}
      duration={900}
      style={[styles.card, { backgroundColor: props.color }]}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>Bill</Text>
        <View style={styles.iconsContainer}>
          <Icon
            name={props.share}
            style={[styles.icon, { marginRight: 10 }]}
          />
          <Icon
            onPress={() => saveBill()}
            name={billSaved ? "heart" : "heart-outline"}
            style={styles.icon}
          />
        </View>
      </View>
     
      <View style={styles.textContainer}>
        <Text style={styles.cardText} ellipsizeMode="tail" numberOfLines={5}>{props.text}</Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>
          Introduced On: {props.date}
        </Text>
        <Text style={styles.detailText}>Sponsor: {props.sponsor}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <OutlinedButton
          onPress={() => props.navigation.push("Bill")}
          variant="light"
          text="Start Exploring"
          icon="chevron-forward-outline"
        />
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 30,
    padding: 20,
    height: "98%"
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeaderText: {
    color: "white",
    fontSize: 18,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  icon: {
    fontSize: 30,
    color: "white",
  },
  textContainer: {
    marginTop: 20,
  },
  cardText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    color: "white",
    lineHeight: 35,
  },
  detailsContainer: {
    marginTop: 30,
  },
  detailText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default BillCard;
