import { ScheduleCard } from '@components/ScheduleCard';
import dayjs from '@libs/dayjs.config';
import { useNavigation } from '@react-navigation/native';
import { UserNavigatorRoutesProps } from '@routes/user.routes';
import { FlatList, RefreshControl, View } from 'react-native';
import { ScheduleProps } from 'src/types/common';
import * as Styled from './styles';

type ScheduleListProps = {
    schedules?: ScheduleProps[] | undefined
    emptyArrayMessage: string
    onRefresh: () => void
    refreshing: boolean
}

export type EditScheduleScreenProps = {
    id: string
    schedule_date: string
}

export const ScheduleList = ({
    schedules,
    emptyArrayMessage,
    onRefresh,
    refreshing
}: ScheduleListProps) => {
    const { navigate } = useNavigation<UserNavigatorRoutesProps>()

    const handleEditSchedule = (schedule_id: string, schedule_date: Date) => {
        const scheduleDateUtc = dayjs(schedule_date).utc().local().format()
        const params: EditScheduleScreenProps = { id: schedule_id, schedule_date: scheduleDateUtc };

        navigate("editSchedule", params)
    }

    const renderItem = ({ item }: { item: ScheduleProps }) => {
        return (
            <View style={{ flex: 1, paddingBottom: 8 }}>
                <ScheduleCard
                    {...item}
                    key={item.id}
                    onPress={() => handleEditSchedule(item.id, item.date)}
                />
            </View>
        );
    };

    return (
        <Styled.CardArea>
            <FlatList
                data={schedules}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={refreshing}
                refreshControl={
                    <RefreshControl
                        onRefresh={onRefresh}
                        refreshing={refreshing}
                        tintColor={'#fff'}
                    />
                }
                ListEmptyComponent={
                    <Styled.Container>
                        <Styled.TreatmentText> {emptyArrayMessage} </Styled.TreatmentText>
                    </Styled.Container>
                }
            />
        </Styled.CardArea >

    )
}