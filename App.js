import { PaperProvider } from "react-native-paper";
import Home from "./screens/Home";
import NavBar from "./screens/NavBar";
import { useState } from "react";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  return (
    <PaperProvider>
      <NavBar
        showLanguageMenu={showLanguageMenu}
        setShowLanguageMenu={setShowLanguageMenu}
        setCurrentLanguage={setCurrentLanguage}
        currentLanguage={currentLanguage}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home">
            {() => <Home currentLanguage={currentLanguage} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
