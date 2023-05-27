import { ScheduleStatus } from "@components/StatusText"
import dayjs from "dayjs"
import { ScheduleProps } from "src/types/common"
import * as Styled from "./styles"

type ScheduleCardProps = ScheduleProps

export const ScheduleCard = ({ created_at, status }: ScheduleCardProps) => {
    return (
        <Styled.Container>
            <Styled.StatusSideContainer>
                <ScheduleStatus status={status} >
                    {status?.toLowerCase()}
                </ScheduleStatus>
            </Styled.StatusSideContainer>
            <Styled.DateContainer>
                <Styled.DateText>{dayjs(created_at).format("D/MM/YYYY")} </Styled.DateText>
                <Styled.DateText>{dayjs(created_at).format("HH:mm")} </Styled.DateText>
            </Styled.DateContainer>
        </Styled.Container>
    )
}