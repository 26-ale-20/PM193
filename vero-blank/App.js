/*ZONa1: Impotaciones */
import { StatusBar } from 'expo-status-bar';
import { Children } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

const Texto= ({style})=>{
  const [contenido,setContenido]=useState('Hola mundo')
  const actualizaTexto=()=>{setContenido('Estado Modificado')}
  return(
    <Text style={[styles.text,style]} onPress={actualizaTexto}>{contenido}</Text>
  )
}

/*ZONa2: Main */
export default function App() {
  const [cambiarBoton, setcambairBoton]=useState('Presionar')
  const actualizaBoton=()=>{setcambairBoton('Cambiado')}
  return (

    <View style={styles.container}>

    <Texto style={styles.azul}></Texto>
    <Texto style={styles.rojo}></Texto>
    <Texto style={styles.negro}> </Texto>
    
      <StatusBar style="auto" />
    </View>

  );
}

/*ZONa3 Estilos- Estetica */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',// izqierda a derecha
    justifyContent: 'center', //Arriba a abajo 
   
  },
   text:{
    color:'white',
    fontSize:27,
  
  },
  azul:{backgroundColor:'blue'},
  rojo:{backgroundColor:'red'},
  negro:{backgroundColor:'black'},
});
