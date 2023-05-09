import { View, StyleSheet, Image, Text } from "react-native";
import Card from "../Design System/Card";

const Democrts = ({ item }) => {
    
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
          <View style={{ marginRight: 10 }}>
            <Image style={styles.Voteimage} source={{ uri: item.image }} />
          </View>
          <View>
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
          </View>
        </View>
        <View>
          <View style={{...styles.Greenview, backgroundColor: item.party === 'R' ? '#f83631' : '#0044c9'}}>
            <Text style={{ color:"white", fontWeight:700, }}>{item.party}</Text>
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
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  Greenview: {
    borderRadius: 4,
    padding: 8,
    width: 32,
    height:32,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  Roletext: {
    width: 100,
    color: "#707070",
    marginVertical: 2,
    flexShrink: 1,
    flex: 1,
    flexGrow: 1,
    marginHorizontal: 2,
  },
});

export default Democrts;
