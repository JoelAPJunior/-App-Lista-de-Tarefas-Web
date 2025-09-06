import React, { useState } from "react";
import { Modal, View, TextInput, Button, Text } from "react-native";

export default function ModalComponent({ visible, tarefa, onClose, onSave, onDelete }) {
  const [texto, setTexto] = useState(tarefa.texto);

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={{ margin: 20, padding: 20, backgroundColor: "white" }}>
        <Text>Editando Tarefa</Text>
        <TextInput value={texto} onChangeText={setTexto} />
        <Button title="Salvar" onPress={() => onSave(tarefa.id, texto)} />
        <Button title="Excluir" onPress={() => onDelete(tarefa.id)} />
        <Button title="Cancelar" onPress={onClose} />
      </View>
    </Modal>
  );
}
