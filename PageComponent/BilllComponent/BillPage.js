import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import BillCard from "../../Design System/BillCard/BillCard";
import { colors } from "../../Design System/Colors";
import Badge from "../../Design System/Badge/Badge";
import BillButtonComponent from "../../Design System/Buttons/BillButtonComponent";
import HeadingComponent from "../../Design System/HeadingComponent/HeadingComponent";

const BillPage = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState("House");

  const handleButtonPress = (buttonText) => {
    setSelectedButton(buttonText);
  };

  return (
    <View style={styles.container}>
      <View>
        <HeadingComponent
          heading="Policy"
          tagline="Make your voice listen to world."
        />
        <BillButtonComponent
          selectedButton={selectedButton}
          handleButtonPress={handleButtonPress}
        />
      </View>
      <View style={styles.badges}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
          <Badge badge="Commerce" />
          <Badge badge="Agriculture and Food" />
          <Badge badge="Agriculture and Food" />
        </ScrollView>
      </View>
      <View style={styles.billCards}>
        <BillCard
          navigation={navigation}
          color={selectedButton === "House" ? colors.primary : colors.secondary}
          text="H.Con.Res. 5: Expressing support for the Nation’s law enforcement agencies and condemning any efforts to defund or dismantle  law enforcement agencies."
          date="Jan 11, 2023"
          sponsor="Steve Scalise"
          share="share-outline"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  badges: {
    height: 40,
    marginVertical: 20,
  },
  billCards: {
    flex: 1,
    
  },
});

export default BillPage;
