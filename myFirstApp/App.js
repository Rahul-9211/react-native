// import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, StatusBar } from 'react-native';
import Loading from './components/Loading';
import Welcome from './components/Welcome';

export default function App() {
  // console.log("this is me")
  // let a = 1;
  // a.toStriig()
  // let a;
  // a.toStrin()
  const [loading, setLoading] = useState(true)
  const [TextLines, setTextLines] = useState(1)
  async function openPage() {
    setTimeout(() => {

      setLoading(false)
    }, 1000);
  }
  useEffect(() => {
    openPage()
  }, [])
  const handleTextOnPress = () => {
    console.log("line pressed")
    setTextLines(3)
  }
  return (
    <View style={styles.container}>

      {loading ? <Loading /> : <Welcome />}

      {/* <Text numberOfLines={TextLines} onPress={handleTextOnPress}>This is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loreamThis is Testing App 41 loream
      </Text>
      <Image source={{
        height: 200,
        width: 200,
        uri: "https://picsum.photos/200/300"
      }} /> */}

      {/* <Image source={{
        height: 200,
        width: 200,
        uri: "./assets/icon.png"
      }} />
      <Image source={require("./assets/icon.png")} /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    paddingTop: StatusBar.currentHeight
  },
});
