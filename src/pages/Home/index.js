import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Actions from "../../components/Actions";

const lista = [
  {
    id: 1,
    conta: "Boleto de água",
    valor: 90,
    data: "28/07/2025",
    tipo: 0 // despesas
  },
  {
    id: 2,
    conta: "Boleto de Luz",
    valor: 250,
    data: "25/07/2025",
    tipo: 0 // despesas
  },
  {
    id: 3,
    conta: "PIX do George",
    valor: 550,
    data: "27/07/2025",
    tipo: 1 // receita
  },
]

export default function Home() {
  return (
    <View>
      <Header nomeUsuario={"Eduardo de Oliveira"}/>
      <Balance saldo={"R$ 4000,00"} gastos={"R$ 2250,00"}/>

      <Actions />
    </View>
  );
}

const styles = StyleSheet.create({});
