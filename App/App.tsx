import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import cabecalho from "./css/cabecalho";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={cabecalho.div1}></View>
      <Text style={cabecalho.title}>IPCA Mobility Systems</Text>
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
    paddingLeft: 20, // Ajuste conforme necessário para o espaçamento lateral
  },


});



