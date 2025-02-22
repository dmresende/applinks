import { Image, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { style } from "./style";
import { colors } from "@/styles/colors";
import { Category } from "@/components/category";
import { categories } from "@/utils/categories";

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
      <Category
        name={categories[0].name}
        icon={categories[0].icon}
        isSelected
      />
      <Category
        name={categories[1].name}
        icon={categories[1].icon}
        isSelected={false}
      />
      <Category
        name={categories[2].name}
        icon={categories[2].icon}
        isSelected={false}
      />
    </View>
  );
}
