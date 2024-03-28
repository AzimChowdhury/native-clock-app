import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';


export default function App() {
  let [fontsLoaded] = useFonts({
    "inter-regular": Inter_400Regular,
    "inter-bold": Inter_700Bold
  })

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <ImageBackground
      source={require('./assets/light-bg.png')}
      style={styles.background}
    >
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  }
});
