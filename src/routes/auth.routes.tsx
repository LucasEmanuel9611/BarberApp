import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Login } from '@screens/auth/Login';
import { Signup } from '@screens/auth/Signup';

type AuthRoutes = {
    login: undefined;
    signup: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="login"
                component={Login}
            />
            <Screen
                name="signup"
                component={Signup}
            />
        </Navigator>
    )
}