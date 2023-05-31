
import { ScheduleList } from "@components/ScheduleList";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { useFocusEffect } from "@react-navigation/native";
import { getSchedulesByDayThunk, getSchedulesThunk } from "@store/modules/schedules/thunk";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { ScrollView, View } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { ScheduleProps } from "src/types/common";
import dayjs from "../../libs/dayjs.config";
import * as Styled from "./styles";

export const AdminHome = () => {
    const { user } = useAppSelector(state => state.user);
    const toast = useToast();
    const appDispatch = useAppDispatch();
    const [schedulesToday, setSchedulesToday] = useState<ScheduleProps[]>([]);
    const [schedulesTomorrow, setSchedulesTomorrow] = useState<ScheduleProps[]>([]);
    const [schedules, setSchedules] = useState<ScheduleProps[]>([]);

    useFocusEffect(
        useCallback(() => {
            const dateNow = dayjs().toDate()
            const dateTomorrow = dayjs().add(1, "day").toDate()
            appDispatch(getSchedulesByDayThunk({ date: dateNow }, {
                onSuccess: (data) => {
                    setSchedulesToday(data)
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
            appDispatch(getSchedulesByDayThunk({ date: dateTomorrow }, {
                onSuccess: (data) => {
                    setSchedulesTomorrow(data)
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
                <ScrollView style={{ marginBottom: 0 }}>
                    <Styled.InfoCard >
                        <Styled.CardSideContainer>
                            <Styled.CardTitle>Agendamentos</Styled.CardTitle>
                        </Styled.CardSideContainer>
                        <Styled.CardSideContainer>
                            <Styled.TextInfo>2{schedulesTomorrow.length}</Styled.TextInfo>
                        </Styled.CardSideContainer>
                    </Styled.InfoCard>
                    <Styled.InfoCard >
                        <Styled.CardSideContainer>
                            <Styled.CardTitle>Agendamentos hoje {dayjs().format('DD/MM')}</Styled.CardTitle>
                        </Styled.CardSideContainer>
                        <Styled.CardSideContainer>
                            <Styled.TextInfo>{schedules.length}</Styled.TextInfo>
                        </Styled.CardSideContainer>
                    </Styled.InfoCard>
                    <Styled.InfoCard >
                        <Styled.CardSideContainer>
                            <Styled.CardTitle>Agendamentos amanhã {dayjs().add(1, 'day').format('DD/MM')}</Styled.CardTitle>
                        </Styled.CardSideContainer>
                        <Styled.CardSideContainer>
                            <Styled.TextInfo>{schedulesTomorrow.length}</Styled.TextInfo>
                        </Styled.CardSideContainer>
                    </Styled.InfoCard>
                    <ScheduleList
                        schedules={schedulesToday}
                        showUserName
                        emptyArrayMessage="não há agendamentos para hoje" />
                    <View style={{ height: 40 }} />
                </ScrollView>
            </Styled.Content>
        </Styled.Container >
    )
}