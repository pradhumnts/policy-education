import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SingleIconBar from './SingleIconBar'

const IconBar = () => {
  const [selectedIcon, setSelectedIcon] = useState('home')

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName)
  }

  return (
    <View style={styles.iconbar}>
    <View style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
        <SingleIconBar icon="home" selected={selectedIcon === 'home'} onPress={() => handleIconClick('home')} />
        <SingleIconBar icon="search" selected={selectedIcon === 'search'} onPress={() => handleIconClick('search')} />
        <SingleIconBar icon="bookmarks-outline" selected={selectedIcon === 'bookmarks-outline'} onPress={() => handleIconClick('bookmarks-outline')} />
        <SingleIconBar icon="person-circle-outline" selected={selectedIcon === 'person-circle-outline'} onPress={() => handleIconClick('person-circle-outline')} />
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
    iconbar:{
        backgroundColor: 'white',
        padding: 10,
        marginTop: 20,
        borderRadius: 30,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingBottom: 20,
     },
    })

export default IconBar
