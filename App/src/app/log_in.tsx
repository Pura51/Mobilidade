import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import cabecalho from "../css/cabecalho";
import { Link } from 'expo-router';
import { ButtonLogIn } from '../css/button_log_in';


export default function Home() {
  return (    
   
    <View style={styles.container}>
    <View style={cabecalho.div1}></View>
    <Text style={cabecalho.title}>IPCA Mobility Systems</Text>
    <View style={{flex:1, justifyContent:'flex-end', paddingBottom:50, width: '100%',}}>
      <Link href="/log_in" asChild>
          <ButtonLogIn title='Log In'/> 
      </Link>
    </View>
    <ImageBackground  
    source={require('../Images/path.png')} 
    style={{width: '100%', height: 400}} />
    <StatusBar style="light" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(58, 56, 53, 1)',
    alignItems: 'center', // Alinhar no topo da página
    justifyContent: 'flex-start', // Alinhar no topo da página
    paddingTop: 50, // Ajuste conforme necessário para o espaçamento do topo
    paddingHorizontal: 25, // Ajuste conforme necessário para o espaçamento lateral
  },

});



