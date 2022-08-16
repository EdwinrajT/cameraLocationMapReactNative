import { useState } from "react";
import { ScrollView, StyleSheet, Text,TextInput,View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

function PlaceForm(){
    const [enteredTitle,setEnteredTitle]=useState('');
    function titleChangeHandler(enteredText)
    {
        setEnteredTitle(enteredText);
    }
    return (

        <ScrollView style={styles.container}>
            <View >
                <Text style={styles.titleLabel}>Title</Text>
                <TextInput  style={styles.inputStyle} onChangeText={titleChangeHandler}/>
            </View>
            <ImagePicker/>
        </ScrollView>
    );
}
export default PlaceForm;

const styles=StyleSheet.create({
    container:{
        margin:30,
        flex:1,
    },
    titleLabel:
    {
        color:Colors.primary200,
        marginBottom:5,
    },
    inputStyle:{
        paddingHorizontal:6,
        paddingVertical:10,
        backgroundColor:Colors.primary200,
        borderRadius:5,
        marginVertical:5
    }
})