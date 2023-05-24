import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UserHome } from '@screens/UserHome';

type AppRoutes = {
    home: undefined;
    schedule: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='home'
                component={UserHome}
            />
        </Navigator>
    );
}