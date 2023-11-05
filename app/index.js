import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import {
 Nearbyjobs,
 Popularjobs,
 ScreenHeaderBtn,
 Welcome,
} from "../components";
import { View, Text, ScrollView, SafeAreaView } from "react-native";

import { COLORS, icons, images, SIZES } from "../constants";

const Home = () => {
 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
   <Stack.Screen
    options={{
     headerStyle: { backgroundColor: COLORS.lightWhite },
     headerShadowVisible: false,
     headerLeft: () => (
      <ScreenHeaderBtn iconsUrl={icons.menu} dimension="60%" />
     ),
     headerRight: () => (
      <ScreenHeaderBtn iconsUrl={images.profile} dimension="100%" />
     ),
     headerTitle: "",
    }}
   />
   <ScrollView showsVerticalScrollIndicator={false}>
    <View
     style={{
      flex: 1,
      padding: SIZES.medium,
     }}
    >
     <Welcome />
     <Popularjobs />
     <Nearbyjobs />
    </View>
   </ScrollView>
  </SafeAreaView>
 );
};

export default Home;
