import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import RevenueCatUI from "react-native-purchases-ui";

export default function Modal() {
  return (
    <ThemedView style={styles.container}>
      <Pressable
        onPress={async () => {
          console.log("open customer center");
          await RevenueCatUI.presentCustomerCenter();
        }}
      >
        <ThemedText type="title">Open customer center</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
