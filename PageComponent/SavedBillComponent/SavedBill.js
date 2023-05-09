import React from "react";
import { View, Text, ScrollView } from "react-native";
import HeadingComponent from "../../Design System/HeadingComponent/HeadingComponent";
import IconMenu from "../../sections/IconMenu";
import SaveBillCard from "./SaveBillCard";
import { colors } from "../../Design System/Colors";
import LikeIcon from "./LikeDisLikeIcon";

const SavedBill = () => {
  const Icondata = [
    {
      title: "2 Saved",
      icon: "home-outline",
    },
    {
      title: "3 Voted",
      icon: "heart-outline",
    },
    {
      title: "15 Shared",
      icon: "share-social-outline",
    },
  ];

  return (
    <ScrollView style={{ width: "100%", backgroundColor: "#fff", flex: 1 }}>
      <View style={{ paddingHorizontal: 10, paddingBottom: 50 }}>
        <HeadingComponent
          heading="Saved Bills"
          tagline="Make your voice listen to world."
        />

        <View style={{ marginTop: 20 }}>
          <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            {Icondata.map((item, index) => (
              <IconMenu item={item} key={index} />
            ))}
          </View>
        </View>
        <View>
          <View style={{ marginTop: 20 }}>
            <SaveBillCard
              color={colors.primary}
              text="H.Con.Res. 5: Expressing support for the Nation’s law enforcement agencies and condemning any efforts to defund or dismantle law enforcement agencies."
              date="Jan 11, 2023"
              sponsor="Steve Scalise"
              share="share-outline"
            />
          </View>
          <View>
            <LikeIcon />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SavedBill;
