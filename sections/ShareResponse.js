import React, { useState, useEffect } from "react";
import MyCard from "../Design System/Modal/MyCard";
import { Image, View, StyleSheet } from "react-native";
import ModalInput from "../Design System/Modal/ModalInput";
import ModalButton from "../Design System/Modal/ModalButton";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable"; 

const ShareResponse = (props) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleShareResponseClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      props.setIsShareResponseOpen(false);
    }, 500);
  };

  const handleShareResponseOpen = () => {
    setIsAnimating(true);
    setTimeout(() => {
      props.setIsShareResponseOpen(true);
    }, 500);
  };

  useEffect(() => {
    setIsAnimating(false);
  }, [props.isShareResponseOpen]);

  const handleTwitterSection = () => {
    handleShareResponseClose()
    setTimeout(() => props.handleTwitterModal(true), 500)
  }

  return (
    <Animatable.View
      animation={isAnimating ? "fadeOut" : "fadeIn"}
      duration={300}
      style={{
        ...StyleSheet.absoluteFillObject,
        zIndex: 2,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Animatable.View
        animation={isAnimating ? "fadeOut" : "zoomIn"}
        duration={300}
      >
        <TouchableWithoutFeedback>
          <View style={{ height: "100%" }}>
            <MyCard
              openShareModal={handleShareResponseOpen}
              closeShareModal={handleShareResponseClose}
              title="Share your response"
              subtitle="Share your opinion with the sponser"
              closeIcon="close"
            >
              <View style={styles.container}>
                <View style={styles.icon}>
                  <Image
                    style={{ width: 45, height: 45 }}
                    source={require("../assets/socialIcon/gmail.png")}
                  />
                </View>
              </View>
              <ModalInput placeholder="Your message..." />
              <TouchableWithoutFeedback onPress={() => handleTwitterSection()}>

              <ModalButton variant="light" text="Send Email" icon="send" />
              </TouchableWithoutFeedback>
            </MyCard>
          </View>
        </TouchableWithoutFeedback>
      </Animatable.View>
    </Animatable.View> 
  );
};

export default ShareResponse;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 30,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
  },
  container: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    backgroundColor: "#F3F3F3",
    width: 80,
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  closeicon: {
    width: 20,
    height: 20,
    fontSize: 26,
    marginLeft: "auto",
    marginBottom: 5,
  },
});
