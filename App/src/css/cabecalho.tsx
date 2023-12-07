import { StyleSheet } from 'react-native';


const cabecalho = StyleSheet.create({  
    div1: {
      position: 'absolute',
      width: '114%',
      height: '18%',
      backgroundColor: '#136935',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },
  
    title: {
      fontWeight: 'bold',
      backgroundColor: '#136935',
      color: 'white',
      paddingVertical:0, // Ajuste conforme necessário para o espaçamento interno
      fontSize: 30,
      textAlign: 'center',
    },

    
  });

  export default cabecalho;

