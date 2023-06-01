import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/Login';
import { SignupScreen } from '../screens/Signup';
import { MainScreen } from '../screens/Main';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <Navigator screenOptions={{ headerShown: false, animation: 'slide_from_left' }}>
            <Screen name="main" component={MainScreen} />
            <Screen name="login" component={LoginScreen} />
            <Screen name="signup" component={SignupScreen} />
        </Navigator>
    )
};