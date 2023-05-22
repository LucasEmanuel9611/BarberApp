import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo } from '@expo/vector-icons';

import { Home } from '@screens/Home';
import { Schedule } from '@screens/Schedule';

type AppRoutes = {
    home: undefined;
    schedule: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {

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
                name='home'
                component={Home}
                options={{
                    tabBarIcon: () => <Entypo name="home" size={24} color="white" />

                }}
            />

            <Screen
                name='schedule'
                component={Schedule}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="clock" size={24} color="white" />
                    )
                }}
            />
        </Navigator>
    );
}