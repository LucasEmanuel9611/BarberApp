import { useAppSelector } from "@hooks/useAppSelector";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";

export function Routes() {
    const { isAuthenticated } = useAppSelector(state => state.auth);
    const { user } = useAppSelector(state => state.user);

    const auhtenticatedRoutes = user.isAdmin ? <AdminRoutes /> : <UserRoutes />

    return (
        <NavigationContainer>
            {
                isAuthenticated ? auhtenticatedRoutes : <AuthRoutes />
            }
        </NavigationContainer>
    );
}