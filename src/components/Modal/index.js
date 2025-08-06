import { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ModalForm({ visivel, fechado, salvar }) {
  const [conta, setConta] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState(0);

  function salvarDados() {
    if (conta === "" || valor === "") {
      alert("Preencha todos os campos!");
      return;
    }

    salvar({
      conta,
      valor: parseFloat(valor),
      tipo,
    });

    setConta("");
    setValor("");
    setTipo(0);
    fechado();
  }

  return (
    <Modal visible={visivel} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.titulo}>Nova transação</Text>
          <TextInput
            onChangeText={setConta}
            value={conta}
            style={styles.campo}
            placeholder="Descrição"
          />
          <TextInput
            onChangeText={setValor}
            value={valor}
            style={styles.campo}
            placeholder="Valor"
            keyboardType="numeric"
          />
          <View style={styles.grupoRadio}>
            <TouchableOpacity
              onPress={() => setTipo(1)}
              style={[styles.radio, tipo === 1 && styles.selecionado]}
            >
              <Text
                style={
                  tipo === 1 ? styles.radioTextoSelecionado : styles.radioTexto
                }
              >
                Receita
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTipo(0)}
              style={[styles.radio, tipo === 0 && styles.selecionado]}
            >
              <Text
                style={
                  tipo === 0 ? styles.radioTextoSelecionado : styles.radioTexto
                }
              >
                Despesas
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.botoes}>
            <TouchableOpacity style={styles.botaoSalvar} onPress={salvarDados}>
              <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoCancelar} onPress={fechado}>
              <Text style={styles.textoBotao}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#000000aa",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8810ae",
    marginBottom: 15,
    textAlign: "center",
  },

  campo: {
    borderWidth: 1,
    bordercolor: "#8810ae",
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },

  grupoRadio: {
    flexDirection: "row",
    marginVertical: 10,
    gap: 2,
  },

  radio: {
    padding: 10,
    borderWidth: 1,
    bordercolor: "#8810ae",
    borderRadius: 4,
  },

  selecionado: {
    backgroundColor: "#8810ae",
  },

  radioTextoSelecionado: {
    color: "#fff",
  },

  botoes: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 4,
    marginTop: 15,
  },

  botaoSalvar: {
    backgroundColor: "#8810ae",
    padding: 10,
    borderRadius: 4,
  },

  botaoCancelar: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 4,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});
