import React from "react";
import { Text, StyleSheet, View} from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function () {
    return(
        <View>
            <Text style={Log.text}>Email</Text>
            <TextInput style={Log.input}/>

            <Text style={Log.text}>Palavra Passe</Text>
            <TextInput style={Log.input}/>

        </View>

        )
    }


const Log = StyleSheet.create({
        input:{
            backgroundColor: 'rgba(117, 117, 117, 1)',
            borderRadius: 15,
            padding: '5%',
            fontSize: 20,
            color: 'white',
        },
        text:{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            paddingBottom: '3%',
            paddingLeft: '3%',
            paddingTop: '12%',
            
        }
    });
    
    

    