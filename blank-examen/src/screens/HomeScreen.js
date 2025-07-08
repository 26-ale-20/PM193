import React, { useState } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [foodType, setFoodType] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!foodType || !city) {
      alert('Por favor ingrese tipo de comida y ciudad.');
      return;
    }

    setLoading(true);
    navigation.navigate('Results', { foodType, city }); // Pasamos la ciudad y tipo de comida a ResultsScreen
    setLoading(false);
  };

  return (
    <ImageBackground
      source={require('../assets/133913879525360329.jpg')} // Imagen de fondo
      style={styles.background}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Tipo de comida (ej: sushi, pizza)"
          value={foodType}
          onChangeText={setFoodType}
        />
        <TextInput
          style={styles.input}
          placeholder="Ciudad (ej: Guadalajara)"
          value={city}
          onChangeText={setCity}
        />
        {loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        <Button title="Buscar Productos" onPress={handleSearch} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center', // Centra el contenido verticalmente
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    backgroundColor: '#fff', // Fondo blanco para las cajas de texto
  },
});

export default HomeScreen;
