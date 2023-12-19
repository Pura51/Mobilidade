import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import cabecalho from "../css/cabecalho";
import { Link } from 'expo-router';
import { ButtonLogIn } from '../css/button_log_in';
import Profile from '../css/profile';


const image = '../Images/path.png';

export default function Home() {
  return (
    
    <View style={styles.container2}>
      <ImageBackground
      source={require(image)}
      style ={{flex:1,}}>
        

        <View style={styles.container}>
          <Text style={cabecalho.title}>
            <Link href="/toolbar">IPCA Mobility Systems</Link>
          </Text>
        
          <View style={{flex:1, width: '100%', paddingTop:'12%'}}>

            <Profile/>
            
            <View style={{paddingTop:'5%'}}>
              <Link href="/perfil" asChild>
                  <ButtonLogIn title='Alterar Informações'/> 
              </Link>
            </View>

          </View>

          <StatusBar style="light" />
        </View>
      </ImageBackground> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Alinhar no topo da página
    justifyContent: 'flex-start', // Alinhar no topo da página
    paddingTop: 50, // Ajuste conforme necessário para o espaçamento do topo
    paddingHorizontal: 25, // Ajuste conforme necessário para o espaçamento lateral
    },

    container2: {
      flex: 1,
      backgroundColor: 'rgba(34, 33, 32, 1)',
      },

    title:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 50,
    },

    text: {
      color: 'white',
      paddingVertical:0, // Ajuste conforme necessário para o espaçamento interno
      fontSize: 20,
      paddingTop: '10%',  
    },

});