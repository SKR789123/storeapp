import { TouchableOpacity,Text,StyleSheet } from "react-native";
const AppButton = ({title, action}) =>{


    return(
        <TouchableOpacity style={styles.button} onPress={action}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({

    button:{
        backgroundColor:'#645cfc',
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'center',
        height:30,
        borderRadius:5
 
    },
    buttonText:{
        color:'#fff',
    
    }


})

export default AppButton;

