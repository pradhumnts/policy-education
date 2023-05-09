import { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from 'react-native'
import { Ionicons } from 'react-native-vector-icons';
import Record from '../sections/Record';
import Card from '../Design System/Card';
import HeadingComponent from "../Design System/HeadingComponent/HeadingComponent";
import { ScrollView } from "react-native-gesture-handler";

const Recorddata = [
    {
        id: "1",
        summary: "H.R. 201: To provide for the award of a gold medal to the 369th Infantry Regiment, commonly known as the “Harlem Hellfighters”, in recognition of their bravery and outstanding service during World War.",
        name: "Ralph Norman",
        date: "23 April 2017",
        vote: "yes",
    },
    {
        id: "2",
        summary: "S. 240: To amend the Internal Revenue Code of 1986 to provide tax credits for energy storage technologies, and for other purposes",
        name: "Jane Smith",
        date: "12 May 2018",
        vote: "No",
    },
    {
        id: "3",
        summary: "H.R. 375: To provide for the establishment of a national network of electric vehicle charging stations, and for other purposes.",
        name: "John Doe",
        date: "8 September 2019",
        vote: "No",
    },
    {
        id: "4",
        summary: "H.R. 185: To terminate the requirement imposed by the Director of the Centers for Disease Control and Prevention for proof of COVID-19 vaccination for foreign travelers, and for other purposes.",
        name: "Susan Johnson",
        date: "3 June 2020",
        vote: "No",
    },
    {
        id: "5",
        summary: "H.R. 610: To amend the Fair Credit Reporting Act to provide for enhanced accuracy and transparency in the consumer reporting process, and for other purposes.",
        name: "Mike Brown",
        date: "9 November 2020",
        vote: "yes",
    },
    {
        id: "6",
        summary: "S. 721: To establish the National Commission to Investigate the January 6 Attack on the United States Capitol Complex, and for other purposes.",
        name: "Linda Lee",
        date: "14 January 2021",
        vote: "No",
    },
    {
        id: "7",
        summary: "H.R. 780: To provide for the cancellation of certain amounts owed with respect to Department of Agriculture rural housing programs, and for other purposes.",
        name: "David Kim",
        date: "28 march 2021",
        vote: "yes",
    },
    {
        id: "8",
        summary: "S. 896: To promote the research, development, and demonstration of technologies to remove carbon dioxide from the atmosphere and oceans, and for other purposes.",
        name: "Susan Johnson",
        date: "28 February 2021",
        vote: "No",
    },
];


const Search = ({ navigation }) => {

    const [searchValue, setSearchValue] = useState('');
    const [filteredRecords, setFilteredRecords] = useState([]);

    const handleSearch = (text) => {
        setSearchValue(text);
        setFilteredRecords(Recorddata.filter((item) => item.summary.toLowerCase().includes(text.toLowerCase())));
    }

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View>
                <HeadingComponent heading="Search" tagline="Find your voice listen to world."/>
            </View>
            <View style={{paddingHorizontal:10}}>
            <View style={styles.inputContainer}>
                <Ionicons name="search-outline" size={22} color="#909090" />
                <TextInput
                    onChangeText={handleSearch}
                    value={searchValue}
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor="#909090"
                />
                <Ionicons name="options-outline" size={22} color="#a18cd1" />
            </View>
            

                <View style={{ paddingHorizontal: 10 }}>
                <FlatList showsVerticalScrollIndicator={false}
                    data={filteredRecords} 
                    renderItem={({ item }) => <Record navigation={navigation} item={item} />}
                    keyExtractor={(item) => item.id}
                />
                <View/>
                </View>

                <View style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:30, fontWeight:700}}>Search Bills</Text>
                    <Text style={{marginTop:10}}>Type Somthing for search bills</Text>
                </View>

            </View>


            {/* <Card>
                {Recorddata.map((item, index) => (
                    <View>
                         <FlatList
                    data={filteredRecords}
                    renderItem={({ item }) => <Records item={item} />}
                    keyExtractor={(item) => item.id}
                />
                        <View style={{ borderBottomColor: '#d4d4d4', borderBottomWidth: 1, marginBottom: 15, marginTop: 5 }} />
                    </View>
                ))}
            </Card> */}

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 20,
    },
    input: {
        marginLeft: 10,
        fontSize: 16,
        flex: 1,
        paddingVertical: 10,
    },
});

export default Search;
