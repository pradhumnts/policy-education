import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createAuthStackNavigator } from "@react-navigation/stack";

import BillPage from "../PageComponent/BilllComponent/BillPage";
import SavedBill from "../PageComponent/SavedBillComponent/SavedBill";
import ProfileComponent from "../PageComponent/ProfileComponent/ProfileComponent";
import OpenBill from "../PageComponent/OpenBill/OpenBill";
import Cosponsors from "../Screen/Cosponsors";
import VotingRecords from "../Screen/VotingRecords";
import MyTabBar from "./TabBar";
import Search from "../Screen/Search";
import LoginForm from "../PageComponent/AccountComponent/LoginForm";
import SignupForm from "../PageComponent/AccountComponent/SignupForm";
import ForgotPassword from "../PageComponent/AccountComponent/ForgotPassword";
import SponsorProfile from "../PageComponent/SponsorProfile/SponsorProfile";

const MainTab = createBottomTabNavigator();
const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();

const MainTabNavigation = () => {
  return (
    <MainTab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          display: "none",
        },
        tabBarActiveTintColor: "#00AB55",
        tabBarInactiveTintColor: "gray",
        tabBarVisibility: false,
      }}
    >
      <MainTab.Screen name="Home" component={BillPage} />
      <MainTab.Screen name="Search" component={Search} />
      <MainTab.Screen name="Saved Bill" component={SavedBill} />
      <MainTab.Screen name="Account" component={ProfileComponent} />
    </MainTab.Navigator>
  );
};

function StackNavigation() {
  return (
    <MainStack.Navigator>

      <MainStack.Screen
        name="Main"
        options={{
          headerShown: false,
        }}
        component={MainTabNavigation}
      />

      <MainStack.Screen name="Bill" options={{ headerShown: false, tabBarVisible: false }} component={OpenBill} />
      <MainStack.Screen name="Cosponsors" options={{ tabBarVisible: false }} component={Cosponsors} />
      <MainStack.Screen name="VotingRecords" options={{ tabBarVisible: false }} component={VotingRecords} />
      <MainStack.Screen name="SponsorProfile" options={{ headerShown: false, tabBarVisible: false }} component={SponsorProfile} />
      

    </MainStack.Navigator>
  );
}

export function AuthNavigation() {
  return(
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" options={{ tabBarVisible: false, headerShown: false }} component={LoginForm} />
        <AuthStack.Screen name="Signup" options={{ tabBarVisible: false, headerShown: false }} component={SignupForm} />
        <AuthStack.Screen name="ForgotPassword" options={{ tabBarVisible: false, headerShown: false }} component={ForgotPassword} />
    </AuthStack.Navigator>

  )
}



export default StackNavigation;
