import { forwardRef } from "react";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from "react-native";


type Props =  TouchableOpacityProps & {
    title: string;
}


export const  ButtonPerfil = forwardRef<TouchableOpacity, Props>(({title, ...rest}, ref) => {
    return (
      
        <TouchableOpacity 
        ref={ref}
        style={button.container}
        {...rest}> 
                <Text style={button.title}>{title}</Text>
        </TouchableOpacity>
 
    );
})

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
