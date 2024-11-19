import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

type CameraButtonProps = {
  onPress?: () => void;
}

const CameraButton = (props : CameraButtonProps) => {
  return (
    <View style={styles.outerCircle}>
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
        </TouchableOpacity>
    </View>
  )
}

export default CameraButton

const styles = StyleSheet.create({
    outerCircle: {
        alignItems: 'center', 
        justifyContent: 'center', 
        height: 70, 
        width: 70, 
        borderRadius: 35, 
        borderWidth: 2, 
        borderColor: 'white',
        backgroundColor: 'transparent',
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'white',
      }
});