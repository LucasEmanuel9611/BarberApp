import { ScheduleStatus } from "@components/StatusText"
import { Entypo } from '@expo/vector-icons'
import dayjs from "dayjs"
import { TouchableOpacity } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import { ScheduleProps } from "src/types/common"
import { useTheme } from "styled-components"
import * as Styled from "./styles"

export type CardProps = {
    showUserName?: boolean
    rightAction: () => void
    leftAction: () => void
}

type ScheduleCardProps = ScheduleProps & CardProps

export const ScheduleCard = ({
    created_at,
    status,
    username,
    showUserName,
    rightAction,
    leftAction
}: ScheduleCardProps) => {

    const { COLORS } = useTheme();

    const leftSwipe = () => {
        return (
            <TouchableOpacity onPress={leftAction} activeOpacity={0.6}>
                <Styled.LeftActionContainer >
                    <Entypo name="trash" size={40} color={COLORS.GRAY_300} />
                </Styled.LeftActionContainer>
            </TouchableOpacity>
        );
    }

    const rightSwipe = () => {
        return (
            <TouchableOpacity onPress={rightAction} activeOpacity={0.6}>
                <Styled.RightActionContainer >
                    <Entypo name="check" size={40} color={COLORS.GRAY_300} />
                </Styled.RightActionContainer>
            </TouchableOpacity>
        );
    }

    return (
        <Swipeable
            renderLeftActions={leftSwipe}
            renderRightActions={rightSwipe}
            friction={2}
            overshootLeft={false}
            overshootRight={false}
        >
            <Styled.CardContainer>
                <Styled.StatusSideContainer>
                    <ScheduleStatus status={status} />
                    {showUserName && <Styled.CardText>
                        {username}
                    </Styled.CardText>}
                </Styled.StatusSideContainer>
                <Styled.DateContainer>
                    <Styled.CardText>{dayjs(created_at).format("D/MM/YYYY")} </Styled.CardText>
                    <Styled.CardText>{dayjs(created_at).format("HH:mm")} </Styled.CardText>
                </Styled.DateContainer>
            </Styled.CardContainer>
        </Swipeable>
    )
}

