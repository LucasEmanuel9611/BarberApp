import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AdminHome } from '@screens/AdminHome';
import { AdminProfile } from '@screens/AdminProfile';
import { AdminSchedules } from '@screens/AdminSchedules';

type AdminRoutes = {
    adminHome: undefined;
    adminSchedules: undefined;
    adminProfile: undefined;
}

export type AdminNavigatorRoutesProps = NativeStackNavigationProp<AdminRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AdminRoutes>();

export function AdminRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'black',
                borderTopWidth: 0,
                paddingBottom: 10,
                paddingTop: 10,
                height: 60
            },
        }}>
            <Screen
                name='adminHome'
                component={AdminHome}
                options={{
                    tabBarIcon: () => <Entypo name="home" size={24} color="white" />
                }}
            />
            <Screen
                name='adminSchedules'
                component={AdminSchedules}
                options={{
                    tabBarIcon: () => <Entypo name="clock" size={24} color="white" />
                }}
            />
            <Screen
                name='adminProfile'
                component={AdminProfile}
                options={{
                    tabBarIcon: () => <Entypo name="user" size={24} color="white" />
                }}
            />
        </Navigator>
    );
}

