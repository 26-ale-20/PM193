import React from "react";
import { BackgroundImage } from "react-native-elements/dist/config";
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from "react-native";

const HomeScreen = () => {
return (
        <ImageBackground
            source={require('C:/Users/veron/PycharmProjects/PythonDocker/PM19x/vero-blank/src/assets/Captura de pantalla 2025-05-02 223420.png')}
            style={styles.background}>
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

