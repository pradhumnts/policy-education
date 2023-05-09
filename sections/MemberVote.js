import { View, StyleSheet, Text, Image } from "react-native";
import Rangebar from "./Rangebar";
import ProfileComponent from "../PageComponent/ProfileComponent/ProfileComponent";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const MemberVote = ({ item, navigation }) => {

   
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
          }}
        >
          <TouchableWithoutFeedback onPress={() => navigation.push('ProfileComponent')}>
            <View  style={{ marginRight: 10 }}>
                <Image   style={styles.Voteimage} source={{ uri: item.image }} />
            </View>
          </TouchableWithoutFeedback>

          <View style={{ width:"95%" }}>
            <Text
              style={{
                fontWeight: 700,
                marginVertical: 2,
                marginHorizontal: 2,
                fontSize: 16,
              }}
            >
              {item.name}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.Roletext}>{item.role}</Text>
            </View>
            <View style={{ marginTop: 10, width: "98%" }}>
            <Rangebar style={{width:'100%'}} size={30}/>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <View style={styles.VoteView}>
            <View style={styles.Greenview}></View>
            <Text style={{ color: "#707070" }}>{item.vote_yes} Yes</Text>
          </View>
         
          <View style={styles.VoteView}>
            <View style={{ ...styles.Orangeview }}></View>
            <Text style={{ color: "#707070" }}>{item.vote_no} No</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Maincontainer: {
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    // height: "100%",
    // justifyContent: "center",
  },
  container: {
    flex: 2,
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  Voteimage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  Greenview: {
    backgroundColor: "#00ab55",
    borderRadius: 100,
    padding: 8,
    width: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  Orangeview: {
    backgroundColor: "#ffab00",
    borderRadius: 50,
    padding: 8,
    width: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  VoteView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Roletext: {
    color: "#707070",
    marginVertical: 2,
    flexShrink: 1,
    flex: 1,
    flexGrow: 1,
    marginHorizontal: 2,
  },
});

export default MemberVote;
