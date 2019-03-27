import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  actionButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderRadius: metrics.baseRadius,
    borderWidth: 2,
    height: 42,
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding,
  },
  actionButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    backgroundColor: colors.secundary,
    flex: 1,
  },
  containerSlider: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 90,
    padding: metrics.basePadding,
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
  productError: {
    color: colors.danger,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 3,
  },
  productItem: {
    marginBottom: metrics.baseMargin * 2,
  },
  sliderThumb: {
    backgroundColor: colors.primary,
  },
  sliderTrack: {
    backgroundColor: colors.lighter,
  },
});

export default styles;
