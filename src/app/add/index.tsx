import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { linkStorage } from "@/storage/link-storage";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState<string>();
  const [url, setUrl] = useState<string>();

  async function handleAdd() {
    try{
      if (!category) {
        Alert.alert("Categoria", "Você precisa selecionar uma categoria");
        return;
      }
  
      if (!name?.trim) {
        Alert.alert("Nome", "Você precisa informar um Nome");
        return;
      }
  
      if (!url?.trim) {
        Alert.alert("URL", "Você precisa informar uma URL");
        return;
      }

      await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category
      })

      Alert.alert("Sucesso", "Link salvo com sucesso!", [
        {
          text: "Ok",
          onPress: () => router.back()
        } 
      ]);


    }catch(error){
      Alert.alert("⚠️ Erro", "Não foi possível salvar o link");
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
        </TouchableOpacity>
        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories selected={category} onChange={setCategory} />

      <View style={styles.form}>
        <Input 
        placeholder="Nome" 
        onChangeText={setName} 
        />
        <Input 
        placeholder="URL" 
        onChangeText={setUrl}
        autoCorrect={false}
        autoCapitalize="none"
         />
        <Button 
        title="Adicionar" 
        onPress={handleAdd}
         />
      </View>
    </View>
  );
}
