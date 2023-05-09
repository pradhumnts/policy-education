import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const VoteButton = ({ openShareModal, openReadMore }) => {
  return ( 
    <View style={styles.container}>
        <LinearGradient colors={["#FFAABE", "#A18CD1"]} style={styles.linearGradient}>
          <View style={{display:'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center',}}>
        {/* Display thumbs down icon and text */}
        <TouchableOpacity onPress={() => openShareModal(true)}>
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="thumbs-down" size={28} color="white" />
            <Text style={styles.Votetext}>Disagree</Text>
          </View>
        </TouchableOpacity>

        {/* Display Read More button */}
        <TouchableOpacity onPress={() => openReadMore(true)}>
          <View
            style={{
              backgroundColor: 'white',
              width: 70,
              height: 70,
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#FFAABE',
              borderWidth: 3,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                letterSpacing: 1,
                fontWeight: 500,
                color: '#747474',
              }}
            >
              Read More
            </Text>
          </View>
        </TouchableOpacity>

        {/* Display thumbs up icon and text */}
        <TouchableOpacity onPress={() => openShareModal(true)}>
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="thumbs-up" size={28} color="white" />
            <Text style={styles.Votetext}>Agree</Text>
          </View>
        </TouchableOpacity>
        </View>
    </LinearGradient> 
      </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius:50,
    paddingHorizontal:20,
    paddingVertical:10 
  },
  container: { 
    marginBottom: 40,
    width:'100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex:2
  },
  Votetext: {
    color: 'white',
    marginVertical: 3,
    fontWeight: 'bold',
  },
});

export default VoteButton;
