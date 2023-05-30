import { ScheduleStatus } from "@components/StatusText"
import dayjs from "dayjs"
import { ScheduleProps } from "src/types/common"
import * as Styled from "./styles"

type ScheduleCardProps = ScheduleProps & {
    showUserName?: boolean
}

export const ScheduleCard = ({ created_at, status, username, showUserName }: ScheduleCardProps) => {
    return (
        <Styled.CardContainer >
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
    )
}