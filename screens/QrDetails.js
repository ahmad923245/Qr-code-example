import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'
const QrDetails = (props) => {

    // console.log(props.route.params.e)
    const { bounds, rawData, target, type } = props.route.params.e

    // console.log(bounds)

    // console.log(rawData)



    const validator = ()=>{
        if (bounds && rawData && target && type == ""){
            alert('must fill all the fileds')
        }
        saveData()

    }



    const saveData = () => {      
       firebase.firestore()
            .collection('QrDetails')
            .add({
                bounds,
                rawData,
                target,
                type
                
            })
            .then(() => {
                alert('Data added!');
            })
            .catch((err)=>{
                alert(err)
            })
    }

    return (
        <ScrollView behavior="height" style={{ flex: 1 }}>
            <Text style={{ alignSelf: 'center', fontSize: 22, fontWeight: 'bold' }}>Form</Text>

            <View style={{ padding: 5 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text>Height:</Text>

                    <TextInput
                        value={JSON.stringify(bounds.height)}
                        keyboardType="numeric" style={{ height: 40, width: '80%', backgroundColor: '#fff', color: '#000' }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>Width:</Text>

                    <TextInput
                        value={JSON.stringify(bounds.width)}
                        keyboardType="numeric" style={{ height: 40, width: '80%', backgroundColor: '#fff', color: '#000' }} />
                </View>

                <Text>Origin</Text>

                {
                    bounds.origin.map((item, i) => {
                        return (<View key={i}>
                            <TextInput style={{ height: 40, margin: 3, width: '80%', backgroundColor: '#fff', color: '#000' }} value={item.x} />
                            <TextInput style={{ height: 40, width: '80%', backgroundColor: '#fff', color: '#000' }} value={item.y} />
                        </View>
                        )
                    })

                }


                <View>
                    <Text>Raw Data</Text>
                    <TextInput style={{ height: 40, width: '80%', backgroundColor: '#fff', color: '#000' }} value={rawData} />

                    <Text>Target</Text>
                    <TextInput style={{ height: 40, width: '80%', backgroundColor: '#fff', color: '#000' }} value={JSON.stringify(target)} />
                    <Text>Type</Text>
                    <TextInput style={{ height: 40, width: '80%', backgroundColor: '#fff', color: '#000' }} value={type} />
                </View>


            </View>
            <TouchableOpacity style={{
                borderRadius:10,
                height:40,
                width:'80%',
                backgroundColor:'green',
                alignSelf:'center',
                alignItems:'center',
                justifyContent:'center'}} onPress={validator}>
                <Text style={{color:'#fff',fontWeight:'bold'}}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default QrDetails

const styles = StyleSheet.create({})
