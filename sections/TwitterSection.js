import React, { useState, useEffect } from 'react'
import MyCard from '../Design System/Modal/MyCard'
import { StyleSheet, ScrollView, Image, Text, View } from 'react-native';
import ModalButton from '../Design System/Modal/ModalButton'
import * as Animatable from "react-native-animatable";

const TwitterSection = (props) => {

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(false);
  }, [props.setIsTwitterSection]);

  const handleTwitterSectionClose = () => {
    setIsAnimating(true);
    setTimeout(() => props.setIsTwitterSection(false), 500);
  };

  const handleTwitterSectionOpen = () => {
    setIsAnimating(true);
    setTimeout(() => props.setIsTwitterSection(true), 500);
  };

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
        <View style={{ height: "100%" }}>
          <MyCard openShareModal={handleTwitterSectionOpen}
            closeShareModal={handleTwitterSectionClose} title="Share your response" subtitle="You like this bill share it with public" closeIcon="close" >

            <View style={styles.container}>
              <View style={styles.icon}>
                <Image style={{ width: 26, height: 26 }} source={require('../assets/socialIcon/twitter.png')} />
              </View>
              <Text style={styles.title}>{props.shares}</Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <ModalButton variant="light" text="Share on Twitter" icon="send" />
            </View>
          </MyCard>
        </View>
      </Animatable.View>
    </Animatable.View>
  )
}
const styles = StyleSheet.create({
  icon: {
    backgroundColor: "#F3F3F3",
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  container: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    marginBottom: 5,
    color: '#707070',
    fontSize: 18,
  },
})

export default TwitterSection