import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import * as Styled from "./styles";

type AdminLayoutProps = {
    username: string;
    children: ReactNode
}

export const AdminLayout = ({ username, children }: AdminLayoutProps) => {
    return (
        <Styled.Container>
            <StatusBar style="dark" />
            <Styled.UserContent>
                <Styled.UserNameContainer>
                    <Styled.WelcomeText>Bem vindo, </Styled.WelcomeText>
                    <Styled.UserName>{username} </Styled.UserName>
                </Styled.UserNameContainer>
                <Styled.UserAvatar
                    source={{ uri: "https://www.nicepng.com/png/full/128-1280406_user-icon-png.png" }}
                />
            </Styled.UserContent>
            <Styled.Content>
                {children}
            </Styled.Content>
        </Styled.Container>
    )
}