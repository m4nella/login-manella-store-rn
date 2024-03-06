import React,{useState} from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { View, Text, Pressable, TextInput, Alert } from "react-native"
import styles from "./styles"
import app from "../firebaseConfig";
import axios from "axios";

export default function Registerx({navigation}) {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const auth = getAuth(app);
    

    function pesquisar(){
        console.log('CEP: ' + cep )
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)        
        .then((response)=> {
            console.log(response.data.logradouro)
        })
    }

    function cadastrar(){
        console.log('XXXXXXXXXXXXXXX')
        createUserWithEmailAndPassword(auth, user, pass)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.navigate('Home')
            // ...
          })
          .catch((error) => {
            console.log('YYYYYYYYYYYYYYY')
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.text}>Register</Text>
            </View>

            <View style={styles.caixaX}>
                <TextInput
                    style={styles.caixa}
                    placeholder="User"
                    value={user}
                    onChangeText={setUser}
                />
            </View>

            <View style={styles.caixaX}>
                <TextInput
                    style={styles.caixa}
                    placeholder="Password"
                    value={pass}
                    onChangeText={setPass}
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.caixaX}>
                <TextInput
                    style={styles.caixa}
                    placeholder="CEP"
                    value={cep}
                    onChangeText={setCep}
                />
            </View>

            <View style={styles.caixaX}>
                <Pressable
                    style={styles.button}
                    onPress={()=>pesquisar()}
                >
                    <Text style={styles.textButton}>Confirmar CEP</Text>
                </Pressable>
            </View>

            <View style={styles.caixaX}>
                <Pressable
                    style={styles.button}
                    onPress={()=>cadastrar()}
                >
                    <Text style={styles.textButton}>Ok</Text>
                </Pressable>
            </View>

        </View>

    )
}