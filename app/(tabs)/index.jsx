import { ScrollView } from "react-native";
import Header from "@/src/components/shared/Header"
import Banner from "@/src/components/landing/Banner"
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}

      >
        <Banner />
      </ScrollView>
    </SafeAreaView>
  );
}
