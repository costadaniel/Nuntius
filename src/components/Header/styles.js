import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import { global } from '~/styles';

export const globalStyle = global;

export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: '#fff',
  barStyle: 'dark-content',
})``;

export const Container = styled.View`
  height: ${56 + getStatusBarHeight(true)};
  padding-top: ${getStatusBarHeight(true)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding-left: 10;
  padding-right: 10;
  background-color: #fff;
  border-bottom-color: #eee;
  border-bottom-width: 1;
`;

export const HeaderIcon = styled.TouchableOpacity``;

export const HeaderText = styled.Text`
  font-family: DMSerifDisplay-Regular;
  font-size: 26;
  color: #000;
`;

export const Space = styled.View`
  width: 30;
`;
