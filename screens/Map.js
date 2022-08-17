import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map(){
    const region={
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    return <MapView style={styles.mapContainer} initialRegion={region}/>
}
export default Map;

const styles=StyleSheet.create({
    mapContainer:{
        flex:1,
    }
})