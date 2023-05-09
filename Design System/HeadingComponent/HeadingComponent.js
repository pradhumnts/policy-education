import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const HeadingComponent = (props) => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
        <View>
          <Text style={{ fontSize: 48, fontWeight: 700 }}>{props.heading}</Text>
          <View style={styles.hr} />
          <Text style={{ color: '#707070', fontSize: 16, fontWeight: 600 }}>{props.tagline}</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    hr: {
      height: 2,
      width: '20%',
      backgroundColor: '#A18CD1',
      marginVertical: 10,
    },
  });

export default HeadingComponent