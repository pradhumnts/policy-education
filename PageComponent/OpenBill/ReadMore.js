import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import Card from "../../Design System/Card";

const ReadMore = ({ setIsReadMore, text, descripation }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(false);
  }, [setIsReadMore]);

  const handleReadMoreClose = () => {
    setIsAnimating(true);
    setTimeout(() => setIsReadMore(false), 500);
  };

  const handleReadMoreOpen = () => {
    setIsAnimating(true);
    setTimeout(() => setIsReadMore(true), 500);
  };

  return (
    <Animatable.View
      animation={isAnimating ? "fadeOut" : "fadeIn"}
      duration={300}
      style={styles.overlay}
    >
      <Animatable.View
        animation={isAnimating ? "fadeOut" : "zoomIn"}
        duration={300}
      >
          <TouchableWithoutFeedback style={{paddingHorizontal:10}}>
          <Card>
            <View style={styles.cardContent}>
              <View style={styles.header}>
                <View style={styles.titleContainer}></View>
                <TouchableWithoutFeedback onPress={handleReadMoreClose} style={{ width: 40 }}>
                  <Icon name="close" style={styles.icon} />
                </TouchableWithoutFeedback>
              </View>
        <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.title}>{text}</Text>
              <Text style={styles.description}>{descripation}</Text>
        </ScrollView>
            </View>
          </Card>
        </TouchableWithoutFeedback>
      </Animatable.View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  cardContent: {
    paddingHorizontal: 20,
    height: "100%",
  },
  header: {
    flexDirection: "row",
  },
  titleContainer: {
    width: "90%",
    height: 20,
  },
  icon: {
    fontSize: 26,
    marginLeft: "auto",
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
    color: "black",
    lineHeight: 45,
    marginTop: 20,
  },
  description: {
    fontSize: 18,
    color: "#707070",
    lineHeight: 30,
    marginTop: 30,
  },
});

export default ReadMore;
