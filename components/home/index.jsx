import { View, Text, Pressable } from "react-native"
import styles from "./styles"

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Pressable
                style= {styles.button}
                onPress={()=>navigation.navigate('Products')}
            >
                <Text style={styles.textButton}>Ok</Text>
            </Pressable>
        </View>
    )
}