import React from "react";
import { View, Text, StyleSheet, Image } from "react-native-web";

const SplashScreen = () => {
    return(
        <View style= {styles.container}>
        <Image source={require('C:/Users/veron/PycharmProjects/PythonDocker/PM19x/vero-blank/src/assets/Captura de pantalla 2025-05-03 212910.png')}
        style={StyleSheetList.logo}
        resizeMode="contain"
        />
        <Text style={styles.title}>
            Bienvenido a la App
        </Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
        justifyContent:'center',
        alignItems: 'center',
    },
    logo: {
        width:200,
        height:200,
    },
    title:{
        marginTop:20,
        color:'#eeeeee',
        fontSize:24,
        fontWeight:'bold'
    }
});