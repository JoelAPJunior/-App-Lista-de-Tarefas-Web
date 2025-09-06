import React from "react";
import { FlatList, View, Text } from "react-native";
import TouchableOpacityComponent from "./TouchableOpacityComponent";

export default function FlatListComponent({ tarefas, onToggle, onEdit, onDelete }) {
  return (
    <FlatList
      data={tarefas}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacityComponent 
            label={item.concluida ? "[✔]" : "[ ]"} 
            onPress={() => onToggle(item.id)} 
          />
          <Text>{item.texto}</Text>
          <TouchableOpacityComponent label="Editar" onPress={() => onEdit(item)} />
          <TouchableOpacityComponent label="Excluir" onPress={() => onDelete(item)} />
        </View>
      )}
    />
  );
}
