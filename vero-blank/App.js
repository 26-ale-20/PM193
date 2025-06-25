/* Zona 1: Lugar de las importaciones */  
import React, { useEffect, useState} from 'react';
import { View, StatusBar, Settings} from 'react-native';
import SplashScreen from './src/assets/screens/SplashScreens';
import HomeScreen  from './src/assets/screens/HomeScreens';


/* Zona 2: Main */
export default function App () {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
 
  }, []);

  return (
    <View style={{ flex: 1}}>
      <StatusBar hidden></StatusBar>
      {isLoading ? <SplashScreen/> : <HomeScreen/>}
    </View>
  );
}