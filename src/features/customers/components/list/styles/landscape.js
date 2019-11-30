import {Platform, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const headerStyles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: 'transparent',
    color: '#0F195B',
    fontWeight: '600',
    fontSize: hp('2.2%'),
    marginVertical: hp('1.55%'),
    marginLeft: wp('1.5%')
  },
})