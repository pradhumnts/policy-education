import React, { useContext } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import HeadingComponent from '../../Design System/HeadingComponent/HeadingComponent'
import Avatar from '../../Design System/Avatar/Avatar'
import IconMenu from '../../sections/IconMenu'
import ProfileMenu from '../../sections/ProfileMenu'
import Card from "../../Design System/Card";
import AddPhotoIcon from '../../Design System/Avatar/AddPhotoIcon' 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import AuthContext from '../../context/AuthContext' 

const ProfileComponent = ({props, navigation}) => {
  const { setLoggedIn } = useContext(AuthContext);
 
    const Icondata = [
        {
          title: "2 Sponsor",
          icon: "home-outline",
        },
        {
          title: "3 Voted",
          icon: "heart-outline",
        },
        {
          title: "15 Shared",
          icon: "share-social-outline",   
        },
      ]

      const ListMenu = [
        {
          title: "Edit Profile",    
          icon: "person-add-outline",    
        },    
        {    
          title: "Email",    
          icon: "mail-outline",    
        },    
        {    
          title: "Rate Us",    
          icon: "star-outline",    
        },    
        {    
          title: "Logout",    
          icon: "log-out-outline",    
        },    
      ]

  return (
    <ScrollView style={{ width: '100%', backgroundColor: "#fff", flex: 1}}>
      <View style={{paddingHorizontal: 10 }}>
        <HeadingComponent heading="Profile" tagline="Make your voice listen to world."/>
        <View style={{display:'flex', alignItems:'center', marginTop:20, position:'relative'}}>
            <Avatar size={150} source={{ uri: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80' }}   gradientColors={['#FFAABE', '#A18CD1']} />
            <View style={{position:'absolute', left:210, bottom:70}}><AddPhotoIcon icon="camera-outline" color="white" gradientColors={['#FFAABE', '#A18CD1']}/></View>
            <Text style={{fontSize:22, fontWeight:700, marginTop:10}}>Aurora Rachel</Text>
            <Text  style={{color:"#707070", marginTop:10}}>Aurorarachel123@gmail.com</Text>
        </View>

        <View style={{marginTop:20}}>
          <View style={{display:'flex', flexDirection:'row', gap:10}}>
          {Icondata.map((item, index) => (

              <IconMenu item={item} navigation={navigation} key={index} />
        
            
            ))} 
        </View>
        </View> 

        <View >
            <Card style={{marginTop:20}}>
                {ListMenu.map((item, index) => (
                  <TouchableWithoutFeedback onPress={item.title === "Logout" ? () => setLoggedIn(false) : () => {}}>
                    <ProfileMenu item={item} key={index} />
                  </TouchableWithoutFeedback>
                ))}
            </Card>
        </View>
    </View>
        {/* <View>
          <IconBar />
        </View> */}
    </ScrollView>
  )
}; 

export default ProfileComponent