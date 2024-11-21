import React from 'react';
import { Text, View } from 'react-native';
import estilo from './styles';

export default function TelaDescricao () {
  return (
    <View style={estilo.container}>
      <Text style={[estilo.titulo, estilo.largura_descricao]}>
        Nomes das telas
      </Text>

      <Text style={estilo.texto}>
        Perceba que cada aba representa uma tela do aplicativo.
      </Text>
    </View>
  );
}