import React from 'react';
import { StyleSheet, ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const MyCard = (props) => {
  return (
    <View style={{ height: '100%', flex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           
          <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.header}>
        <View style={styles.titleContainer}></View>
        <TouchableWithoutFeedback onPress={props.closeShareModal} >
          <Icon name={props.closeIcon} style={styles.closeicon} />
        </TouchableWithoutFeedback>
        </View>
        </View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
        <View>{props.children}</View>
      </View>
  </View> 
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 30,
    paddingTop: 20,
  },
  cardContent: {
    paddingHorizontal: 20, 
  },
  header: {
    flexDirection: "row",
  },
  titleContainer: {
    width: "90%",
    height: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
  },
  container: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: '#F3F3F3',
    width: 80,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  closeicon: {
    width: 20,
    height:20,
    fontSize: 26,
    marginLeft: 'auto',
    marginBottom: 5, 
  },
});

export default MyCard;
