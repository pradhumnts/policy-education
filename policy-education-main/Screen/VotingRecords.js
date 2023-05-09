import { useState } from "react";
import { View, ScrollView, Text, StyleSheet, TextInput, FlatList } from "react-native";
import Card from '../Design System/Card';
import { Ionicons } from "react-native-vector-icons";
import MemberVote from '../sections/MemberVote';


const Votedata = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Steve Scalise",
    role: "Representative",
    yes: 18,
    no: 45,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1496088941920-f7d451d95bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxUYVBBUmx3WEYwMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Mark Warner",
    role: "Vice ",
    yes: 10,
    no: 90,
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Katherine Clark",
    role: "Minority Whip",
    yes: 44,
    no: 56,
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Elise Stefanik",
    role: "Conference ",
    yes: 82,
    no: 18,
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8VGFQQVJsd1hGMDB8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "Hakeem Jeffries",
    role: "Minority Leader",
    yes: 55,
    no: 45,
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "Mark Warner",
    role: "Vice ",
    yes: 70,
    no: 40,
  },
];

const VotingRecords = () => {

  const [searchValue, setSearchValue] = useState('');
  const [filteredRecords, setFilteredRecords] = useState(Votedata);

  const handleSearch = (text) => {
    setSearchValue(text);
    setFilteredRecords(Votedata.filter((item) => item.name.toLowerCase().includes(text.toLowerCase())));
  }

  return (
    <ScrollView contentContainerStyle={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.container}>
        <Card style={{ marginBottom: 20, marginTop: 10 }} Heading="Cosponsors of H.R. 82">
          <Text style={{ marginVertical: 10, lineHeight: 20 }}>
            This bill has 177 cosponsors - 124 Democrts, 53 Republicans -
            including its sponsor.
          </Text>
        </Card>
        <View style={styles.inputContainer}>
          <Ionicons name="search-outline" size={22} color="#909090" />
          <TextInput
            onChangeText={handleSearch}
            value={searchValue}
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#909090"
          />
        </View>
        <Card style={{ marginTop: 20 }}><FlatList
          data={filteredRecords}
          renderItem={({ item }) => <MemberVote item={item} />}
          keyExtractor={(item) => item.id}
        /></Card>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
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
    paddingVertical: 20,
  },
})

export default VotingRecords;
