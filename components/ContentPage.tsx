import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'

type Props = {
    content: React.ReactNode
}

const ContentPage = (props : Props) => {
  return (
    <>
    <Header />
    <View style={styles.contentContainer}>
        {props.content}
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ContentPage