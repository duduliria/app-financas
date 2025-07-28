import { StyleSheet, Text, View } from "react-native";

export default function Balance() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitulo}>Saldo</Text>

        <View style={styles.conteudo}>
          <Text style={styles.balanco}>4000</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitulo}>Gastos</Text>
        <View style={styles.conteudo}>
          <Text style={styles.gastos}>4000</Text>
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
    color: "#dadada"
  },

  conteudo: {
    flexDirection: "row",
    alignItems: "center"
  },

  balanco: {
    fontSize: 22,
    color: "#2ecc71",
  },

  gastos: {
    fontSize: 22,
    color: '#e74c3c'
  }
});
