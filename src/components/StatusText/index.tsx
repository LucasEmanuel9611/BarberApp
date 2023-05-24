import { ScheduleStatusTextProps } from "src/types/common";
import { useTheme } from "styled-components";
import * as Styled from "./styles";

type ScheduleStatusProps = {
    status: ScheduleStatusTextProps
    children: any
}

export const ScheduleStatus = ({ children, status }: ScheduleStatusProps) => {
    const { COLORS } = useTheme();

    const textColor = (status: string) => {
        if (status === "APROVADO") {
            return COLORS.GREEN
        } else if (status === "REPROVADO") {
            return COLORS.RED
        } else {
            return COLORS.ORANGE_100
        }
    }

    return (
        <Styled.CustomText color={textColor(status)} >
            {children}
        </Styled.CustomText>
    )
}


