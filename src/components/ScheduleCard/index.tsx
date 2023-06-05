import { ScheduleStatus } from "@components/StatusText"
import dayjs from "dayjs"
import { ScheduleStatusTextProps } from "src/types/common"
import * as Styled from "./styles"

type ScheduleCardProps = {
    status: ScheduleStatusTextProps;
    date: Date;
    onPress: () => void
}

export const ScheduleCard = ({
    date,
    status,
    onPress
}: ScheduleCardProps) => {
    return (
        <Styled.CardContainer onPress={onPress}>
            <Styled.StatusSideContainer>
                <ScheduleStatus status={status} />
            </Styled.StatusSideContainer>
            <Styled.DateContainer>
                <Styled.CardText>{dayjs(date).format("DD/MM/YYYY")} </Styled.CardText>
                <Styled.CardText>{dayjs(date).format("HH:mm")} </Styled.CardText>
            </Styled.DateContainer>
        </Styled.CardContainer>
    )
}

