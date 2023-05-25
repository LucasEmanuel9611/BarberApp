import { useAppSelector } from "@hooks/useAppSelector";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {

    const { isAuthenticated } = useAppSelector(state => state.auth);

    return (
        <View style={{ flex: 1, backgroundColor: '#202024' }}>
            <NavigationContainer>
                {
                    isAuthenticated ? <AppRoutes /> : <AuthRoutes />
                }
            </NavigationContainer>
        </View>
    );
}