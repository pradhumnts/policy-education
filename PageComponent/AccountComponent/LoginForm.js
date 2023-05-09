import React, { useRef, useState, useContext } from "react"; 
import AuthContext from "../../context/AuthContext";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Switch,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import InputComponent from "../../Design System/Inputs/input";
import FilledButton from "../../Design System/Buttons/FilledButton";
import SocialButton from "../../Design System/Buttons/SocialButton";

// import CheckBox from '@react-native-community/checkbox';

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

const LoginForm = ({ navigation }) => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const handlePress = () => {
    navigation.push('Signup'); // Navigate to the screen with the name "AnotherScreen"
  }
  const handleForgotPass = () => {
    navigation.push('ForgotPassword'); // Navigate to the screen with the name "AnotherScreen"
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values) => {
    console.log(values);
    setLoggedIn(true);
  };

  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <ScrollView
    contentContainerStyle={{ backgroundColor: "white", flex: 1 }}
      overScrollMode="always"
      bounces={true}
      style={{ width: "100%" }}
    >
      <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
        <View style={{ marginTop: 50 }}>
          <Text style={{ fontSize: 30, fontWeight: 800 }}>Log in</Text>
          <Text style={{ color: "#807D7D", marginTop: 5 }}>
            Welcome back! Please enter your details.
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
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
            <Text style={{ color: "red", marginTop: 5 }}>
              {errors.password.message}.
            </Text>
          )}

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Switch value={rememberMe} onValueChange={setRememberMe} />
              <Text style={{ marginLeft: 10, color: "#707070" }}>
                Remember me
              </Text>
            </View> */}
            <View></View>
            <Text style={{ color: "#707070" }} onPress={handleForgotPass}>Forgot Password ?</Text>
          </View>

          <View style={{ marginTop: 50 }}>
          {loggedIn ?<Text>Welcome, user!</Text> : <FilledButton text="Log In" onPress={handleSubmit(onSubmit)} />}
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.hr} />
          <Text style={styles.text}>Or Login With</Text>
          <View style={styles.hr} />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            marginTop: 30,
          }}
        >
          <SocialButton
            variant="dark"
            text="Twitter"
            icon={require("../../assets/socialIcon/twitter.png")}
          />
          <SocialButton
            variant="dark"
            text="Google"
            icon={require("../../assets/socialIcon/google.png")}
          />
        </View>

        <View style={{ marginTop: 70, marginBottom: 50 }}>
          <Text style={{ textAlign: "center", fontWeight: 400, fontSize: 16 }}>
          
            Don't have an account? <Text style={{color:'#A18CD1', fontWeight:600, textDecorationLine: 'underline'}} onPress={handlePress}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default LoginForm;
