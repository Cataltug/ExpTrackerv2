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
        CategoryExpenses: screens.CategoryExpenses,
        AddScreen: {
            screen: screens.AddScreen,
            options: {
                headerShown: true,
                headerTitle: "Go Back",
                headerTintColor: "snow",
                headerStyle: {
                backgroundColor: '#2c3e50',
                },
            }
        }
    }
})


export default createStaticNavigation(MyStack);