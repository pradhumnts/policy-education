
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputComponent = ({ field = {}, placeholder, margin, secureTextEntry }) => {
  const { onChange, onBlur, value } = field;

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { marginTop: margin }]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    width: '100%',
  },
  input: { 
    paddingVertical: 5,
    borderWidth: 0,
    borderRadius: 5,
    fontSize: 16, 
    
  },
});

export default InputComponent;
