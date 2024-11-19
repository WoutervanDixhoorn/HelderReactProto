import { StatusBar } from "expo-status-bar";
import NavigationContainer from "@/components/NavigationContainer";
import NavigationContextProvider from "@/context/NavigationProvider";

export default function Index() {
  return (
    <>
      <NavigationContextProvider>
        <StatusBar />
        <NavigationContainer />
      </NavigationContextProvider>
    </>
  );
}