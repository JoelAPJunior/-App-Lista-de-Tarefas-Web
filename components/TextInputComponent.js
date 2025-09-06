import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function TextInputComponent({ onAdd }) {
  const [texto, setTexto] = useState("");

  return (
    <View>
      <TextInput 
        placeholder="Digite aqui o nome da tarefa..."
        value={texto}
        onChangeText={setTexto}
      />
      <Button 
        title="Adicionar" 
        onPress={() => { onAdd(texto); setTexto(""); }} 
      />
    </View>
  );
}
