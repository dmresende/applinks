import { Text, Pressable, PressableProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

//pega a tipagem do PressableProps do react-native
type CategoriesProps = PressableProps & {
  name: string;
  isSelected: boolean;
  //pega o tipo específico da lib
  icon: keyof typeof MaterialIcons.glyphMap;
};

//Spread syntax = ...props
export function Category({
  name,
  icon,
  isSelected,
  ...props
}: CategoriesProps) {
  //valida props isSelected para definir cor
  const color = isSelected ? colors.green[300] : colors.gray[400];

  return (
    <Pressable style={styles.container} {...props}>
      <MaterialIcons name={icon} size={16} color={color} />
      <Text style={[styles.name, { color }]}>{name}</Text>
    </Pressable>
  );
}
