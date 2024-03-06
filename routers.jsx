import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather, AntDesign } from "@expo/vector-icons"
import Login from "./components/login"
import Home from "./components/home"
import Products from "./components/products"
import Product from "./components/product"
import Register from "./components/register"

const Pilha = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor:'#968A70',
                    paddingBottom:1,
                    paddingTop:1, 
                    borderTopColor:'transparent',
                    borderTopLeftRadius:20,
                    borderTopRightRadius:20,
                    
                },
                tabBarActiveTintColor:'white',
                tabBarInactiveTintColor: '#555',
            }}
        
        >
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    tabBarStyle:{display: 'none'},
                    tabBarIcon:({size, color})=>(
                        <Feather name="user" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon:({size, color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Products"
                component={Products}
                options={{
                    headerShown: false,
                    tabBarIcon:({size, color})=>(
                        <Feather name="twitter" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false,
                    tabBarIcon:({size, color})=>(
                        <Feather name="user-plus" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Product"
                component={Product}
                options={{
                    headerShown: false,
                    tabBarIcon:({size, color})=>(
                        <Feather name="twitter" size={size} color={color}/>
                    )
                }}
            />



        </Tab.Navigator>
    )
}


export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Products"
                    component={Products}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Register"
                    component={Register}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Product"
                    component={Product}
                    options={{ headerShown: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}