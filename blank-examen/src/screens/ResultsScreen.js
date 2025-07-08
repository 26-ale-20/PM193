import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ActivityIndicator } from 'react-native';

const ResultsScreen = ({ route }) => {
  const { foodType, city } = route.params;  // Recibimos el tipo de comida y la ciudad
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      // Productos ficticios de ejemplo
      const allProducts = [
        {
          name: 'Sushi Roll',
          brand: 'Sushi House',
          city: 'Ciudad de México',
          imageUrl: 'https://via.placeholder.com/150',
          nutritionGrade: 'A',
        },
        {
          name: 'Pizza Margherita',
          brand: 'Pizza Italia',
          city: 'Guadalajara',
          imageUrl: 'https://via.placeholder.com/150',
          nutritionGrade: 'B',
        },
        {
          name: 'Tacos al Pastor',
          brand: 'Taco King',
          city: 'Monterrey',
          imageUrl: 'https://via.placeholder.com/150',
          nutritionGrade: 'C',
        },
        {
          name: 'Sushi Tempura',
          brand: 'Sushi Bar',
          city: 'Ciudad de México',
          imageUrl: 'https://via.placeholder.com/150',
          nutritionGrade: 'B',
        },
        {
          name: 'Pepperoni Pizza',
          brand: 'Pizza Lovers',
          city: 'Monterrey',
          imageUrl: 'https://via.placeholder.com/150',
          nutritionGrade: 'A',
        },
        {
          name: 'Tacos de Bistec',
          brand: 'Taco King',
          city: 'Guadalajara',
          imageUrl: 'https://via.placeholder.com/150',
          nutritionGrade: 'B',
        },
        {
          name: 'Sushi California Roll',
          brand: 'Sushi House',
          city: 'Guadalajara',
          imageUrl: 'https://via.placeholder.com/150',
          nutritionGrade: 'A',
        },
        {
          name: 'Sushi Nigiri',
          brand: 'Sushi Bar',
          city: 'Ciudad de México',
          imageUrl: 'https://via.placeholder.com/150',
          nutritionGrade: 'A',
        },
      ];

      // Normalizamos la ciudad y tipo de comida a minúsculas para hacer la comparación insensible
      const normalizedFoodType = foodType.trim().toLowerCase();  // Normaliza el tipo de comida
      const normalizedCity = city.trim().toLowerCase();  // Normaliza la ciudad

      // Filtramos los productos según el tipo de comida y ciudad
      const filteredProducts = allProducts.filter(
        (product) =>
          product.city.toLowerCase().includes(normalizedCity) &&
          product.name.toLowerCase().includes(normalizedFoodType)
      );

      // Si no se encuentran productos, mostramos un mensaje
      if (filteredProducts.length === 0) {
        alert('No se encontraron productos para esta búsqueda. Intenta con otro término o ciudad.');
      }

      setProducts(filteredProducts); // Establecemos los productos filtrados
      setLoading(false);
    };

    fetchData();
  }, [foodType, city]);  // Dependemos de `foodType` y `city` para hacer la búsqueda

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}

      <ScrollView>
        {products.length > 0 ? (
          products.map((product, index) => {
            return (
              <View key={index} style={styles.product}>
                <Image source={{ uri: product.imageUrl }} style={styles.image} />
                <Text style={styles.title}>{product.name}</Text>
                <Text>{product.brand}</Text>
                <Text>Calificación: {product.nutritionGrade}</Text>
                <Text>Ciudad: {product.city}</Text>
              </View>
            );
          })
        ) : (
          <Text>No se encontraron productos para esta búsqueda. Intenta con otro término o ciudad.</Text>
        )}
      </ScrollView>

      {/* Mostrar mensaje con la ciudad y comida seleccionada */}
      <Text style={styles.cityInfo}>Resultados para "{foodType}" en {city}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  product: {
    marginBottom: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cityInfo: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default ResultsScreen;
