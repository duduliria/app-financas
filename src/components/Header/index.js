import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import { StatusBar } from "react-native";

const barraDeStatus = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({nomeUsuario}) {
  return (
    <View style={styles.container}>
      <View style={styles.conteudo}>
        <Text style={styles.usuario}>{nomeUsuario}</Text>

        <TouchableOpacity style={styles.botaoUsuario}>
          <Feather name="user" size={27} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
    paddingTop: barraDeStatus,
  },

  conteudo: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  usuario: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },

  botaoUsuario: {
    width: 44, // largura
    height: 44, // altura
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent:"center",
    alignItems: "center",
    borderRadius: "50%"
  },
});
