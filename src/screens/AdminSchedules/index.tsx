
import { ScheduleList } from "@components/ScheduleList";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { useFocusEffect } from "@react-navigation/native";
import { getSchedulesThunk } from "@store/modules/schedules/thunk";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { ScrollView, View } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { ScheduleProps } from "src/types/common";
import * as Styled from "./styles";

export const AdminSchedules = () => {
    const { user } = useAppSelector(state => state.user);
    const toast = useToast();
    const appDispatch = useAppDispatch();
    const [schedules, setSchedules] = useState<ScheduleProps[]>([]);

    useFocusEffect(
        useCallback(() => {
            appDispatch(getSchedulesThunk({
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
            <StatusBar style="dark" />
            <Styled.UserContent>
                <Styled.UserNameContainer>
                    <Styled.WelcomeText>Bem vindo, </Styled.WelcomeText>
                    <Styled.UserName>{user.name} </Styled.UserName>
                </Styled.UserNameContainer>
                <Styled.UserAvatar
                    source={{ uri: "https://www.nicepng.com/png/full/128-1280406_user-icon-png.png" }}
                />
            </Styled.UserContent>
            <Styled.Content>
                <ScrollView>
                    <ScheduleList
                        schedules={schedules}
                        showUserName
                        emptyArrayMessage="não há agendamentos" />
                    <View style={{ height: 40 }} />
                </ScrollView>
            </Styled.Content>
        </Styled.Container >
    )
}