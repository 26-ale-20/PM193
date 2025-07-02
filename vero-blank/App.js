import { useRef } from 'react';
import{
  ScrollView, //hacer el deslizable
  StatusBar, //barra de estado
  StyleSheet, //estilos
  Text, //texto
}from 'react-native';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';

const App =() => {
  const ScrollViewRef = useRef(null);//Referencia de scrollview
 
 return(

  //iniciamos Safe area provider
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView horizontal={true} >
      <ScrollView style={styles.ScrollView}>
        <Text style={styles.text}>
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio Este es el texto que utilizara todo el espacio 
        Este es el texto que utilizara todo el espacio 
        </Text>
        <image>

        </image>
      </ScrollView>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
 },
  ScrollView:{
    backgroundColor: 'green',
  },
  text: {
    fontSize: 50,
    padding: 20,
  }
});

export default App;