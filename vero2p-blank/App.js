import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ImageBackground, SafeAreaView, Switch, Pressable, Modal,StyleSheet,} from 'react-native';

const backgroundImage = require('C:/Users/veron/PycharmProjects/PythonDocker/PM19x/vero2p-blank/src/assets/messi.pantalla.jpeg');

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMensaje, setModalMensaje] = useState('');
  const [modalTitulo, setModalTitulo] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const validarCorreo = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  const validarNombre = (nombre) => /^[a-zA-Z\s]+$/.test(nombre);

  const mostrarModal = (titulo, mensaje) => {
    setModalTitulo(titulo);
    setModalMensaje(mensaje);
    setModalVisible(true);
  };

  const validarYRegistrar = () => {
    if (!nombre.trim() || !correo.trim()) {
      mostrarModal('Campos Vacíos', 'Por favor completa todos los campos.');
      return;
    }

    if (!validarNombre(nombre)) {
      mostrarModal('Nombre inválido', 'El nombre solo debe contener letras y espacios.');
      return;
    }

    if (!validarCorreo(correo)) {
      mostrarModal('Correo inválido', 'Ingresa un correo electrónico válido.');
      return;
    }

    if (!aceptaTerminos) {
      mostrarModal('Términos no aceptados', 'Debes aceptar los términos y condiciones.');
      return;
    }

    mostrarModal('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
  };

  if (isLoading) {
    return (
      <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
        <SafeAreaView style={styles.overlay}>
          <Text style={styles.logo}>Mi App</Text>
          <Text style={styles.loadingText}>Cargando...</Text>
        </SafeAreaView>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <SafeAreaView style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#ccc"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#ccc"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
          />

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Aceptar términos y condiciones</Text>
            <Switch value={aceptaTerminos} onValueChange={setAceptaTerminos} />
          </View>

          <Pressable style={styles.button} onPress={validarYRegistrar}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </Pressable>
        </View>

        {/* Modal Personalizado */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{modalTitulo}</Text>
              <Text style={styles.modalText}>{modalMensaje}</Text>
              <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 25,
    borderRadius: 15,
    width: '100%',
    maxWidth: 350,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff20',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  switchLabel: {
    color: '#fff',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#00ADB5',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  // Modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
