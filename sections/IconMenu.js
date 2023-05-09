import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { LinearGradient } from "expo-linear-gradient"; 

const IconMenu = ({item, navigation}) => {

  const handlePress = () => {
    item.title === "3 Voted" && navigation.push("Voterecords")
    item.title === "2 Sponsor" && navigation.push("VotingRecords")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={.5} onPress={() => handlePress(item)}>
        <View key={item.icon} style={styles.box}>
          <View style={styles.LinearView}>
            <LinearGradient
              colors={["#FFAABE", "#A18CD1"]}
              style={styles.gradient}>
              <Ionicons name={item.icon} size={22} color="white" />
            </LinearGradient>
          </View> 

          <View style={{ display:'flex', alignItems:'center' }}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 400, marginVertical: 10, fontSize: 16, textAlign:'center', }}>
              {item.title}
            </Text>
          </View>
        </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({ 
    iconContainer: {
      backgroundColor: '#A18CD1',
      borderRadius: 50,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },  
  container: {
    backgroundColor: "#f3f3f3",
    padding: 12,
    flex: 1,
    borderRadius: 15,
    width: "33.33%",
    
  },
  box: { 
    justifyContent: "center",
    alignItems:'center',
  },
  gradient: {
    padding: 12,
    borderRadius: 100,
    width:50,
    height:50, 
    display:'flex',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  LinearView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IconMenu;
