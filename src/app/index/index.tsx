import { Image, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { style } from "./style";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";

export default function Index() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={require("@/assets/logo.png")} style={style.logo} />
        <TouchableOpacity>
          <MaterialIcons
            name="add"
            size={32}
            color={colors.green[300]}
            style={style.addButton}
          />
        </TouchableOpacity>
      </View>
      <Categories />
    </View>
  );
}
