import { PaperProvider } from "react-native-paper";
import Home from "./screens/Home";
import NavBar from "./screens/NavBar";
import SessionFrequency from "./screens/SessionFrequency";
import Session from "./screens/Session";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  return (
    <PaperProvider>
      <NavigationContainer>
        <NavBar
          showLanguageMenu={showLanguageMenu}
          setShowLanguageMenu={setShowLanguageMenu}
          setCurrentLanguage={setCurrentLanguage}
          currentLanguage={currentLanguage}
        />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home">
            {(props) => <Home {...props} currentLanguage={currentLanguage} />}
          </Stack.Screen>
          <Stack.Screen name="SessionStart">
            {(props) => (
              <SessionFrequency {...props} currentLanguage={currentLanguage} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Session">
            {(props) => (
              <Session {...props} currentLanguage={currentLanguage} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
