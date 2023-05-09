import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import InputComponent from '../../Design System/Inputs/input';
import FilledButton from '../../Design System/Buttons/FilledButton';
import SocialButton from '../../Design System/Buttons/SocialButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});


const ForgotPassword = ({ navigation }) => {

  const handlePress = () => {
    navigation.push('Login'); // Navigate to the screen with the name "AnotherScreen"
  }
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values) => { 
    navigation.push('ResetPassword');
  };




  return (
    <ScrollView
    contentContainerStyle={{ backgroundColor: "white", flex: 1 }}
    overScrollMode="always"
    bounces={true}
    style={{ width: "100%" }}>
    <View style={{paddingHorizontal: 20, marginTop: 50}}>
    <View style={{marginTop: 50}}>
        <Text style={{fontSize: 30, fontWeight: 800}}>Forgot Password</Text>
        <Text style={{color: "#807D7D", marginTop: 5}}>Change your password.</Text>
    </View> 
    <View style={{marginTop: 50}}>
    <Controller
            control={control}
            render={({ field }) => (
              <InputComponent placeholder="Email" field={field} />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={{ color: "red", marginTop: 5 }}>
              {errors.email.message}
            </Text>
          )}

         

        <View style={{ marginTop: 50 }}>
          <FilledButton text="Send Email" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
 

    <View style={{marginTop: 70, marginBottom: 50}}> 
        <Text style={{textAlign: 'center', fontWeight: 400, fontSize:16}}>Already have an account? <Text style={{color:'#A18CD1', fontWeight:600, textDecorationLine: 'underline'}} onPress={handlePress}>Log in</Text> </Text>
    </View>

    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 50,
    },
    hr: {
      flex: 1,
      height: 1,
      backgroundColor: '#ccc',
      marginHorizontal: 10,
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      marginHorizontal: 10,
    },
  });
  

export default ForgotPassword;
