import React from "react";
import { Text, StyleSheet, View,} from "react-native";
import { TextInput, } from "react-native-gesture-handler";


export default function () {
    return(
        <View >
            <View style={{flexDirection:'row',paddingTop: '10%'}}>
                <View style={{width:'47%'}}>
                    <Text style={Profile.text}>Nome </Text>
                    <Text style={Profile.input2}> Diogo </Text>
                </View>
                <View style={{width:'52%', paddingLeft:'5%'}}>
                    <Text style={Profile.text}>Sobrenome </Text>
                    <Text style={Profile.input2}> Fernandes </Text>
                </View>
            </View>
            <View style={{paddingTop: '10%'}}>
                <Text style={Profile.text}>Email</Text>
                <Text style={Profile.input1}> 24017@alunos.mobilidade.pt </Text>
            </View>

            <View style={{paddingTop: '10%'}}>
                <Text style={Profile.text}>Morada </Text>
                <Text style={Profile.input1}> Rua do Barral, Barreiros, Amares </Text>
            </View>


            <View style={{flexDirection:'row', paddingTop: '10%', paddingBottom:'10%'}}>
                <View style={{width:'47%'}}>
                    <Text style={Profile.text}>Telefone </Text>
                    <Text style={Profile.input2}> 985367543 </Text>
                </View>
                <View style={{width:'52%', paddingLeft:'5%'}}>
                    <Text style={Profile.text}>NIF </Text>
                    <Text style={Profile.input2}> 324567543 </Text>
                </View>
            </View>
        </View>

        )
    }


const Profile = StyleSheet.create({
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
            paddingTop: '10%',
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
    

    