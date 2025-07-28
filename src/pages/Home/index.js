import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";

export default function Home() {
  return (
    <View>
      <Header nomeUsuario={"Eduardo de Oliveira"}/>
      <Balance />
    </View>
  );
}

const styles = StyleSheet.create({});
