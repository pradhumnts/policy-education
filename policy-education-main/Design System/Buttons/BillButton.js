import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const BillButton = (props) => {
  return (
    <TouchableOpacity style={{ ...props.style }} activeOpacity={0.7} onPress={props.onPress}>
      <LinearGradient
        colors={props.isSelected ? props.gradient : [props.color, props.color]}
        style={[styles.button, props.isSelected && styles.selectedButton]}
      >
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          {props.icon && (
            <Icon
              name={props.icon}
              style={{ ...styles.icon, color: props.isSelected ? 'white' : props.variant === 'dark' ? 'black' : 'white' }}
            />
          )}
          {props.text && (
            <Text style={{ ...styles.text, color: props.isSelected ? 'white' : props.variant === 'dark' ? 'black' : 'white' }}>
              {props.text}
            </Text>
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10, 
  },
  selectedButton: {
    backgroundColor: 'white', // change the color as per your requirement
  },
  text: {
    fontWeight: 700,
    fontSize: 20,
  },
  icon: {
    fontSize: 20,
    marginLeft: 5,
  },
});

export default BillButton;
