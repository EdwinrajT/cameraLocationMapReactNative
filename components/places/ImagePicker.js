import {launchCameraAsync,useCameraPermissions,PermissionStatus} from 'expo-image-picker';
import {Button,View} from 'react-native';

function ImagePicker(){
    const [cameraPermissionInfo,verifyPermission]=useCameraPermissions();
    async function requestPermission(){
        if(cameraPermissionInfo.status===PermissionStatus.UNDETERMINED)
        {
            const permissionResponse=await verifyPermission();
            return permissionResponse.granted;
        }
        if(cameraPermissionInfo.status===PermissionStatus.DENIED){
            
        }
    }
    async function imagePickerHandler()
    {
        const image=await launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5
        })
        console.log(image);
    }
    return(
        <View>
            <View></View>
            <Button title="Take Photo" onPress={imagePickerHandler}/>
        </View>
    );
}
export default ImagePicker;