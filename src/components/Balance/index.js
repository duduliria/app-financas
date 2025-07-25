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

const styles = StyleSheet.create({});
