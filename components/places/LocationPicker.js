import { StyleSheet, View } from "react-native";
import OutlineButton from "../UI/OutlineButton";

function LocationPicker(){
    function getUserLocation(){

    }
    function viewMapHandler(){

    }
    return <View>
        <View style={styles.container}></View>
        <View style={styles.btnContainer}>
            <OutlineButton icon="location-outline" onPress={getUserLocation}>Locate User</OutlineButton>
            <OutlineButton icon="map-outline" onPress={viewMapHandler}>Pick on map</OutlineButton>
        </View>
    </View>
}

export default LocationPicker;

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:200,
        marginVertical:10,
        backgroundColor:Colors.primary50,
        justifyContent:'center',
        alignItems:'center',
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
})