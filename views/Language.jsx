import {StyleSheet, Text, View} from "react-native";

export default function Language(){
    return (
        <View style={styles.container}>
            <Text>Hello Language!</Text>
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
