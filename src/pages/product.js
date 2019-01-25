import React, { Component } from "react";

import { View, Text } from "react-native";

class Product extends Component {
  state = {
    product: {}
  };

  componentDidMount() {
    this.setState({ product: this.props.navigation.state.params.product });
  }

  render() {
    return (
      <View>
        <Text>Título</Text>
        <Text>{this.state.product.title}</Text>
        <Text>Descrição</Text>
        <Text>{this.state.product.description}</Text>
        <Text>Cor</Text>
        <Text>{this.state.product.color}</Text>
        <Text>Tamanho</Text>
        <Text>{this.state.product.size}</Text>
      </View>
    );
  }
}

Product.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.product.title
});

export default Product;
