import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, FlatList } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import Card from "../Design System/Card";
import Democrts from "../sections/Democrts"; 
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Democrtsdata = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80",
    name: "Steve Scalise",
    role: "Primary Sponsor",
    party: "R"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1594743794748-b6b721775767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Elise Stefanik",
    role: "Original Sponsor",
    party: "R"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Mark Warner",
    role: "Primary Sponsor",
    party: "D"
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Kevin McCarty",
    role: "Original Sponsor",
    party: "R"
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1572863141204-83031c77e65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "John Thune",
    role: "Primary Sponsor",
    party: "D"
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1631377307479-99d966c84eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Minority Whip",
    role: "Original Sponsors",
    party: "D"
  },
  {
    id: "7",
    image: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Steve Scalise",
    role: "Original Sponsors",
    party: "R"
  },
  {
    id: "8",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Katherine Clark",
    role: "Primary Sponsors",
    party: "D"
  },
  {
    id: "9",
    image: "https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    name: "Elise Stefanik",
    role: "Original Sponsors",
    party: "R"
  },
];

const Cosponsors = ({props, navigation}) => {

  const [searchValue, setSearchValue] = useState('');
  const [filteredRecords, setFilteredRecords] = useState(Democrtsdata);
 

  const handlePress = () => {
    navigation.push('SponsorProfile'); 
  }

  const handleSearch = (text) => {
    setSearchValue(text);
    setFilteredRecords(Democrtsdata.filter((item) => item.name.toLowerCase().includes(text.toLowerCase())));
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Card Heading="Cosponsors of H.R. 2" style={{marginBottom:20}}>
          <Text style={{ marginVertical: 10 }}>
            This bill has 177 cosponsors - 124 Democrts, 53 Republicans -
            including its sponsor.
          </Text>
        </Card>
        <View style={styles.inputContainer}>
          <Ionicons name="search-outline" size={22} color="#707070" />
          <TextInput
            onChangeText={handleSearch}
            value={searchValue}
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#707070"
          />
        </View>
        <Card style={{marginTop:20}}><FlatList
          data={filteredRecords}
          renderItem={({ item }) => 
          <TouchableWithoutFeedback onPress={handlePress}>
            <Democrts item={item} />
            </TouchableWithoutFeedback>}
          keyExtractor={(item) => item.id}
        /></Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10, 
    paddingTop: 0
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    paddingHorizontal: 10, 
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    paddingVertical: 10,
  },
});

export default Cosponsors;
