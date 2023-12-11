import React from "react";
import { Text, StyleSheet, View} from "react-native";
import { TextInput } from "react-native-gesture-handler";


export default function () {
    return(
        <View>
            <Text style={Formulario.text}>Email</Text>
            <TextInput style={Formulario.input1}/>

            <Text style={Formulario.text}>Palavra </Text>
            <TextInput style={Formulario.input1}/>

            <Text style={Formulario.text}>Repita a Palavra Passe </Text>
            <TextInput style={Formulario.input1}/>

            <Text style={Formulario.text}>Morada </Text>
            <TextInput style={Formulario.input1}/>
            <View style={{flexDirection:'row'}}>
                <View style={{width:'47%'}}>
                    <Text style={Formulario.text}>Telefone </Text>
                    <TextInput style={Formulario.input2}/>
                </View>
                <View style={{width:'52%', paddingLeft:'5%'}}>
                    <Text style={Formulario.text}>NIF </Text>
                    <TextInput style={Formulario.input2}/>
                </View>
            </View>
        </View>

        )
    }


const Formulario = StyleSheet.create({
        input1:{
            backgroundColor: 'rgba(117, 117, 117, 1)',
            borderRadius: 15,
            padding: '5%',
            fontSize: 20,
            color: 'white',
        },

        input2:{
            backgroundColor: 'rgba(117, 117, 117, 1)',
            borderRadius: 15,
            padding: '5%',
            fontSize: 20,
            color: 'white',
            width: '100%',
            paddingTop: '13%',
        },


        text:{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            paddingBottom: '2%',
            paddingLeft: '3%',
            paddingTop: '1%',
        }
        
    });
    
    

    