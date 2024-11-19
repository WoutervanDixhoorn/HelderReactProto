import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface InfoTextProps {
    children: React.ReactNode;
}

const InfoText: React.FC<InfoTextProps> = ({children}) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>{children}</Text>
    </View>
  )
}

export default InfoText

const styles = StyleSheet.create({
    infoContainer: { 
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 2,
        paddingBottom: 2,
        margin: 20,
        backgroundColor: '#373737',
        borderRadius: 10,
    },
    infoText: {
        color: 'white',
    }
})