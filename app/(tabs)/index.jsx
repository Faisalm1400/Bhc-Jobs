import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/src/components/shared/Header"
import Banner from "@/src/components/landing/Banner"
import PopularIndustries from "@/src/components/landing/PopularIndustries"
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <Banner />
        <PopularIndustries />
      </ScrollView>
    </SafeAreaView>
  );
}
