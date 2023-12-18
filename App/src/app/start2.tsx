import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import cabecalho from "../css/cabecalho";
import { Link } from 'expo-router';



const image = '../Images/path.png';

export default function Home() {
  return (
    
    <View style={styles.container2}>
      <ImageBackground
      source={require(image)}
      style ={{flex:1,}}>
      
        <View style={styles.container}>
            <Text style={cabecalho.title}>IPCA Mobility Systems</Text>

            <View>
                <Text style={styles.title}>Ride</Text>
                <Text style={styles.text}>Junte-se e divirta-se nesta aventura sobre rodas!</Text>
            </View>
            
            <View style={{flex:1,justifyContent:'flex-end', paddingBottom:'5%', alignItems:'center'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{paddingRight:'10%'}}>
                        <Link href={'/toolbar'}>
                            <Text style={styles.text2}>Skip</Text> 
                        </Link>
                    </View>
                    <View style={{padding:'6%'}}>
                        <Text style={styles.point1}>     </Text>
                    </View>
                    <View style={{padding:'6%'}}>
                        <Text style={styles.point2}>     </Text>
                    </View>
                    <View style={{paddingLeft:'10%'}}>
                        <Link href={'/start1'}>
                            <Text style={styles.text2}>Next</Text> 
                        </Link>
                    </View>
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
    paddingTop: '40%',
    paddingRight: '25%',
    },

    text: {
      color: 'white',
      fontSize: 35,
      paddingTop: '35%',  
      textAlign: 'center',
    },


    text2: {
        color: 'white',
        fontSize: 25,
        paddingRight: '10%',

      },

    point1:{
        backgroundColor: 'grey',
        height: 18,
        borderRadius: 100,
    },

    
    point2:{
        backgroundColor: 'green',
        height: 18,
        borderRadius: 100,
    },

});