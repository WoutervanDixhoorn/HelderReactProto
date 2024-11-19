import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 40, color: 'white'}}>Helder</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: -47,
        paddingTop: 45,
        height: 135,
        backgroundColor: '#623CCC',
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center'
    }
})