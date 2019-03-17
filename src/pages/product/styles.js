import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderRadius: metrics.baseRadius,
    borderWidth: 2,
    height: 42,
    justifyContent: 'center',
  },
  actionButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: colors.lighter, // '#fafafa'
    flex: 1,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 50,
    paddingHorizontal: metrics.basePadding,
  },
  productContainer: {
    margin: metrics.baseMargin * 2,
  },
  productItem: {
    marginBottom: metrics.baseMargin * 2,
  },
  productError: {
    color: colors.danger,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 3,
  },
});

export default styles;
