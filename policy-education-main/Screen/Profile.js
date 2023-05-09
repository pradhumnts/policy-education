import { View, StyleSheet, Text } from "react-native"
import Avatar from "../Design System/Avatar/Avatar"
import Badge from "../Design System/Badge/Badge"
import InputComponent from "../Design System/Inputs/input"

const ProfileData = [
    {
        image: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        email: "juinal@studioalva.com"
    }

]

const Profile = () => {
  return (
    <View style={{backgroundColor:"#f7f9fa", height:'100%'}} >
      {ProfileData.map((data, index) => (
        <View>
        <View style={styles.MainView} key={index}>
          <Avatar size={75} source={{ uri: data.image }} />
          <View style={{marginTop:12}}>
          <Badge badge="Change"/>
          </View>
        </View>
        <View style={{backgroundColor:"#fff"}}>
           <InputComponent
            placeholder="first name"
            margin={25}
           />
           <InputComponent
            placeholder="Last name"
            margin={25}
           />
        </View>
        <View>
            <Text style={{backgroundColor:"#f7f9fa", marginVertical:10, padding:16}}>
                ACCOUNT INFORMATION
            </Text>
        </View>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:20, backgroundColor:"#fff" }}>
            <Text>
                Email
            </Text>
            <Text>{data.email}</Text>
        </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    MainView:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    }
})

export default Profile
