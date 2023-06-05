import { ReactNode } from "react";
import * as Styled from "./styles";

type UserLayoutProps = {
    username: string;
    children: ReactNode;
}


export const UserLayout = ({ children, username }: UserLayoutProps) => {
    return (
        <Styled.Container>
            <Styled.UserContent>
                <Styled.UserNameContainer>
                    <Styled.WelcomeText>Bem vindo, </Styled.WelcomeText>
                    <Styled.UserName>{username} </Styled.UserName>
                </Styled.UserNameContainer>
                <Styled.UserAvatar
                    source={{ uri: "https://www.nicepng.com/png/full/128-1280406_user-icon-png.png" }}
                />
            </Styled.UserContent>
            {children}
        </Styled.Container >
    )
}