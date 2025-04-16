import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { useSelector,useDispatch} from "react-redux";
import { clearHistory } from "../redux/slice";


export default function History(){
    const history = useSelector((state) => state.translate.history)
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
        {/*  上面的标题部分  */}
            <View style={styles.header}>
                <Text style={styles.font16}>翻译记录</Text>
                <Pressable onPress={() => dispatch(clearHistory())} style={styles.clearBtn}>
                    <Text>清空记录</Text>
                    <AntDesign name="closecircleo" size={14} color="black" />
                </Pressable>
            </View>
        {/*  下面的所有的翻译  */}
            <ScrollView>
                {
                    history.map((item, index) => {
                        return (
                            <View key={index} style={styles.item}>
                                <View>
                                    <Text style={[styles.txt,styles.font16]}>{item.txt}</Text>
                                </View>
                                <View>
                                    <Text>{item.res}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:15
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    clearBtn:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        width:120
    },
    item:{
        marginTop:15
    },
    txt:{
        color:"#888",
        marginBottom:5
    },
    font16:{
        fontSize:16,
    }
});