import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import FilledButton from "./Design System/Buttons/FilledButton";
import OutlinedButton from "./Design System/Buttons/OutlinedButton";
import SocialButton from "./Design System/Buttons/SocialButton";
import InputComponent from "./Design System/Inputs/input";
import Badge from "./Design System/Badge/Badge";
import MyModal from "./Design System/Modal/Modal";
import MyCard from "./Design System/Modal/MyCard";
import ShareResponse from "./sections/ShareResponse";
import TwitterSection from "./sections/TwitterSection";
import Background from "./Design System/BackGround/GradientBackground";
import SingleIconBar from "./Design System/IconBar/SingleIconBar/";
import Avatar from "./Design System/Avatar/Avatar";
import AddPhotoIcon from "./Design System/Avatar/AddPhotoIcon";
import BillCard from "./Design System/BillCard/BillCard";

import { colors } from "./Design System/Colors";
import BillButton from "./Design System/Buttons/BillButton";
import SignupForm from "./PageComponent/AccountComponent/SignupForm";
import LoginForm from "./PageComponent/AccountComponent/LoginForm";
import BillPage from "./PageComponent/BilllComponent/BillPage";
import IconBar from "./Design System/IconBar/IconBar";
import OpenBill from "./PageComponent/OpenBill/OpenBill";
import ReadMore from "./PageComponent/OpenBill/ReadMore";
import Timeline from "./sections/StatusHistory";
import ProfileComponent from "./PageComponent/ProfileComponent/ProfileComponent";
import SavedBill from "./PageComponent/SavedBillComponent/SavedBill";
import SponsorProfile from "./PageComponent/SponsorProfile/SponsorProfile";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <FilledButton text="Sign Up"/> */}
      {/* <OutlinedButton variant="dark" text="Start Exploring" icon="chevron-forward-outline"/> */}
      {/* <SocialButton variant="dark" text="Twitter" icon={require('./assets/socialIcon/twitter.png')}/> */}
      {/* <BillButton variant="light" text="House" icon="home-outline" gradient={['#FFAABE', '#A18CD1']} color="#F3F3F3" /> */}
      {/* <InputComponent placeholder="Enter Your Name"/> */}
      {/* <Badge badge="Commerce"/> */}
      {/* <MyModal/> */}
      {/* <ShareResponse /> */}
      {/* <TwitterSection shares="322 Shares"/> */}
      {/* <Background gradient={['#FFAABE', '#A18CD1']}/>  */}
      {/* <SingleIconBar icon="home" color="white"/> */}

      {/* <Avatar size={70} source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' }}   gradientColors={['#EA047E',  '#FA7373']}/>
      <Avatar size={100} source={{ uri: 'https://images.unsplash.com/photo-1467742324659-90d71d9a6d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80' }}   gradientColors={['#00AB55', '#B5F498']} />
     */}

      {/* <AddPhotoIcon icon="camera-outline" color="white" gradientColors={['#FFAABE', '#A18CD1']}/> */}

      {/* <BillCard color={colors.primary} text="H.Con.Res. 5: Expressing support for the Nation’s law enforcement agencies and condemning any efforts to defund or dismantle law enforcement agencies." date="Jan 11, 2023" sponsor="Steve Scalise" share="share-outline"/> */}

      {/* <SignupForm/> */}
      {/* <LoginForm/> */}
      <BillPage />
      {/* <IconBar/> */}
      {/* <ProfileComponent/> */}
      {/* <SavedBill/> */}

      {/* <SponsorProfile/> */}

      <OpenBill text="H.Con.Res. 5: Expressing support for the Nation’s law enforcement agencies and condemning any efforts to defund or dismantle law enforcement agencies." date="Jan 11, 2023" sponsor="Steve Scalise" />
      {/* <ReadMore text="H.Con.Res. 5: Expressing support for the Nation’s law enforcement agencies and condemning any efforts to defund or dismantle law enforcement agencies." descripation="This is the one from the 118th Congress.This bill is in the first stage of the legislative process. It was introduced into Congress on January 9, 2023. It will typically be considered by committee next before it is possibly sent on to the House or Senate as a whole.
Other activity may have occurred on another bill with identical or similar provisions.
bill is in the first stage of the legislative  process. It was introduced into Congress on January 9, 2023. It will typically be considered by committee next before it is possibly sent on to the House or Senate as a whole.
Other activity may have occurred on another bill with identical or similar provisions."/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
