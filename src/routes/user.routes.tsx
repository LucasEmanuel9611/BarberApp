import { EditScheduleScreenProps } from '@components/ScheduleList';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CreateSchedule } from '@screens/user/CreateSchedule';
import { EditSchedule } from '@screens/user/EditSchedule';
import { UserHome } from '@screens/user/UserHome';
import { useTheme } from 'styled-components/native';

export type UserRoutes = {
    userHome: undefined;
    schedule: undefined;
    createSchedule: undefined;
    editSchedule: EditScheduleScreenProps;
}

export type UserNavigatorRoutesProps = NativeStackNavigationProp<UserRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<UserRoutes>();

export function UserRoutes() {
    const { COLORS } = useTheme();

    return (
        <Navigator screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.GRAY_500
            },
            headerTintColor: COLORS.WHITE
        }}>
            <Screen
                name='userHome'
                component={UserHome}
                options={{ headerShown: false }}
            />
            <Screen
                name='createSchedule'
                component={CreateSchedule}
                options={{
                    title: 'Criar agendamento',
                }}
            />
            <Screen
                name='editSchedule'
                component={EditSchedule}
                options={{
                    title: 'Editar agendamento',
                }}
            />
        </Navigator>
    );
}
