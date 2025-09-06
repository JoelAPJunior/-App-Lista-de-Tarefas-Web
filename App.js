import React, { useState } from "react";
import { View, Text } from "react-native";
import TextInputComponent from "./components/TextInputComponent";
import FlatListComponent from "./components/FlatListComponent";
import ButtonComponent from "./components/ButtonComponent";
import ModalComponent from "./components/ModalComponent";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");
  const [modalVisible, setModalVisible] = useState(false);
  const [tarefaEditando, setTarefaEditando] = useState(null);

  // adicionar
  const adicionarTarefa = (texto) => {
    if (texto.trim() === "") return;
    setTarefas([...tarefas, { id: Date.now().toString(), texto, concluida: false }]);
  };

  // concluir
  const toggleConcluida = (id) => {
    setTarefas(tarefas.map(t => 
      t.id === id ? { ...t, concluida: !t.concluida } : t
    ));
  };

  // editar
  const editarTarefa = (id, novoTexto) => {
    setTarefas(tarefas.map(t => 
      t.id === id ? { ...t, texto: novoTexto } : t
    ));
    setModalVisible(false);
  };

  // remover
  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id));
    setModalVisible(false);
  };

  // filtrar
  const tarefasFiltradas = tarefas.filter(t => {
    if (filtro === "Pendentes") return !t.concluida;
    if (filtro === "Concluídas") return t.concluida;
    return true;
  });

  return (
    <View>
      <TextInputComponent onAdd={adicionarTarefa} />

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <ButtonComponent title="Todas" onPress={() => setFiltro("Todas")} />
        <ButtonComponent title="Pendentes" onPress={() => setFiltro("Pendentes")} />
        <ButtonComponent title="Concluídas" onPress={() => setFiltro("Concluídas")} />
      </View>

      <FlatListComponent 
        tarefas={tarefasFiltradas}
        onToggle={toggleConcluida}
        onEdit={(tarefa) => { setTarefaEditando(tarefa); setModalVisible(true); }}
        onDelete={(tarefa) => { setTarefaEditando(tarefa); setModalVisible(true); }}
      />

      {tarefaEditando && (
        <ModalComponent 
          visible={modalVisible}
          tarefa={tarefaEditando}
          onClose={() => setModalVisible(false)}
          onSave={editarTarefa}
          onDelete={removerTarefa}
        />
      )}
    </View>
  );
}
