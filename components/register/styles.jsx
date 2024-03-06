import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#87d3ff',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize: 40,
        fontWeight:'bold',
        color: 'white'
    },
    caixa:{
        width:'70%',
        height: 50,
        backgroundColor:'white',
        borderRadius: 10,
        fontSize:25,
        padding:10,
        color: '#aaa'
    },
    caixaX:{
        width: '100%',
        alignItems: 'center',
        justifyContent:'center',
        height:50,
        marginTop:20
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
        
    }
})


export default styles