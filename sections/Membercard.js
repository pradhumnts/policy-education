import { View, StyleSheet, Text } from 'react-native'
import Avatar from '../Design System/Avatar/Avatar'

const Membercard = ({member}) => {
  return (
    <View style={styles.Maincontainer}>
        <View style={styles.container}>
            <Avatar
                size={60}
                source={{uri: member.image}}
                gradientColors={['#e9087d', '#fa7273', ]}
            />
            <View style={{marginHorizontal:15}}>
                <Text style={{ fontWeight:'bold', fontSize:18 }}>
                    {member.name}
                </Text>
                <View style={{ display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Text style={{color:'#949494', fontSize:16}}>{member.role}</Text>
                    <View style={styles.pinkview}></View>
                    <Text style={{color:'#949494', fontSize:16}}>{member.votes} Votes</Text>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Maincontainer:{
        paddingVertical: 10,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
    },
    pinkview:{
        backgroundColor:'#fa7373',
        borderRadius:50,
        padding:5,
        width:10,
        marginHorizontal: 8,
        // marginVertical: 5,
        alignItems: "center",
    }
})

export default Membercard