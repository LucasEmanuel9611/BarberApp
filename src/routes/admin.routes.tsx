import { Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AdminHome } from '../screens/admin/AdminHome';
import { AdminProfile } from '../screens/admin/AdminProfile';
import { AdminSchedules } from '../screens/admin/AdminSchedules';
import { useTheme } from 'styled-components/native';

type AdminRoutes = {
    adminHome: undefined;
    adminSchedules: undefined;
    adminProfile: undefined;
}

export type AdminNavigatorRoutesProps = NativeStackNavigationProp<AdminRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AdminRoutes>();

export function AdminRoutes() {
    const theme = useTheme()
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: theme.COLORS.ORANGE_100,
            tabBarInactiveTintColor: theme.COLORS.WHITE,
            tabBarStyle: {
                backgroundColor: 'black',
                borderTopWidth: 0,
                paddingBottom: 20,
                paddingTop: 10,
                height: 88,
            },
        }}>
            <Screen
                name='adminHome'
                component={AdminHome}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />
                }}
            />
            <Screen
                name='adminSchedules'
                component={AdminSchedules}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="clock" size={24} color={color} />
                }}
            />
            <Screen
                name='adminProfile'
                component={AdminProfile}
                options={{
                    tabBarIcon: ({ color }) => <Entypo name="user" size={24} color={color} />
                }}
            />
        </Navigator>
    );
}

