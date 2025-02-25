//arquivo responsável pela configuração de rotas
import { Stack } from "expo-router"; //nagegação em pilha
import { colors } from "@/styles/colors";
export default function Layout() {
  const backgroundColor = colors.gray[950];
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor },
      }}
    />
  );
}
