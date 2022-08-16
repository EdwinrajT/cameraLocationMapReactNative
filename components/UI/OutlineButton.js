import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text ,View} from 'react-native';
import { Colors } from '../../constants/colors';
function OutlineButton({icon,children,onPress}){
    return(
        <Pressable style={({pressed})=> [styles.container, pressed && styles.pressed]} onPress={onPress}>
        <View style={styles.subcontainer}>
            <Ionicons name={icon} size={24} color={Colors.primary100} />
            <Text style={styles.textSty}>{children}</Text>
        </View>
        </Pressable>
    );
}
export default OutlineButton;
const styles=StyleSheet.create({
    container:{
        padding:9,
        borderWidth:1,
        borderColor:Colors.primary100,
       
    },
    subcontainer:
    {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    pressed:
    {
        opacity:0.75,
        backgroundColor:Colors.primary400,
    },
    textSty:
    {
        fontSize:16,
        color:Colors.primary100,
        marginLeft:20,
    }
})