import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const ProfileMenu = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.MainView}>
        <View style={styles.IconView}>
          <Ionicons name={item.icon} size={20} />
          <Text style={styles.MenuText}>{item.title}</Text>
        </View>
        <View>
          <Ionicons name="chevron-forward-outline" size={20} color="#8c979f" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  MainView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  IconView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  MenuText: {
    fontSize: 16,
    marginHorizontal: 15,
  },
});

export default ProfileMenu;
