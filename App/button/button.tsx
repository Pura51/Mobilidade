import React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";


export function ButtonIniciar(){
    return (
        <TouchableOpacity style={button.container}>
            <Text style={button.title}>Iniciar</Text>
        </TouchableOpacity>
    );
}

const button = StyleSheet.create({
    container:{
        padding: 15,
        backgroundColor: "white",
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    title:{
        color: '#136935',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});
