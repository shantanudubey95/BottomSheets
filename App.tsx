import { ShowcaseApp } from "@gorhom/showcase-template";
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { screens as defaultScreens } from "./app/src/screens";
import { version } from "./package.json";

const author = {
  username: "Mo Gorhom",
  url: "https://gorhom.dev",
};

interface AppProps {
  screens?: any[];
}

const App = ({ screens: providedScreens }: AppProps) => {
  const screens = useMemo(
    () => [...defaultScreens, ...(providedScreens ? providedScreens : [])],
    [providedScreens]
  );
  return (
    <GestureHandlerRootView style={styles.container}>
      <ShowcaseApp
        name="Bottom Sheet"
        description=""
        version={version}
        author={author}
        data={screens}
      />
      {/* <View>
        <Text>Hello</Text>
      </View> */}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
});

export default App;
