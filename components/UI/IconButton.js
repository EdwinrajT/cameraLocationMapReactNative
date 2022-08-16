import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';
function IconButton({ icon, color, size, onPress }) {
    return (
        <Pressable onPress={onPress} style={({pressed})=>[styles.button, pressed && styles.pressed]}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    );
}
export default IconButton;
const styles=StyleSheet.create({
    button:
    {
        padding:6,
        margin:6,
        justifyContent:'center',
        alignItems:'center',
    },
    pressed:
    {
        opacity:0.75,
    }
})