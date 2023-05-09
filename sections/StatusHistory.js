import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatusHistory = ({billData}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.timeline}>
        {billData.map((bill, index) => <View key={index} style={styles.timelineItem}>
          <View style={[styles.timelineDot, { backgroundColor: '#FBC02D' }]}>
          </View>
          <View style={styles.timelineContent}>
            <Text style={styles.timelineTitle}>{bill.status}</Text>
            <Text style={styles.timelineDescription}>{bill.description}</Text>
          </View>
            {index !== billData.length - 1 && <View style={styles.timelineDotBorder}></View>}
        </View>)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: "100%",
  },
  timeline: {
    flexDirection: 'column',
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 10,
    marginRight: 20,
    position: 'relative',
  },
  timelineDotBorder: {
    position: 'absolute',
    left: 5,
    top: 15,
    bottom: 0,
    width: 2,
    height: "100%",
    backgroundColor: '#d8d8d8',
  },
  timelineContent: {
    flex: 1,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timelineDescription: {
    fontSize: 14,
    color: '#757575',
    lineHeight: 24,
  },
});

export default StatusHistory;
