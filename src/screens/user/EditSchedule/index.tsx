import Button from '@components/Button';
import { Input } from '@components/Input';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import dayjs from '@libs/dayjs.config';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { UserNavigatorRoutesProps, UserRoutes } from '@routes/user.routes';
import { createScheduleThunk } from '@store/modules/schedules/thunk';
import { useState } from 'react';
import { View } from "react-native";
import { useToast } from 'react-native-toast-notifications';
import { useTheme } from 'styled-components/native';
import * as Styled from "./styles";

type EditScheduleScreenRouteProp = RouteProp<UserRoutes, 'editSchedule'>;

export const EditSchedule = () => {
    const [openDatePicker, setOpenDatePicker] = useState(false)
    const [openTimePicker, setOpenTimePicker] = useState(false)
    const navigation = useNavigation<UserNavigatorRoutesProps>();
    const route = useRoute<EditScheduleScreenRouteProp>();
    const { id, date: schedule_date } = route.params;
    const [date, setDate] = useState(schedule_date);
    const { user } = useAppSelector(state => state.user);
    const appDispatch = useAppDispatch();
    const toast = useToast();
    const { COLORS } = useTheme()

    const toggleDatePicker = () => {
        setOpenDatePicker(!openDatePicker)
    }

    const toggleTimePicker = () => {
        setOpenTimePicker(!openDatePicker)
    }

    const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setOpenDatePicker(false);
        setOpenTimePicker(false);
        setDate(dayjs(currentDate).utc().local().format())
    };

    const handleCreateSchedule = (date: Date) => {
        appDispatch(createScheduleThunk({ date }, {
            onSuccess: () => {
                toast.show("Sucesso ao criar agendamento", {
                    type: "success",
                    placement: "top",
                    duration: 4000,
                    animationType: "slide-in",
                });
                navigation.navigate("userHome")
            },
            onError: (error) => {
                console.log(error)
                const errorMessage = error.response.data?.message ?? "ao criar agendamento tente novamente"
                toast.show(`Erro ${errorMessage.toLowerCase()}`, {
                    type: "danger",
                    placement: "top",
                    duration: 4000,
                    animationType: "slide-in",
                });
            }
        }))
    }

    return (
        <Styled.Container>
            <Styled.FormContainer>
                <Input
                    icon='user'
                    value={user.name}
                    isErrored={false}
                    name="username"
                    editable={false}
                />

                <View style={{
                    flexDirection: 'row',
                    gap: 5
                }}>

                    <Styled.DateButton
                        onPress={toggleDatePicker}>
                        <Styled.DateButtonText>{dayjs(date).utc().local().format("DD/MM/YYYY")} </Styled.DateButtonText>
                    </Styled.DateButton>

                    <Styled.DateButton
                        onPress={toggleTimePicker}>
                        <Styled.DateButtonText>{dayjs(date).utc().local().format("HH:mm")} </Styled.DateButtonText>
                    </Styled.DateButton>
                </View>


                {openDatePicker &&
                    <DateTimePicker
                        value={new Date(date)}
                        mode="date"
                        locale="pt-BR"
                        display="default"
                        onChange={handleDateChange}
                    />
                }

                {openTimePicker &&
                    <DateTimePicker
                        value={new Date(date)}
                        mode="time"
                        locale="pt-BR"
                        is24Hour={true}
                        display="default"
                        onChange={handleDateChange}
                    />
                }
            </Styled.FormContainer>

            <Button color={COLORS.ORANGE_100} onPress={() => handleCreateSchedule(date)}>
                Editar agendamento
            </Button>
            <Button color={COLORS.RED_200} onPress={() => handleCreateSchedule(date)}>
                Cancelar agendamento
            </Button>
        </Styled.Container>
    )
}