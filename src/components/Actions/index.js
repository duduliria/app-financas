import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.container}
      >
        <TouchableOpacity style={styles.acaoBotao}>
          <View style={styles.areaBotao}>
            <AntDesign name="addfolder" size={26} color={"#000"} />
          </View>
          <Text style={styles.nomeBotao}>Entradas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acaoBotao}>
          <View style={styles.areaBotao}>
            <AntDesign name="tagso" size={26} color={"#000"} />
          </View>
          <Text style={styles.nomeBotao}>Compras</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acaoBotao}>
          <View style={styles.areaBotao}>
            <AntDesign name="creditcard" size={26} color={"#000"} />
          </View>
          <Text style={styles.nomeBotao}>Carteira</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acaoBotao}>
          <View style={styles.areaBotao}>
            <AntDesign name="barcode" size={26} color={"#000"} />
          </View>
          <Text style={styles.nomeBotao}>Boletos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acaoBotao}>
          <View style={styles.areaBotao}>
            <AntDesign name="setting" size={26} color={"#000"} />
          </View>
          <Text style={styles.nomeBotao}>Contas</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 95,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 20,
    paddingStart: 20,
  },

  acaoBotao: {
    alignItems: "center",
    marginRight: 32,
  },

  areaBotao: {
    backgroundColor: "#ecf0f1",
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  nomeBotao: {
    marginTop: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
});
