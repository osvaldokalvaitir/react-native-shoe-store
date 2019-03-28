import React, { Component } from 'react';
import { withFormik } from 'formik';
import { compose, lifecycle, hoistStatics } from 'recompose';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import api from '~/services/api';

import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';

import Slider from 'react-native-slider';

import styles from './styles';
import { colors } from '~/styles';

class Product extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params.id) ? 'Editar Produto' : 'Novo produto' 
  });

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          id: PropTypes.string,
          updateProducts: PropTypes.func.isRequired,
        }),
      }),
    }).isRequired,
    values: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.number,
    }).isRequired,
    errors: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.number,
    }).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
  };

  deleteProduct = async () => {
    const { id, updateProducts } = this.props.navigation.state.params;
    try {
      await api.delete(`/products/${id}`);
      updateProducts();
      this.props.navigation.navigate('Main');
    } catch (err) {
      alert(`Não foi possível excluir o produto. Erro: ${err}`);
    }
  };

  render() {
    const {
      handleSubmit, errors, values, setFieldValue,
    } = this.props;
    const { id } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <View style={styles.productItem}>
            <TextInput
              style={styles.input}
              placeholder="Título"
              type="text"
              name="title"
              value={values.title}
              onChangeText={text => setFieldValue('title', text)}
            />
            {!!errors.title && (
              <Text style={styles.productError}>{errors.title}</Text>
            )}
          </View>
          <View style={styles.productItem}>
            <TextInput
              style={styles.input}
              placeholder="Descrição"
              type="text"
              name="description"
              value={values.description}
              onChangeText={text => setFieldValue('description', text)}
            />
            {!!errors.description && (
              <Text style={styles.productError}>{errors.description}</Text>
            )}
          </View>
          <View style={styles.productItem}>
            <TextInput
              style={styles.input}
              placeholder="Cor"
              type="text"
              name="color"
              value={values.color}
              onChangeText={text => setFieldValue('color', text)}
            />
            {!!errors.color && (
              <Text style={styles.productError}>{errors.color}</Text>
            )}
          </View>
          <View style={styles.productItem}>
            <View style={styles.containerSlider}>
              <Text>{`Tamanho: ${values.size}`}</Text>
              <Slider
                minimumTrackTintColor={colors.danger}
                trackStyle={styles.sliderTrack}
                thumbStyle={styles.sliderThumb}
                name="size"
                value={values.size}
                minimumValue={30}
                maximumValue={50}
                step={1}
                onValueChange={value => setFieldValue('size', value)}
              />
            </View>
            {!!errors.size && (
              <Text style={styles.productError}>{errors.size}</Text>
            )}
          </View>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.actionButton}
              type="submit"
              onPress={handleSubmit}
            >
              <Text style={styles.actionButtonText}>Salvar dados</Text>
            </TouchableOpacity>
            {id ? (
              <TouchableOpacity
                style={styles.actionButton}
                type="button"
                onPress={this.deleteProduct}
              >
                <Text style={styles.actionButtonText}>Excluir produto</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}

const enhance = compose(
  lifecycle({
    async componentDidMount() {
      const { id } = this.props.navigation.state.params;

      if (id) {
        const product = await api.get(`/products/${id}`);

        this.setState({ ...product.data });
      }
    },
  }),

  withFormik({
    enableReinitialize: true,

    mapPropsToValues: ({ title, description, color, size }) => ({
      title: title || '',
      description: description || '',
      color: color || '',
      size: (size && size.valueOf()) || 30,
    }),

    validateOnChange: false,
    validateOnBlur: false,

    validationSchema: Yup.object().shape({
      title: Yup.string().required('Campo obrigatório'),
      description: Yup.string().required('Campo obrigatório'),
      color: Yup.string().required('Campo obrigatório'),
      size: Yup.number().required('Campo obrigatório'),
    }),

    handleSubmit: async (values, { props }) => {
      const { id, updateProducts } = props.navigation.state.params;

      try {
        await api.postOrPut('products', id, values);
        updateProducts();
        props.navigation.navigate('Main');
      } catch (err) {
        alert(`Não foi possível salvar os dados. Erro: ${err}`);
      }
    },
  }),
);

export default hoistStatics(enhance)(Product);