import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { useState } from 'react';


const RowView = ({ label, value }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
      <Text style={{ fontFamily: 'inter-regular', color: '#303030', fontSize: 14, letterSpacing: 0, textTransform: 'uppercase' }}>{label}</Text>
      <Text style={{ fontFamily: 'inter-bold', color: '#303030', fontSize: 18, letterSpacing: 1 }}>{value}</Text>
    </View>
  )
}


export default function App() {
  let [fontsLoaded] = useFonts({
    "inter-regular": Inter_400Regular,
    "inter-bold": Inter_700Bold
  })

  const [showMore, setShowMore] = useState(false);

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <ImageBackground
      source={require('./assets/light-bg.png')}
      style={styles.background}
    >
      <View style={styles.container}>

        {
          !showMore && (
            <View style={styles.upperContainer}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: 'inter-regular', fontSize: 16, color: 'white' }}>Adipisicing pariatur elit deserunt nisi fugiat magna adipisicing sunt pariatur magna nisi nostrud. Et cillum aute mollit ex cillum.  </Text>
                <Text style={{ fontFamily: 'inter-bold', fontSize: 16, color: 'white', marginTop: 8 }}>- Ada Lovelace</Text>
              </View>
              <Image style={{ marginLeft: 10 }} source={require('./assets/refresh.png')} />

            </View>
          )
        }

        <View style={styles.lowerContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('./assets/sun.png')} />
            <Text style={{ fontFamily: 'inter-regular', fontSize: 18, color: 'white', marginLeft: 8, letterSpacing: 1 }}>Good Morning</Text>
          </View>
          <View>
            <Text style={{ fontFamily: 'inter-bold', fontSize: 80, color: 'white' }}>
              11:37
              <Text style={{ fontFamily: 'inter-regular', fontSize: 15, color: 'white' }}>BST</Text>
            </Text>
          </View>
          <View>
            <Text style={{ fontFamily: 'inter-bold', fontSize: 16, letterSpacing: 2, color: 'white' }}>IN LONDON, UK</Text>
          </View>
          <TouchableOpacity onPress={() => setShowMore(!showMore)} style={styles.button}>
            <Text style={{ fontFamily: 'inter-bold', fontSize: 14, color: 'black', letterSpacing: 3 }}>{showMore ? "Less" : "More"}</Text>
            <Image source={showMore ? require('./assets/arrow-down.png') : require('./assets/arrow-up.png')} />
          </TouchableOpacity>
        </View>

      </View>

      {
        showMore && (

          <View style={{ backgroundColor: "white", opacity: 0.8, paddingVertical: 50, paddingHorizontal: 22 }}>
            <RowView label={'Current Time zone'} value={"Europe/London"} />
            <RowView label={'Day of the year'} value={"295"} />
            <RowView label={'day of the week'} value={"5"} />
            <RowView label={'Week number'} value={"42"} />
          </View>
        )
      }
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 50,
    paddingHorizontal: 26
  },
  upperContainer: {
    flexDirection: 'row',
  },
  lowerContainer: {
    marginBottom: 36
  },
  button: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 40,
    width: 115,
    borderRadius: 30,
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 4,
    alignItems: 'center',
    marginTop: 10
  }
});
