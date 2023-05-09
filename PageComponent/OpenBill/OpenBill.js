import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import Membercard from "../../sections/Membercard";
import Card from "../../Design System/Card";
import Cosponsor from "../../sections/Cosponsor";
import VoteButton from "../../sections/VoteButton";
import StatusHistory from "../../sections/StatusHistory";
import ShareResponse from "../../sections/ShareResponse";
import ReadMore from "./ReadMore";
import TwitterSection from '../../sections/TwitterSection'; 
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const OpenBill = (props) => {
  const person = {
    text: "H.Con.Res. 5: Expressing support for the Nation’s law enforcement agencies and condemning any efforts to defund or dismantle law enforcement agencies.",
    date: "Jan 11, 2023",
    sponsor: "Steve Scalise",
  };

  const [isShareResponseOpen, setIsShareResponseOpen] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  const [isTwitterSection, setIsTwitterSection] = useState(false);


  const [billSaved, setBillSaved] = useState(true);

  const handleTwitterModal = (value) => {
    setIsTwitterSection(value)
  }

  const saveBill = () => {
    setBillSaved(!billSaved);
  }; 

  // const handlePress = () => {
  //   navigation.push('SponsorProfile'); 
  // }

  const Votedata = [
    {
      image:
        "https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Steve Scalise",
      role: "Representative",
      vote_yes: 78,
      vote_no: 22,
    },
    {
      image:
        "https://images.unsplash.com/photo-1619380612094-d06429fa92d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Katherine Clark",
      role: "Minority Whip",
      vote_yes: 44,
      vote_no: 56,
    },

    {
      image:
        "https://images.unsplash.com/flagged/photo-1559475555-b26777ed3ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      name: "Elise Stefanik",
      role: "Conference Chair",
      vote_yes: 82,
      vote_no: 18,
    },

    {
      image:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

      name: "Hakeem Jeffries",

      role: "Minority Leader",

      vote_yes: 55,

      vote_no: 45,
    },

    {
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

      name: "Mark Warner",

      role: "Vice ",

      vote_yes: 10,

      vote_no: 90,
    },
  ]

  const Memberdata = [
    {
      image:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",

      name: "Steve Scalise",

      role: "Sponsor",

      votes: 200,
    },

    {
      image:
        "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",

      name: "Steve Scalise",

      role: "Sponsor",

      votes: 200,
    },

    {
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

      name: "Elise Stefanik",

      role: "Minority Whip",

      votes: 37,
    },

    {
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",

      name: "Elise Stefanik",

      role: "Representative",

      votes: 94,
    },

    {
      image:
        "https://images.unsplash.com/photo-1631377307479-99d966c84eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

      name: "Steve Scalise",

      role: "Representative",

      votes: 14,
    },
  ];

  const CosponsorData = [
    {
      image:
        "https://images.unsplash.com/flagged/photo-1565347435054-ecbd81c57aa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      Firstname: "Mark",
      Lastname: "Warner",
    },
    {
      image:
        "https://images.unsplash.com/photo-1631377307475-9acfa929b062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      Firstname: "Elise",
      Lastname: "Stefanik",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      Firstname: "Gary",
      Lastname: "Palmer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1563093903-b828a8f94adf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      Firstname: "Ava",
      Lastname: "Palmer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      Firstname: "Olivia",
      Lastname: "Palmer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      Firstname: "Stephanie",
      Lastname: "Liverani",
    },
  ];

  const governmentBills = [
    {
      status: "Introduced",
      date: "January 9, 2023",
      description:
        "Bills and resolutions are referred to committees which debate the bill before possibly sending it on to the whole chamber.",
    },
    {
      status: "Passed Committee",
      date: "February 1, 2023",
      description:
        "The committee votes on whether to report the bill to the whole chamber, and if the vote is positive, the bill is placed on the calendar for consideration by the full House or Senate.",
    },
    {
      status: "Debated",
      date: "March 7, 2023",
      description:
        "The House or Senate debates the bill, and members may offer amendments to change its provisions.",
    },
    {
      status: "Amended",
      date: "March 15, 2023",
      description:
        "If amendments are adopted, the bill is reprinted and returned to the chamber for further consideration.",
    },
    {
      status: "Passed Chamber",
      date: "March 22, 2023",
      description:
        "If the bill is approved by a majority of the House or Senate, it is sent to the other chamber for consideration.",
    },
    {
      status: "Enacted",
      date: "April 3, 2023",
      description:
        "If both the House and Senate approve the bill in identical form, it is sent to the President. If the President signs the bill, it becomes law. If the President vetoes the bill, it can still become law if two-thirds of the House and Senate vote to override the veto.",
    },
  ];

  return (
    <View>
      {isShareResponseOpen && (
        <ShareResponse handleTwitterModal={handleTwitterModal} setIsShareResponseOpen={setIsShareResponseOpen} />
      )}
      {isReadMore && (
        <ReadMore setIsReadMore={setIsReadMore} text="H.Con.Res. 5: Expressing support for the Nation’s law enforcement."  descripation="H.Con.Res. 5: Expressing support for the Nation’s law enforcement agencies and condemning any efforts to defund or dismantle law enforcement agencies 5: Expressing support for the Nation’s law enforcement agencies and condemning any efforts to defund or dismantle law enforcement agencies 5: Expressing support for the Nation’s law enforcement agencies and condemning any efforts to defund or dismantle law enforcement agencies."/>
      )}
      {isTwitterSection && (
        <TwitterSection setIsTwitterSection={setIsTwitterSection} shares="32 Shares" />
      )}
      <ScrollView style={{ zIndex: -1 }}>
        <LinearGradient style={styles.card} colors={["#FFAABE", "#A18CD1"]}>
          <View style={{ padding: 20 }}>
            <View
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => props.navigation.pop(1)}
              >
                <Ionicons
                  name="chevron-back-outline"
                  style={{ fontSize: 32, color: "white" }}
                />
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <Ionicons
                  name="share-outline"
                  style={{ fontSize: 30, color: "white" }}
                />
                <Ionicons
                  onPress={() => saveBill()}
                  name={billSaved ? "heart" : "heart-outline"}
                  style={{ fontSize: 30, color: "white" }}
                />
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={[styles.text]}>{person.text}</Text>
            </View>
            <View style={{ marginTop: 30, paddingBottom:40 }}>
              <Text style={[styles.detail]}>Introduced On : {person.date}</Text>
              <Text style={[styles.detail]}>Sponsor : {person.sponsor}</Text>
            </View>
          </View>

        </LinearGradient>

        <View
          style={{ borderRadius: 30, backgroundColor: "white", marginTop: -30 }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Card style={{ padding: 20, marginTop: 30, marginBottom: 0 }}>
              {Memberdata.slice(0, 2).map((member, index) => (
                <TouchableWithoutFeedback onPress={() => props.navigation.push('SponsorProfile')}>
                <Membercard  member={member} key={index} />
                </TouchableWithoutFeedback>
              ))}
            </Card>
          </View>

          <View style={{ paddingHorizontal: 10, marginBottom: 0 }}>
            <Card
              navigation={props.navigation}
              headerStyles={{ paddingHorizontal: 20 }}
              style={{ paddingHorizontal: 0, marginTop: 20, marginBottom: 0 }}
              SubHeading="+8 more"
              Heading="Cosponsors"
            >
              <View style={{ flex: 1, overflow: "hidden" }}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  style={styles.Datacontainor}
                >
                  {CosponsorData.map((member, index) => (
                    <TouchableWithoutFeedback onPress={() => props.navigation.push('SponsorProfile')}>
                    <Cosponsor
                      member={member}
                      index={index}
                      length={CosponsorData.length}
                      key={index}
                    />
                    </TouchableWithoutFeedback>
                  ))}
                </ScrollView>
              </View>
            </Card>
          </View>

          <View style={{ paddingHorizontal: 10 }}>
            <Card style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: 700, marginTop: 10 }}>
                History
              </Text>
              <StatusHistory billData={governmentBills} />
            </Card>
          </View>
        </View>
      </ScrollView>
      <VoteButton openShareModal={setIsShareResponseOpen}   openReadMore={setIsReadMore} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    color: "white",
    lineHeight: 45,
  },
  card: {
    padding: 0,
  },
  detail: {
    fontSize: 18,
    color: "white",
    fontWeight: 700,
    marginBottom: 10,
  },
  Datacontainor: {
    flexDirection: "row",
    overflow: "hidden",
    width: Dimensions.get("window").width,
  },
  Ioniconscontainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

export default OpenBill;
