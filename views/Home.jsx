import {StyleSheet, Text, View, StatusBar, TextInput, Pressable, Button} from "react-native";
import {useState} from "react";
import translate from '../api/translate'
import {useDispatch, useSelector} from "react-redux";
import { addHistory } from "../redux/slice";

export default function HomeScreen() {

    const dispatch = useDispatch()
    const [content, setContent] = useState("");
    const [res,setRes] = useState("");
    const lanList = useSelector((state)=>state.translate.lanList);
    // 获取当前选中的语言
    const curIndex = useSelector((state)=>state.translate.curIndex);
    const pressHandle = () => {
        if(content){
            // 进行翻译
            translate(content,{from:"auto",to:lanList[curIndex].lang})
                .then(res => {
                    setRes(res)
                    dispatch(addHistory({
                        txt:content,res
                    }))
                })
                .catch(err => {
                    console.log(err);
                    
                })
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#4b3c96" />
            {/* 上面翻译成哪一国语言 */}
            <View style={styles.lan}>
                <Text style={styles.lanTxt}>翻译为
                    <Text style={{
                        color: "#1c1b21",
                        fontWeight: "900"
                    }}>{lanList[curIndex].chs}</Text>
                </Text>
            </View>
            {/* 输入要翻译的文本 */}
            <TextInput
                multiline
                numberOfLines={10}
                placeholder="请输入您要翻译的文本"
                placeholderTextColor="#c7c7c7"
                style={styles.txtInput}
                textAlignVertical="top"
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            {/* 显示译文区域，可以点击 */}
            <View
                style={styles.resultContainer}
            >
                <Text style={styles.resultTitle}>译文：</Text>
                <Text>{res}</Text>
            </View>
            <Button onPress={pressHandle} title='翻译'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lan:{
        width: 150,
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    lanTxt : {
        color:"#888",
        fontSize: 14
    },
    txtInput:{
        borderColor: "grey",
        borderBottomWidth: 1,
        backgroundColor : "#fff",
        padding: 10,
        paddingTop: 15,
        flex: 0.7
    },
    resultContainer: {
        flex: 1,
        padding: 10
    },
    resultTitle : {
        fontSize: 18,
        marginBottom: 10
    }
});
