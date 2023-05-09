import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator } from 'react-native';
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
 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with setTimeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear timeout if component unmounts
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

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
