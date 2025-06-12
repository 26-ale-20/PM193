/*ZONa1: Impotaciones */
import { StatusBar } from 'expo-status-bar';
import { Children } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

const Texto= ()=>{
  const [contenido,setContenido]=useState('Hola mundo')
  const actualizaTexto=()=>{setContenido('Estado Modificado')}
  return(
    <Text onPress={actualizaTexto}>{contenido}</Text>
  )
}

/*ZONa2: Main */
export default function App() {
  return (

    <View style={styles.container}>

    <Texto></Texto>
    <Texto></Texto>
    <Texto></Texto>
      <Button title='Presionar'></Button>
      <StatusBar style="auto" />
    </View>

  );
}

/*ZONa3 Estilos- Estetica */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
