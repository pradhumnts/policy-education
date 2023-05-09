import React, { createContext, useContext, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigation from "./Navigation/TabNavigation";
import Constants from 'expo-constants';
import StackNavigation, {AuthNavigation} from "./Navigation/TabNavigation";
import Democrts from "./sections/Democrts";
import Cosponsors from "./Screen/Cosponsors";
import Search from "./Screen/Search";
import Record from "./sections/Record";
import Voterecords from "./Screen/Voterecords";
import VotingRecords from "./Screen/VotingRecords";
import ProfileComponent from "./PageComponent/ProfileComponent/ProfileComponent";
import Rangebar from "./sections/Rangebar";
import SponsorProfile from "./PageComponent/SponsorProfile/SponsorProfile";
import ExampleComponent from "./PageComponent/SponsorProfile/DetailButton";
import AuthContext from './context/AuthContext';
import Emails from './Screen/Emails';
import Email from './Screen/Email';
import CategoryBills from './Screen/CategoryBills';
import Profile from './Screen/Profile';


export default function App() {
 
  const [loggedIn, setLoggedIn] = useState(true);
  

  return (
    <>
      <View style={styles.container}>
      <View style={{ height: Constants.statusBarHeight }}></View>
      <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
      <NavigationContainer>
        {/* {loggedIn ? <StackNavigation /> : <AuthNavigation />} */}
        {/* <Emails/> */}
        {/* <Email/> */}
        {/* <CategoryBills/> */}
        <Profile/>
      </NavigationContainer>
    </AuthContext.Provider>
      </View>

      <View>
        {/* <Cosponsors/>
        <Search/>  
        <Voterecords/>
        <VotingRecords/>  */}
        {/* <SponsorProfile/> */}
        
        {/* <ExampleComponent/> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
  },
});
