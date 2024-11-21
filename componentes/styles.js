import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontWeight: '700'
  },

  titulo: {
    fontSize: 18,
    marginBottom: 20,
    
  },

  largura_home: {
    width: 170,
  },

  largura_rotas: {
    width: 200,
  },

  largura_biblioteca: {
    width: 270,
  },

  largura_descricao: {
    width: 180,
  },

  texto: {
    textAlign: "center"
  }
});

export default estilo;