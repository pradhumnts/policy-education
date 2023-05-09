import { View, Text, ScrollView, StyleSheet } from "react-native"
import Avatar from '../Design System/Avatar/Avatar'



const ChatLIst = ( {item} ) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.MainContainer}>
                    <View>
                        <Avatar size={55} source={{ uri: item.image }} />
                    </View>
                    <View style={{ width: '80%' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={{ lineHeight: 20, }}>{item.name}</Text>
                            <Text style={{ textAlign: 'right', color: '#6c7072' }}>{item.date}</Text>
                        </View>
                        <Text style={{ fontWeight: 600, lineHeight: 20, }}>{item.Billname}</Text>
                        <Text style={{ color: '#6c7072' }}>{item.message}</Text>
                    </View>
                </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        lineHeight: 24,
    }
})

export default ChatLIst
