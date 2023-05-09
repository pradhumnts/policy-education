import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Avatar from "../../Design System/Avatar/Avatar";
import Icon from "react-native-vector-icons/Ionicons";
import Card from "../../Design System/Card";
import Badge from "../../Design System/Badge/Badge";
import DetailButton from "./DetailButton";
import Records from '../../sections/Record';
import Listitem from "../../sections/Listitem";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {Alert, Share, Button} from 'react-native';



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

const listData = [
  {
    Industry: "Retired",
    PACs: "$0",
    Total: "$7,168,163",
    Individuals: "$7,168,163",
  },
  {
    Industry: "Securities & investment",
    PACs: "$43,355",
    Total: "$7,345,766",
    Individuals: "$4,542,356",
  },
  {
    Industry: "Real Estate",
    PACs: "$34,567",
    Total: "$6.876,345",
    Individuals: "$1,469,086",
  },
  {
    Industry: "Republication/Conservative",
    PACs: "$14,900",
    Total: "$875,448",
    Individuals: "$7,168,163",
  },
  {
    Industry: "Oil & Gas",
    PACs: "$135,000",
    Total: "$630,785",
    Individuals: "$7,168,163",
  }
];



const SponsorProfile = (props) => {

  const [searchValue, setSearchValue] = useState('');
  const [filteredRecords, setFilteredRecords] = useState(Recorddata);
  const [ellipsisLines, setEllipsisLines] = useState(3)

  const handleSearch = (text) => {
    setSearchValue(text);
    setFilteredRecords(Recorddata.filter((item) => item.summary.toLowerCase().includes(text.toLowerCase())));
  }

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ zIndex: -1 }}>
      <LinearGradient colors={["#E85187", "#A18CD1"]} style={styles.card}>
        <View style={{ padding: 20 }}>
          <View style={{ marginTop: 20, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => props.navigation.pop(1)}
              >
                <Ionicons
                  name="chevron-back-outline"
                  style={{ fontSize: 32, color: "white" }}
                />
              </TouchableOpacity>

              <View style={styles.iconsContainer}>
                  <Icon onPress={onShare} name="share-outline" style={[styles.icon, { marginRight: 10 }]}/>
              </View>

          </View>
          <View style={styles.Avtarview} >
            <Avatar
              size={135}
              source={{
                uri: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
              }}
            />
            <View>
              <Text style={{ fontSize: 28, fontWeight: 500, color: "white" }}>
                Nancy Pelosi
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 300,
                  marginTop: 5,
                  color: "white",
                }}
              >
                Representative (D - CA)
              </Text>
              <View style={styles.Linkview}>
                <Icon name="link" size={20} color="white" style={{ transform: [{ rotate: '130deg' }] }} />
                <Text style={{ fontSize: 18, fontWeight: 500, color: "white", textDecorationLine: 'underline', }}>
                  adams.house.gov
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.BulletView}>
            <Text style={{ fontSize: 16, fontWeight: 500, color: "white" }}>
              First Election : 1997
            </Text>
            <View style={styles.bullet}></View>
            <Text style={{ fontSize: 16, fontWeight: 500, color: "white" }}>
              Next Election : 2022
            </Text>
          </View>
        </View>
      </LinearGradient>

      <View style={{ paddingHorizontal: 12, borderRadius: 30, backgroundColor: "white", marginTop: -25 }}>

        <View>
          <Card Heading="Top Industries, 2021 - 2022" style={{ marginBottom: 0 }}>
            <View>
              <FlatList
                data={listData}
                renderItem={({ item, index }) => {
                  return (
                    <View style={{ borderBottomColor: index === listData.length - 1 ? "white" : '#d4d4d4', borderBottomWidth: index === listData.length - 1 ? 0 : 1 }}><Listitem item={item} /></View>
                  )
                }}
                keyExtractor={(item) => item.Name}
              />
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
              <View style={{ display: 'flex', flexDirection: 'row' }} >
                <View style={styles.Bullet}></View>
                <Text> Total</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={styles.Greenbullet}></View>
                <Text> Individuals</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={styles.Yellowbullet}></View>
                <Text> PACs</Text>
              </View>
            </View>

          </Card>
        </View>

        <View>
          <Card Heading="Description" style={{ marginBottom: 0 }}>

            <Text numberOfLines={ellipsisLines} style={{ fontSize: 16, marginTop: 8, lineHeight: 26 }}>
              Adams is the representative for North Carolina’s 12th congressional
              district (view map) and is a Democrat. She has served Adams is the representative for North Carolina’s 12th congressiona lAdams is the representative for North Carolina’s 12th congressional.
             
            </Text>
            <TouchableOpacity activeOpacity={0.3} onPress={() => ellipsisLines === 0 ? setEllipsisLines(3) : setEllipsisLines(0)}>
                <Text style={{ fontSize: 16 }} >{ellipsisLines === 3 ? "...Read More " : "...Hide"}</Text>
              </TouchableOpacity>
          </Card>
        </View>

        <View>
          <Card Heading="Category" margin={{ marginBottom: 0 }}>
            <View style={styles.Badgeview}>
              <Badge badge="Medical" />
              <Badge badge="Agriculture" />
              <Badge badge="Commerce" />
              <Badge badge="Agricultu and Food" />
              <Badge badge="Arts, Culture, Religion" />
            </View>
          </Card>
        </View>

        <View>
          <Card style={{ marginTop: 0 }} >
            <DetailButton />
          </Card>
        </View>

        <View>
          <Card style={{ marginVertical: 0 }}>
            <View>
              <FlatList
                data={filteredRecords}
                renderItem={({ item }) => <Records navigation={props.navigation} item={item} />}
                keyExtractor={(item) => item.id}
              />
            </View>
          </Card>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingBottom: 50
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  icon: {
    fontSize: 30,
    color: "white",
  },
  bullet: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 4,
    marginVertical: 5,
  },
  BulletView: {
    marginTop: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  Linkview: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  Avtarview: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: 'center',
    marginTop: 40,
  },
  Badgeview: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 10,
  },
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
});

export default SponsorProfile;
