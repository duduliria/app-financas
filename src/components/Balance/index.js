import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Balance({ gastos, saldo }) {
  const [mostrarSaldo, setMostrarSaldo] = useState(false);
  const [mostrarGasto, setMostrarGasto] = useState(false);

  function visualizarSaldo() {
    setMostrarSaldo(!mostrarSaldo);
  }
  
  function visualizarGastos() {
    setMostrarGasto(!mostrarGasto)
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitulo}>Saldo</Text>

        <View style={styles.conteudo}>
          <TouchableOpacity onPress={visualizarSaldo}>
            {mostrarSaldo ? (
              <Text style={styles.balanco}>{saldo}</Text>
            ) : (
              <Text style={styles.borrao}></Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitulo}>Gastos</Text>
        <View style={styles.conteudo}>
           <TouchableOpacity onPress={visualizarGastos}>
            {mostrarGasto ? (
              <Text style={styles.gastos}>{gastos}</Text>
            ) : (
              <Text style={styles.borrao}></Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",

    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },

  itemTitulo: {
    fontSize: 20,
    color: "#dadada",
  },

  conteudo: {
    flexDirection: "row",
    alignItems: "center",
  },

  balanco: {
    fontSize: 22,
    color: "#2ecc71",
  },

  gastos: {
    fontSize: 22,
    color: "#e74c3c",
  },

  borrao: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#bebbbbff",
    borderRadius: 8,
  },
});
