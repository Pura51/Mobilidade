import React from 'react';
import { AntDesign,  Entypo  } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import cabecalho from "../css/cabecalho";
import { Link } from 'expo-router';
import { ButtonLogIn } from '../css/button_log_in';


const image = '../Images/path.png';

export default function Home() {
  return (
    
    <View style={styles.container2}>
        

        <View style={styles.container}>
          <Text style={cabecalho.title}>
            <Link href="/toolbar">IPCA Mobility Systems</Link>
          </Text>
        
          

            <View style={{flexDirection:'row', paddingTop:'25%'}}>
                <View >
                    <AntDesign name="checkcircleo" size={40} color="black" />
                </View>
                <Text style={{paddingLeft:'3%', fontSize:25, padding:'1%'}}>
                    Licença 1
                </Text>
            </View>

            <View style={{flexDirection:'row', paddingTop:'15%'}}>
                <View >
                <Entypo name="circle-with-cross" size={45} color="red" />
                </View>
                <Text style={{paddingLeft:'3%', fontSize:25, padding:'1%'}}>
                    Licença 1
                </Text>
            </View>

          <View style={{flex:1, width: '100%', paddingTop:'12%'}}>
            
            <View style={{flex:1, justifyContent:'flex-end', paddingBottom:50, width: '100%',}}>
              <Link href="/perfil" asChild>
                  <ButtonLogIn title='Pedir Licença'/> 
              </Link>
            </View>

          </View>

          <StatusBar style="light" />
        </View>
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
      backgroundColor: 'white',
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