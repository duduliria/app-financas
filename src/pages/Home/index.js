import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Actions from "../../components/Actions";
import Movements from "../../components/Movements";

const lista = [
  {
    id: 1,
    conta: "Boleto de água",
    valor: 90,
    data: "28/07/2025",
    tipo: 0, // despesas
  },
  {
    id: 2,
    conta: "Boleto de Luz",
    valor: 250,
    data: "25/07/2025",
    tipo: 0, // despesas
  },
  {
    id: 3,
    conta: "PIX do George",
    valor: 550,
    data: "27/07/2025",
    tipo: 1, // receita
  },
  {
    id: 4,
    conta: "PIX do Thais",
    valor: 250,
    data: "27/07/2025",
    tipo: 1, // receita
  },
  {
    id: 4,
    conta: "PIX do Thais",
    valor: 85,
    data: "27/07/2025",
    tipo: 0, // receita
  },
];

export default function Home() {
  function calcularReceitas(lista) {
    let soma = 0;
    for (let vr of lista) {
      if (vr.tipo === 1) {
        soma += vr.valor;
      }
    }
    return soma;
  }

  function calcularGastos(lista) {
    let soma = 0;

    for (let vr of lista) {
      if (vr.tipo === 0) {
        soma += vr.valor;
      }
    }

    return soma;
  }

  function transformarEmMoeda(dinheiro) {
    return dinheiro.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const saldo = calcularReceitas(lista);
  const gasto = calcularGastos(lista);
  const calculo = saldo - gasto;

  return (
    <View style={styles.container}>
      <Header nomeUsuario={"Eduardo de Oliveira"} />
      <Balance
        saldo={transformarEmMoeda(calculo)}
        gastos={transformarEmMoeda(gasto)}
      />
      <Actions/>
      <Text style={styles.titulo}>Últimas movimentações</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Movements dados={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },

  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 14,
  },
});
