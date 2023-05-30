import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateSchedule } from '@screens/CreateSchedule';
import { UserHome } from '@screens/UserHome';

type UserRoutes = {
    userHome: undefined;
    schedule: undefined;
    createSchedule: undefined;
}

export type UserNavigatorRoutesProps = NativeStackNavigationProp<UserRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<UserRoutes>();

export function UserRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='userHome'
                component={UserHome}
            />
            <Screen
                name='createSchedule'
                component={CreateSchedule}
            />
        </Navigator>
    );
}