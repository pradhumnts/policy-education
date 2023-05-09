import { View, Text, StyleSheet } from 'react-native';


const Listitem = ({ item }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16 }}>
      <View>
        <Text style={{ fontWeight: 600, marginBottom: 4 }}>{item.Industry}</Text>
        <View style={{display:'flex', flexDirection:'row'}}>
        <View style={styles.Bullet}></View>
        <Text style={{ color: '#a7b1b9', fontWeight: 600 }}>{item.Total}</Text>
        </View>
      </View>
      <View>
        <View style={{display:'flex', flexDirection:'row'}}>
        <View style={styles.Yellowbullet}></View>
        <Text style={{ color: '#a7b1b9', textAlign: 'right', marginBottom: 4, fontWeight: 600 }}>{item.PACs}</Text>
        </View>
        <View style={{display:'flex', flexDirection:'row'}}>
        <View style={styles.Greenbullet}></View>
        <Text style={{ fontWeight: 600 }}>{item.Individuals}</Text>
        </View>
      </View>
      {/* <View style={{ borderBottomColor: '#d4d4d4', borderBottomWidth: 1, marginBottom: 10, marginTop: 10 }} /> */}
    </View>
  
  )
}
const styles = StyleSheet.create({
  Bullet: {
    backgroundColor: "red",
    borderRadius: 50,
    padding: 5,
    width: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  Greenbullet: {
    backgroundColor: "green",
    borderRadius: 50,
    padding: 5,
    width: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  Yellowbullet: {
    backgroundColor: "#ffab00",
    borderRadius: 50,
    padding: 5,
    width: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
  }
})

export default Listitem;
