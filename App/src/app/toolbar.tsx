import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import cabecalho from "../css/cabecalho";
import { ButtonPerfil } from "../css/button_perfil";
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>



      <Text style={cabecalho.title}></Text>
      <View style={{flex:1, width: '100%',}}>

      <View style={{backgroundColor:'white', height:'30%', borderRadius:25}}>
        <View style={{flexDirection:'row'}}>
            <Image
              style={styles.Image}
              source={require('../Images/Profile.png')}
              />
              <View>
                <Text style={styles.text}>Diogo</Text>
                <Text style={styles.text1}>Fernandes</Text>
              </View>
        </View>
        <View>
          <Text  style={styles.text2}>ID: 123456789</Text>
        </View>
      </View>
        <View style={{paddingTop:'15%'}}>
          <Link href="/perfil" asChild>
              <ButtonPerfil title='Perfil'/> 
          </Link>
        </View>

        <View style={{paddingTop:'15%'}}>
          <Link href="/licencas" asChild>
              <ButtonPerfil title='Licenças'/> 
          </Link>
        </View>

        <View style={{paddingTop:'15%'}}>
          <Link href="/log_in" asChild>
              <ButtonPerfil title='Log Out'/> 
          </Link>
        </View>



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

  Image:{
    resizeMode:'cover', 
    width: 130, 
    height: 120, 
    marginLeft: 15, 
    marginTop: 20
  },

  text:{
    fontSize: 22,
    paddingTop: '30%',
    paddingLeft: '15%',

  },

  text1:{
    fontSize: 22,
    paddingTop: '3%',
    paddingLeft: '5%',
  },

  text2:{
    fontSize: 15,
    paddingTop: '5%',
    paddingLeft: '8%',
  }

});



