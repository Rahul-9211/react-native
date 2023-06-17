import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";


export default function Welcome() {
    const image = {};
    return (
        <View style={Style.container}>
            <View style={Style.imageView} >
                <ImageBackground source={{
                    uri: 'https://reactjs.org/logo-og.png'
                }} resizeMode="cover" style={Style.image}>
                    {/* <Text style={Style.text}>Inside</Text> */}
                    <Image resizeMode="cover" source={{
                        uri: 'https://reactjs.org/logo-og.png',
                        height: 100,
                        width: 200
                    }} />
                </ImageBackground>
            </View>
            <View style={Style.btn1} ></View>
            <View style={Style.btn2} ></View>

        </View>
    )
}

const Style = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        paddingTop: 30
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    container: {
        backgroundColor: "pink",
        flex: 1,
    },
    imageView: {
        backgroundColor: "red",
        flex: 6
    },

    btn1: {
        backgroundColor: "orange",
        flex: 1
    },
    btn2: {
        backgroundColor: "green",
        flex: 1
    }
})