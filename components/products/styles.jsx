import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize: 40,
        fontWeight:'bold',
        marginTop:30
    },
    text2:{
        fontSize: 25,
        fontWeight:'bold',

    },
    button:{
        backgroundColor:'#37eb34',
        width:'30%',
        height:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        
    },
    textButton:{
        fontSize: 25,
        fontWeight:'bold',
    },
    produto:{
        width:150,
        height: 190,
        backgroundColor:'white',
        padding:10,
        margin:20,
        alignItems:'center',
    }
})

export default styles