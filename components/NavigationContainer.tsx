import { View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import NavBar from "./NavBar";
import { useNavigationContext } from "@/context/NavigationProvider";

const NavigationContainer = () => {
    const insets = useSafeAreaInsets();

    const { renderPage } = useNavigationContext();

    return (
        <View style={{ flex: 1, paddingBottom: insets.bottom}}>
            { renderPage() }
            <NavBar />
        </View>
    );
};

export default NavigationContainer;