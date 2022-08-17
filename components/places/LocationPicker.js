import { Image, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from '../../constants/colors';
import { getCurrentPositionAsync, useForegroundPermissions,PermissionStatus } from "expo-location";
import { getMapPreviw } from "../../util/location";
import { useState } from "react";
function LocationPicker(){
    const [locationImage,setlocationImage]=useState();
    const [currentLocationPermissionInfo,requestPermission]= useForegroundPermissions();  
   
    async function verifyPermission(){
        if(currentLocationPermissionInfo.status===PermissionStatus.UNDETERMINED)
        {
            const permissionResponse=await requestPermission();
            return permissionResponse.granted;
        }
        if(currentLocationPermissionInfo.status===PermissionStatus.DENIED){
            Alert.alert("Permission Denied","You need to allow permissions");
            return false;
        }
        return true;
    }
    async function getUserLocation(){
        const hasPermission=await verifyPermission();
        if(!hasPermission)
        {
            return;
        }
        const location=await getCurrentPositionAsync();
        setlocationImage({
            lat:location.coords.latitude,
            long:location.coords.longitude
        })
    }
    let previewLocation=<Text>No location selected yet</Text>
    if(locationImage)
    {
        previewLocation=<Image style={styles.imageStyle} source={{uri:getMapPreviw(locationImage.lat,locationImage.long)}}/>
    }
    function viewMapHandler(){

    }
    return <View>
        <View style={styles.container}>{previewLocation}</View>
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
    },
    imageStyle:{
        width:'100%',
        height:'100%',
    }
})