jsx
import React from 'react';
import CardProduto from './CardProduto';
import cardDoProduto from './assets/images/card_do_produto.png';

const produto = {
  imagem: cardDoProduto,
  nome: 'Hambúrguer',
  descricao: 'Hambúrguer de carne bovina',
  preco: 19.90,
};

const App = () => {
  return (
    <View>
      <CardProduto produto={produto} />
    </View>
  );
};