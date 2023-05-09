import { View, StyleSheet } from 'react-native';


const Rangebar = (props) => {
    return (
        <View style={styles.container}>
          <View style={{...styles.bar, ...styles.greenBar, width: typeof props.size === "number" ? `${props.size}%` : props.size }} />
          <View style={[styles.bar, styles.yellowBar]} />
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
          justifyContent: 'flex-end',
          height: 12,
        },
        bar: {
          height: '40%',
          width: '100%',
          borderRadius:5,
        },
        greenBar: {
          backgroundColor: '#00ab55',
          position:'absolute',
          zIndex:2,
        },
        yellowBar: {
          backgroundColor: '#ffab00',
        },
      });

export default Rangebar