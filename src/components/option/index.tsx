import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";

type OptionProps = {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primaty" | "secondary";
};

export function Option({
  name,
  icon,
  variant = "primaty",
  ...rest
}: OptionProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={20}
        color={variant === "primaty" ? colors.green[300] : colors.gray[400]}
      />
      <Text
        style={
          variant === "primaty" ? styles.primatyTitle : styles.secondaryTitle
        }
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
