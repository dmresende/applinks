import {
  Image,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Text,
  Alert,
} from "react-native";
import { useState, useCallback } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { router , useFocusEffect} from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { linkStorage, LinkStorage} from "@/storage/link-storage";

import { Link } from "@/components/link";
import { Option } from "@/components/option";
import { categories } from "@/utils/categories";

export default function Index() {
  const [links, setLinks] = useState<LinkStorage[]>([]);
  const [category, setCategory] = useState(categories[0].name);
  
  async function getLinks() {
    try{
      const response = await linkStorage.get()
      console.log("🚀 ~ getLinks ~ response:", response)
      console.log("🚀 ~ Index ~ category:", category)
      const filtered = response.filter((link) => link.category === category)
      console.log("🚀 ~ getLinks ~ link.category :", links )



      setLinks(filtered)

    }catch(error){
      Alert.alert("Erro", " Não foi possível listar os links")
      console.log("🚀 ~ getLinks ~ error:", error)
    }
    
  }

  useFocusEffect(
    useCallback(() => {
      getLinks();
      console.log("🚀 ~ Index ~ category:", category)
  },[categories])
)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity onPress={() => router.navigate("/add")}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      <Categories selected={category} onChange={setCategory} />

      <FlatList
        data={links}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Link
            name={item.name}
            url={item.url}
            onDetails={() => console.log("clicou")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />
      <Modal transparent visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Curso</Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="close"
                  size={20}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.modallinkName}>Douglas</Text>
            <Text style={styles.modalUrl}>https://douglasresende.com.br</Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant="secondary" />
              <Option name="Abrir" icon="language" variant="secondary" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
