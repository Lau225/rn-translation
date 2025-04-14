import {StyleSheet, Text, View,StatusBar} from "react-native";

export default function Home(){
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4b3c96"/>
            <Text>Hello Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});