import { View, TouchableOpacity } from "react-native";
import SingleIconBar from "../Design System/IconBar/SingleIconBar";

export default function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ backgroundColor: "white" }}>
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        borderTopColor: "#DFE3E8",
        elevation: 5,
        elevation: 20,
        borderRadius:20,
        shadowColor: 'black',
        ...Platform.select({
            ios: {
              shadowOffset: { width: 0, height: -7 },
              shadowColor: '#b4b4b4',
              shadowOpacity: 0.3,
              shadowRadius: 10,
              borderRadius:20,
            },
          }),
        paddingVertical: 15,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onLongPress={onLongPress}
            activeOpacity={0.8}
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SingleIconBar
              onPress={onPress}
              icon={
                route.name == "Home"
                  ? isFocused
                    ? "home"
                    : "home-outline"
                  : route.name == "Saved Bill"
                  ? isFocused
                    ? "bookmarks"
                    : "bookmarks-outline"
                  : route.name == "Search"
                  ? isFocused
                    ? "search"
                    : "search-outline"
                  : isFocused
                  ? "person-circle"
                  : "person-circle-outline"
              }
              selected={isFocused}
            />
          </TouchableOpacity>
        );
      })}
    </View>
    </View>
  );
}
