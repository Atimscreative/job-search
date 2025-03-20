import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "@/components";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  const router = useRouter();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: true,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                handlePress={() => {}}
                dimension="60%"
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={images.profile}
                handlePress={() => {}}
                dimension="100%"
              />
            ),
            headerTitle: "",
          }}
        />

        <ScrollView showsVerticalScrollIndicator>
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
