import React from 'react';
import { View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Avatar = ({ size, source, gradientColors }) => {
  return (
    <View style={{
      width: size > 140 ? size + 15 : size + 8,
      height: size > 140 ? size + 15 : size + 8,

    }}>
      {gradientColors ? <LinearGradient colors={gradientColors} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', borderRadius: 100 }}>
        <Image
          style={{
            width: size,
            height: size,
            borderRadius: 100,
          }}
          source={source}
        />
      </LinearGradient> : <Image
        style={{
          width: size,
          height: size,
          borderRadius: 100,
        }}
        source={source}
      />}

    </View>
  );
}

export default Avatar;
