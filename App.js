import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { LoginScreen } from "./screens/LoginScreen";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView>
          <ScrollView>
            <StatusBar style="auto" />
            <LoginScreen />
          </ScrollView>
        </SafeAreaView>
      </ApplicationProvider>
    </NavigationContainer>
  );
}
