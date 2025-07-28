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
          <Text style={dados.tipo === 1 ? styles.receita : styles.despesas}>
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

const styles = StyleSheet.create({});
