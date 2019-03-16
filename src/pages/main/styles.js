import { StyleSheet } from 'react-native';
import colors from '~/styles';

const styles = StyleSheet.create({
  addProductButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderRadius: 5,
    borderWidth: 2,
    height: 42,
    justifyContent: 'center',
    margin: 20,
  },

  addProductButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },

  container: {
    backgroundColor: colors.lighter, // '#fafafa'
    flex: 1,
  },

  list: {
    padding: 20,
  },

  productButton: {
    alignItems: 'center',
    backgroundColor: colors.transparent,
    borderColor: colors.primary,
    borderRadius: 5,
    borderWidth: 2,
    height: 42,
    justifyContent: 'center',
    marginTop: 10,
  },

  productButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },

  productContainer: {
    backgroundColor: colors.white,
    borderColor: colors.light,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
    padding: 20,
  },

  productDescription: {
    color: colors.regular,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 5,
  },

  productTitle: {
    color: colors.darker,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
