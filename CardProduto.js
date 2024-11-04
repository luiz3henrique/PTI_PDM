jsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardProduto = ({ produto }) => {
  return (
    <View style={styles.card}>
      <Image source={produto.imagem} style={styles.imagem} />
      <Text style={styles.titulo}>{produto.nome}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
      <Text style={styles.preco}>R$ {produto.preco}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#008000',
  },
});