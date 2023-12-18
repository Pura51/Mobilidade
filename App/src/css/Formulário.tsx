import React from "react";
import { Text, StyleSheet, View,} from "react-native";
import { TextInput, } from "react-native-gesture-handler";


export default function () {
    return(
        <View >
            <View style={{flexDirection:'row'}}>
                <View style={{width:'47%'}}>
                    <Text style={Formulario.text}>Nome </Text>
                    <TextInput placeholder="Nome" style={Formulario.input2} />
                </View>
                <View style={{width:'52%', paddingLeft:'5%'}}>
                    <Text style={Formulario.text}>Sobrenome </Text>
                    <TextInput placeholder="Sobrenome" style={Formulario.input2}/>
                </View>
            </View>

            <Text style={Formulario.text}>Email</Text>
            <TextInput placeholder="Email" style={Formulario.input1}/>

            <Text style={Formulario.text}>Palavra Passe </Text>
            <TextInput placeholder="Palavra Passe" style={Formulario.input3} secureTextEntry/>

            <Text style={Formulario.text}>Repita a Palavra Passe </Text>
            <TextInput placeholder="Palavra Passe" style={Formulario.input3}/>

            <Text style={Formulario.text}>Morada </Text>
            <TextInput placeholder="Morada" style={Formulario.input1}/>

            <View style={{flexDirection:'row'}}>
                <View style={{width:'47%'}}>
                    <Text style={Formulario.text}>Telefone </Text>
                    <TextInput placeholder="Telefone" style={Formulario.input2}/>
                </View>
                <View style={{width:'52%', paddingLeft:'5%'}}>
                    <Text style={Formulario.text}>NIF </Text>
                    <TextInput placeholder="NIF" style={Formulario.input2}/>
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
            paddingTop: '7%',
            paddingBottom: '10%',
        },

        input3:{
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
            paddingBottom: '2%',
            paddingLeft: '3%',
            paddingTop: '1%',

        }
        
    });
    

    