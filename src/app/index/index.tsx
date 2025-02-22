import { Text, View } from "react-native";
import { style } from "./style";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Hello World</Text>
      <Text style={style.title}>Hello react-native</Text>
    </View>
  );
}
