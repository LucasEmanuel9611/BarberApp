
import { AdminScheduleList } from "@components/AdminScheduleList";
import { AdminLayout } from "@components/Layout/AdminLayout";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { useAppSelector } from "@hooks/useAppSelector";
import dayjs from "@libs/dayjs.config";
import { useFocusEffect } from "@react-navigation/native";
import { getSchedulesByDayThunk, getSchedulesThunk } from "@store/modules/schedules/thunk";
import { useCallback, useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { ScheduleProps } from "src/types/common";
import * as Styled from "./styles";
import { StatusBar } from "expo-status-bar";

export const AdminHome = () => {
    const { user } = useAppSelector(state => state.user);
    const toast = useToast();
    const appDispatch = useAppDispatch();
    const [schedulesToday, setSchedulesToday] = useState<ScheduleProps[]>([]);
    const [schedulesTomorrow, setSchedulesTomorrow] = useState<ScheduleProps[]>([]);
    const [schedules, setSchedules] = useState<ScheduleProps[]>([]);
    const [refreshing, setRefreshing] = useState<boolean>(false);

    useEffect(() => {
        const dateNow = dayjs().utc().local().format()
        const dateTomorrow = dayjs().add(1, "day").utc().local().format()

        appDispatch(getSchedulesByDayThunk(dateNow, {
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

        appDispatch(getSchedulesByDayThunk(dateTomorrow, {
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

        setRefreshing(false)
    }, [refreshing])

    return (
        <AdminLayout username={user.name}>
            <StatusBar style='dark' />
            <Styled.InfoCard >
                <Styled.CardSideContainer>
                    <Styled.CardTitle>Agendamentos</Styled.CardTitle>
                </Styled.CardSideContainer>
                <Styled.CardSideContainer>
                    <Styled.TextInfo>{schedules.length}</Styled.TextInfo>
                </Styled.CardSideContainer>
            </Styled.InfoCard>
            <Styled.InfoCard >
                <Styled.CardSideContainer>
                    <Styled.CardTitle>Agendamentos hoje {dayjs().format('DD/MM')}</Styled.CardTitle>
                </Styled.CardSideContainer>
                <Styled.CardSideContainer>
                    <Styled.TextInfo>{schedulesToday.length}</Styled.TextInfo>
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
            <AdminScheduleList
                schedules={schedulesToday}
                showUserName
                emptyArrayMessage="Não há agendamentos para hoje"
                refreshing={refreshing}
                onRefresh={() => setRefreshing(true)}
            />
        </AdminLayout>
    )
}