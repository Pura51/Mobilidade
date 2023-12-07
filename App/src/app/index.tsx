import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import cabecalho from "../css/cabecalho";
import { ButtonIniciar } from "../css/button_iniciar";
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={cabecalho.div1}></View>
      <Text style={cabecalho.title}>IPCA Mobility Systems</Text>
      <View style={{alignItems:'center'}}>
      </View>
      <View>
        <Image
        style={{marginTop: 150, width: 400, height: 300, marginLeft: 13,}}
        source={require('../Images/bike_image.png')}
        />
      </View> 
      <View style={{flex:1, justifyContent:'flex-end', paddingBottom:50, width: '100%',}}>
        <Link href="/log_in" asChild>
            <ButtonIniciar title='Iniciar'/> 
        </Link>
        </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#136935',
    alignItems: 'center', // Alinhar no topo da página
    justifyContent: 'flex-start', // Alinhar no topo da página
    paddingTop: 50, // Ajuste conforme necessário para o espaçamento do topo
    paddingHorizontal: 25, // Ajuste conforme necessário para o espaçamento lateral
  },

});



