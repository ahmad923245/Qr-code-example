import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const HomeScreen = (props) => {

   

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title="Open QR code "
                onPress={() => props.navigation.navigate('Qrcode')}
            />

            
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
