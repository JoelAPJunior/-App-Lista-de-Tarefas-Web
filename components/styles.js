// styles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74b9ff", // azul suave no fundo
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 15,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#2d3436",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#dfe6e9",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#f1f2f6",
    marginRight: 10,
  },
  botaoAdicionar: {
    backgroundColor: "#00b894",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  filtros: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  filtroBotao: {
    padding: 8,
    borderRadius: 8,
  },
  filtroAtivo: {
    backgroundColor: "#0984e3",
  },
  filtroTexto: {
    color: "#2d3436",
    fontWeight: "600",
  },
  filtroTextoAtivo: {
    color: "#fff",
  },
  tarefaItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#dfe6e9",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
  },
  tarefaTexto: {
    fontSize: 16,
    flex: 1,
    marginLeft: 8,
    color: "#2d3436",
  },
  concluida: {
    textDecorationLine: "line-through",
    color: "#636e72",
  },
  botoesAcoes: {
    flexDirection: "row",
    alignItems: "center",
  },
  botaoEditar: {
    backgroundColor: "#fdcb6e",
    padding: 8,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  botaoRemover: {
    backgroundColor: "#d63031",
    padding: 8,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  botaoAcaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "85%",
    alignItems: "center",
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  modalBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalBotao: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  modalBotaoSalvar: {
    backgroundColor: "#00b894",
  },
  modalBotaoCancelar: {
    backgroundColor: "#d63031",
  },
  modalBotaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
});
