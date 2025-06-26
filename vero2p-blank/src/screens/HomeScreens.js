import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from "react-native";

const HomeScreen = () => {
return (
        <ImageBackground
            source={require('C:/Users/veron/PycharmProjects/PythonDocker/PM19x/vero2p-blank/src/assets/messi.pantalla.jpeg')}
            style={styles.background}
            resizeMode='cover'>
                <SafeAreaView style={styles.content}>
                    <Text style={styles.text}>
                        Pantalla Principal
                    </Text>
                </SafeAreaView>
        </ImageBackground>
);
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent:'center',
    },
    content: {
        alignItems: 'center'
        
    },
    text:{
    
        color:'#fff',
        fontSize:28,
        fontWeight:'bold'
    }
});

