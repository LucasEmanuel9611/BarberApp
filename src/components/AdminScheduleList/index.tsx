import { FlatList, RefreshControl, View } from 'react-native';
import { ScheduleProps } from 'src/types/common';
import * as Styled from './styles';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { patchApproveScheduleThunk, patchReproveScheduleThunk } from '@store/modules/schedules/thunk';
import { AdminScheduleCard } from '@components/AdminScheduleCard';

type AdminScheduleListProps = {
    schedules?: ScheduleProps[] | undefined
    emptyArrayMessage: string
    showUserName?: boolean
    onRefresh: () => void
    refreshing: boolean
}

export const AdminScheduleList = ({
    schedules,
    showUserName,
    emptyArrayMessage,
    onRefresh,
    refreshing
}: AdminScheduleListProps) => {

    const appDispatch = useAppDispatch();

    const handleRightButton = (id: string) => {
        appDispatch(
            patchApproveScheduleThunk(
                id,
                {
                    onSuccess: () => {
                        onRefresh()
                    },
                    onError: () => {

                    }
                }
            )
        )
    }

    const handleLeftButton = (id: string) => {
        appDispatch(
            patchReproveScheduleThunk(
                id, {
                onSuccess: () => {
                    onRefresh()
                },
                onError: (err) => {
                    console.log(err)
                }
            }
            )
        )
    }

    const renderItem = ({ item }: { item: ScheduleProps }) => {
        return (
            <View style={{ flex: 1, paddingBottom: 8 }}>
                <AdminScheduleCard
                    {...item}
                    key={item.id}
                    showUserName={showUserName}
                    rightAction={() => handleRightButton(item.id)}
                    leftAction={() => handleLeftButton(item.id)}
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