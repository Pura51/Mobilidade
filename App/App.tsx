import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import cabecalho from "./css/cabecalho";
import { Button } from './button/button';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={cabecalho.div1}></View>
      <Text style={cabecalho.title}>IPCA Mobility Systems</Text>
      <View style={{flex:1, justifyContent:'flex-end', paddingBottom:50, width: '100%',}}>
        <Button />
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



