import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
    // color: colors.green[300],
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green[300],
  },
  title: {
    color: colors.gray[900],
    fontSize: 16,
    fontWeight: "600",
  },
});
