import {launchCameraAsync,useCameraPermissions,PermissionStatus} from 'expo-image-picker';
import { useState } from 'react';
import {Alert, Button,Image,StyleSheet,Text,View} from 'react-native';
import { Colors } from '../../constants/colors';
import OutlineButton from '../UI/OutlineButton';

function ImagePicker(){
    const [capturedImage,setCapturedImage]=useState();
    const [cameraPermissionInfo,verifyPermission]=useCameraPermissions();
    async function requestPermission(){
        if(cameraPermissionInfo.status===PermissionStatus.UNDETERMINED)
        {
            const permissionResponse=await verifyPermission();
            return permissionResponse.granted;
        }
        if(cameraPermissionInfo.status===PermissionStatus.DENIED){
            Alert.alert("Permission Denied","You need to allow permissions");
            return false;
        }
        return true;
    }
    async function imagePickerHandler()
    {
        const hasPermission=await requestPermission();
        if(!hasPermission)
        {
            return;
        }
        const image=await launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5
        })
        setCapturedImage(image.uri);

    }
    let previewImage=<Text>No Preview Image</Text>
    if(capturedImage)
    {
        previewImage=<Image style={styles.imageStyle} source={{uri:capturedImage}}/>
    }
    return(
        <View>
            <View style={styles.imageContainer}>{previewImage}</View>
            <OutlineButton icon="camera-outline" onPress={imagePickerHandler}>Take Photo</OutlineButton>
            
        </View>
    );
}

export default ImagePicker;
const styles=StyleSheet.create({
    imageContainer:{
        width:'100%',
        height:200,
        marginVertical:10,
        backgroundColor:Colors.primary50,
        justifyContent:'center',
        alignItems:'center',
        
    },
    imageStyle:{
        width:'100%',
        height:'100%',
    }
})