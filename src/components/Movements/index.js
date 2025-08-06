import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Movements({ dados }) {
  const [mostrarValor, setMostrarValor] = useState(false);

  function visualizarValor() {
    setMostrarValor(!mostrarValor);
  }

  function transformarEmMoeda(dinheiro) {
    return dinheiro.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={visualizarValor}>
      <Text style={styles.data}>{dados.data}</Text>

      <View style={styles.conteudo}>
        <Text style={styles.conta}>{dados.conta}</Text>
        {mostrarValor ? (
          <Text style={dados.tipo === 1 ? styles.receitas : styles.despesas}>
            {dados.tipo === 1
              ? `${transformarEmMoeda(dados.valor)}`
              : `-${transformarEmMoeda(dados.valor)}`}
          </Text>
        ) : (
          <View style={styles.borrao}></View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dadada",
    marginHorizontal: 10,
  },

  conteudo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  data: {
    color: "#dadada",
    fontWeight: "bold",
  },

  conta: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2976dcff",
  },

  receitas: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },

  despesas: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },

  borrao: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#bebbbbff",
    borderRadius: 8,
  }
});
