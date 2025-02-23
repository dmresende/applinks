import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState<string>();
  const [url, setUrl] = useState<string>();

  function handleAdd() {
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
        <Input placeholder="Nome" onChangeText={setName} />
        <Input placeholder="URL" onChangeText={setUrl} />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
