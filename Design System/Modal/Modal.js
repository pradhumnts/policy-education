import React, { useState } from 'react';
import { Animated, Button, Modal, Text, View } from 'react-native';

const MyModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [animatedValue] = useState(new Animated.Value(0));

  const handleOpen = () => {
    setModalVisible(true);

    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleClose = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  const animatedStyle = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Animated.View style={[{ backgroundColor: '#fff', padding: 20 }, animatedStyle]}>
            <Text>This is a fade-in modal</Text>

            <Button
              title="Close modal"
              onPress={handleClose}
            />
          </Animated.View>
        </View>
      </Modal>

      <Button
        title="Open modal"
        onPress={handleOpen}
      />
    </View>
  );
}

export default MyModal;
