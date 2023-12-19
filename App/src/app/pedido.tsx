import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import cabecalho from "../css/cabecalho";
import { Link } from 'expo-router';
import { ButtonLogIn } from '../css/button_log_in';
import { TextInput } from 'react-native-gesture-handler';



const image = '../Images/path.png';

export default function Home() {
  return (
    
    <View style={styles.container2}>
        

        <View style={styles.container}>
          <Text style={cabecalho.title}>
            <Link href="/toolbar">IPCA Mobility Systems</Link>
          </Text>
        
          <Text style={{ fontSize:25, paddingTop:'25%', textAlign:'center', }}>
            Qual o veiculo que deseja utilizar?
          </Text>

                 <Text style={styles.text}>Palavra Passe</Text>
            <View style={{flex:1, width: '80%', paddingTop:'10%'}}>
                <TextInput style={styles.input}/>
            </View>

          <View style={{flex:1, width: '100%', paddingTop:'12%'}}>
            
            <View style={{flex:1, justifyContent:'flex-end', paddingBottom:50, width: '100%',}}>
              <Link href="/licencas" asChild>
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

    text:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: '3%',
        paddingLeft: '3%',
        paddingTop: '12%',
        
    },

    input:{
        backgroundColor: '#136935',
        borderRadius: 15,
        padding: '5%',
        fontSize: 20,
        color: 'white',
    },

});