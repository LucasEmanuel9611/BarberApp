
import { FloatAddButton } from "@components/FloatAddButton";
import { ScheduleList } from "@components/ScheduleList";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { UserNavigatorRoutesProps } from "@routes/user.routes";
import { getUserSchedulesThunk } from "@store/modules/schedules/thunk";
import { useCallback, useState } from "react";
import { ScrollView } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { ScheduleProps } from "src/types/common";
import * as Styled from "./styles";

export const UserHome = () => {
    const { user } = useAppSelector(state => state.user);
    const toast = useToast();
    const appDispatch = useAppDispatch();
    const [schedules, setSchedules] = useState<ScheduleProps[]>([]);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const navigation = useNavigation<UserNavigatorRoutesProps>();

    const handleCreateSchedulePage = () => {
        navigation.navigate("createSchedule")
    }

    useFocusEffect(
        useCallback(() => {
            appDispatch(getUserSchedulesThunk({
                onSuccess: (data) => {
                    setSchedules(data)
                },
                onError: (error) => {
                    const errorMessage = error.response.data.message ?? "tente novamente"
                    toast.show(`Erro ${errorMessage.toLowerCase()}`, {
                        type: "danger",
                        placement: "top",
                        duration: 4000,
                        animationType: "slide-in",
                    });
                }
            }))
        }, []))

    return (
        <Styled.Container>
            <ScrollView>
                <Styled.UserContent>
                    <Styled.UserNameContainer>
                        <Styled.WelcomeText>Bem vindo, </Styled.WelcomeText>
                        <Styled.UserName>{user.name} </Styled.UserName>
                    </Styled.UserNameContainer>
                    <Styled.UserAvatar
                        source={{ uri: "https://www.nicepng.com/png/full/128-1280406_user-icon-png.png" }}
                    />
                </Styled.UserContent>
                <ScheduleList
                    schedules={schedules}
                    emptyArrayMessage="Você não possui agendamentos"
                    refreshing={refreshing}
                    onRefresh={() => setRefreshing(true)}
                />
            </ScrollView>
            <FloatAddButton onPress={handleCreateSchedulePage} />
        </Styled.Container >
    )
}