/*ZONa1: Impotaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, ScrollView, Touchable, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Pressable, Switch } from 'react-native';
import React, {useState} from 'react';
import { Button as ButtonPaper, Provider as ProveedorPaper } from 'react-native-paper';
import { Button as ButtonElements } from 'react-native-elements';


/*ZONa2: Main */
export default function App() { 
  const [modoOscuro, setModoOscuro] = useState(false);
  const alternarModoOscuro = () => setModoOscuro(previo => !previo);

  return (
     <ProveedorPaper>
      <ScrollView contentContainerStyle={styles.ScrollContainer}>
        <View style={[styles.container, {backgroundColor: modoOscuro ?'#111' : '#fff'} ]}> </View>
        <View style= {styles.container}>
          <Text style={styles=title}>Modo de Pantalla: {modoOscuro ? 'oscuro' : 'claro'}</Text>
          <Switch value={modoOscuro} onValueChange={alternarModoOscuro}/>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}> Primer Boton</Text>
          <Button>
            title="Boton Nativo"
            color="#007bff"
            OnPress={() => window.alert('Boton Nativo Presionado')}
          </Button>
        </View>

        <View style={styles.section}>
          <TouchableOpacity
          style={[styles.btn, {backgroundColor: '28a745'}]}
          onPress={() => window.alert('TouchebleOpacity')}>
            <Text style={styles.btnText}>TouchableOpacity</Text>
          </TouchableOpacity>
        </View>

        {/* Boton 3 */}
        <View style={styles.section}>
          <Text style={styles.title}>Boton 3</Text>
          <TouchableHighlight
          style={[styles.btn, {backgroundColor: 'ffc107'}]}
          underlayColor="#e0a800"
          onPress={() => Alert.alert('boton 3')}>
            <Text style={styles.btnText}>TouchableHighlight</Text>
          </TouchableHighlight>
      
        </View>
        
      </ScrollView>
     </ProveedorPaper>

  );
}

/*ZONa3 Estilos- Estetica */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'strech',
    paddingHorizintal: 16,
    paddingBottom: 50// izqierda a derecha
   
  },
 title: {
  fontSize: 16, 
  marginVertical: 6,
  textAlign: 'center',
  color: '#000'
 },

 Section: {
  marginVertical: 15,
  alignItems: 'center',
  width: '100%'
 }
  
});
