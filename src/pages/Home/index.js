import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Actions from "../../components/Actions";
import Movements from "../../components/Movements";
import { useState } from "react";
import ModalForm from "../../components/Modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function Home() {
  const [lista, setLista] = useState([
    { id: 1, conta: "Pix Thais", valor: 90, data: "28/07/2025", tipo: 1 },
  ]);

  const STORAGE_KEY = "@lista_transacoes";

  useEffect(() => {
    async function carregarLista() {
      try {
        const dadosSalvos = await AsyncStorage.getItem(STORAGE_KEY);
        if (dadosSalvos) {
          setLista(JSON.parse(dadosSalvos));
        }
      } catch (error) {
        console.log("Erro ao carregar dados do AsyncStorage:", error);
      }
    }

    carregarLista();
  }, []);

  useEffect(() => {
    async function salvarLista() {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
      } catch (error) {
        console.log("Erro ao salvar dados no AsyncStorage:", error);
      }
    }

    salvarLista();
  }, [lista]); 

  const [modalVisivel, setModalVisivel] = useState(false);

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

  function adicionarTransacao(item) {
    const novaTransacao = {
      ...item,
      id: lista.length + 1,
      data: new Date().toLocaleDateString("pt-BR"),
    };

    setLista([...lista, novaTransacao]);
  }

  return (
    <View style={styles.container}>
      <Header nomeUsuario={"Eduardo de Oliveira"} />
      <Balance
        saldo={transformarEmMoeda(calculo)}
        gastos={transformarEmMoeda(gasto)}
      />
      <Actions abrirModal={() => setModalVisivel(true)} />
      <Text style={styles.titulo}>Últimas movimentações</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Movements dados={item} />}
      />

      <ModalForm
        visivel={modalVisivel}
        fechado={() => setModalVisivel(false)}
        salvar={adicionarTransacao}
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
