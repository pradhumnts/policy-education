import React, { useRef, useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import InputComponent from '../../Design System/Inputs/input';
import FilledButton from '../../Design System/Buttons/FilledButton';
import SocialButton from '../../Design System/Buttons/SocialButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
});

const SignupForm = ({ navigation }) => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const handlePress = () => {
    navigation.push('Login'); // Navigate to the screen with the name "AnotherScreen"
  }
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values) => {
    console.log(values); 
    setLoggedIn(true);
  };




  return (
    <ScrollView
    contentContainerStyle={{ backgroundColor: "white", flex: 1 }}
      overScrollMode="always"
      bounces={true}
      style={{ width: "100%" }}>
      <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 30, fontWeight: 800 }}>Sign up</Text>
          <Text style={{ color: "#807D7D", marginTop: 5 }}>Create your account.</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Controller
            control={control}
            render={({ field }) => (
              <InputComponent
                placeholder="Email / Phone number"
                field={field}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={{ color: 'red', marginTop: 5 }}>{errors.email.message}</Text>
          )}

          <Controller
            control={control}
            render={({ field }) => (
              <InputComponent
                placeholder="Password"
                margin={35}
                secureTextEntry={true}
                field={field}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={{ color: 'red', marginTop: 5 }}>{errors.password.message}.</Text>
          )}

          <Controller
            control={control}
            render={({ field }) => (
              <InputComponent
                placeholder="Confirm Password"
                margin={35}
                secureTextEntry={true}
                field={field}
              />
            )}
            name="confirmPassword"
          />
          {errors.confirmPassword && (
            <Text style={{ color: 'red', marginTop: 5 }}>{errors.confirmPassword.message}.</Text>
          )}

          <View style={{ marginTop: 50 }}>
            <FilledButton text="Sign Up" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.hr} />
          <Text style={styles.text}>Or Login With</Text>
          <View style={styles.hr} />
        </View>


        <View style={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', gap: 20, marginTop: 30 }}>
          <SocialButton variant="dark" text="Twitter" icon={require('../../assets/socialIcon/twitter.png')} />
          <SocialButton variant="dark" text="Google" icon={require('../../assets/socialIcon/google.png')} />
        </View>

        <View style={{ marginTop: 70, marginBottom: 50 }}>
          <Text style={{ textAlign: 'center', fontWeight: 400, fontSize: 16 }}>Already have an account? <Text style={{color:'#A18CD1', fontWeight:600, textDecorationLine: 'underline'}} onPress={handlePress}>Log in</Text> </Text>
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


export default SignupForm;
