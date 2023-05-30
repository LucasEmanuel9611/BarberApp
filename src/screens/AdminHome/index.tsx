
import { ScheduleList } from "@components/ScheduleList";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import { useFocusEffect } from "@react-navigation/native";
import { getSchedulesThunk } from "@store/modules/schedules/thunk";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { ScrollView } from "react-native";
import { useToast } from "react-native-toast-notifications";
import { ScheduleProps } from "src/types/common";
import dayjs from "../../libs/dayjs.config";
import * as Styled from "./styles";

export const AdminHome = () => {
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
    // Schedules
    // Users
    // Schedules for tomorrow
    // Schedules for today

    return (
        <Styled.Container>
            <ScrollView style={{ flex: 1 }}>
                <StatusBar style="light" hidden={true} />
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
                    <ScrollView style={{ marginBottom: 180 }}>
                        <Styled.InfoCard >
                            <Styled.CardSideContainer>
                                <Styled.CardTitle>Agendamentos</Styled.CardTitle>
                            </Styled.CardSideContainer>
                            <Styled.CardSideContainer>
                                <Styled.TextInfo>2{schedules.length}</Styled.TextInfo>
                            </Styled.CardSideContainer>
                        </Styled.InfoCard>
                        <Styled.InfoCard >
                            <Styled.CardSideContainer>
                                <Styled.CardTitle>Agendamentos hoje {dayjs().format('DD/MM')}</Styled.CardTitle>
                            </Styled.CardSideContainer>
                            <Styled.CardSideContainer>
                                <Styled.TextInfo>10</Styled.TextInfo>
                            </Styled.CardSideContainer>
                        </Styled.InfoCard>
                        <Styled.InfoCard >
                            <Styled.CardSideContainer>
                                <Styled.CardTitle>Agendamentos amanhã {dayjs().add(1, 'day').format('DD/MM')}</Styled.CardTitle>
                            </Styled.CardSideContainer>
                            <Styled.CardSideContainer>
                                <Styled.TextInfo>10</Styled.TextInfo>
                            </Styled.CardSideContainer>
                        </Styled.InfoCard>

                        <ScheduleList schedules={schedules} />
                    </ScrollView>
                </Styled.Content>

            </ScrollView>
        </Styled.Container >
    )
}