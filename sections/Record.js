import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Card from '../Design System/Card';
import { Ionicons } from 'react-native-vector-icons';

const Record = ({ item, showVote }) => {
  return (
    <View>
      {showVote && (
        <View style={{ marginVertical: 7, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            style={{ color: item.vote === 'yes' ? '#00ab55' : '#ffab00', transform: [{ rotate: item.vote === 'yes' ? '0deg' : '180deg' }] }}
            name="thumbs-up-outline"
            size={24}
          />
          <Text style={{ marginHorizontal: 5, fontSize: 18, color: item.vote === 'yes' ? '#00ab55' : '#ffab00' }}>{item.vote}</Text>
        </View>
      )}
      <Text style={{ fontWeight: 'bold', lineHeight: 28, fontSize: 16 }}>{item.summary}</Text>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
        <Text style={{ color: '#707070', fontSize: 14 }}>{item.name}</Text>
        <View style={{ ...styles.Grayview }}></View>
        <Text style={{ color: '#808080', fontSize: 14 }}>{item.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Grayview: {
    backgroundColor: '#d4d4d4',
    borderRadius: 50,
    height: 8,
    width: 8,
    marginHorizontal: 10,
  },
});

export default Record;
