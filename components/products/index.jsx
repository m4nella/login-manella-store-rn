import { View, SafeAreaView, Text, Pressable, FlatList, Image } from "react-native"
import styles from "./styles"

export default function Products({ navigation }) {
    4

    const lista = [
        {
            id: 1,
            nome: 'XTUDO',
            preco: 'R$ 25,00',
            foto: 'https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/receitas-de-x-tudo.jpg'
        },
        {
            id: 2,
            nome: 'XSALADA',
            preco: 'R$ 15,00',
            foto: 'https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/d0416bbddd7e82156eb29941b516e8fd-snack-bar.jpg'
        },
        {
            id: 3,
            nome: 'XEGG',
            preco: 'R$ 20,00',
            foto: 'https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/x-egg-73519.jpg'
        },
        {
            id: 4,
            nome: 'XFRANGO',
            preco: 'R$ 30,00',
            foto: 'https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/x-frango-73524.jpg'
        },
        {
            id: 5,
            nome: 'XBACON',
            preco: 'R$ 28,00',
            foto: 'https://lanchonetesabormineiro.com.br/wp-content/uploads/2023/05/Promocao_201604250326298462d3ef9f92300092a34b211e303c1b.jpg'
        },

    ]

    return (
        < SafeAreaView style={styles.container}>
            <Text style={styles.text}>Products</Text>
            <FlatList
                data={lista}
                numColumns={2}
                renderItem={({ item }) =>
                    <View style={styles.produto}>
                        <Text style={styles.text2}>{item.nome}</Text>
                        <Pressable
                            onPress={()=>navigation.navigate('Product', {
                                lanche: item.nome,
                                valor: item.preco,
                                imagem: item.foto,
                                id: item.id
                            })}
                        
                        >
                            <Image source={{ uri: item.foto }} style={{ width: 90, height: 90 }} />
                        </Pressable>
                        <Text style={styles.text2}>{item.preco}</Text>

                    </View>

                } />
        </SafeAreaView>
    )
}