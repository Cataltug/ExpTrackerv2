import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../screens';
import { createStaticNavigation } from '@react-navigation/native';




const MyStack = createNativeStackNavigator({

    screenOptions: {
        headerShown: false
    },
    screens: {
        Home: screens.Home,
        Category: screens.Category,
        Details: screens.Details,
        AddScreen: {
            screen: screens.AddScreen,
            options: { headerShown: true, headerTitle: "Go Back"}
        }
    }
})

export default createStaticNavigation(MyStack);