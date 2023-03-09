import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${getStatusBarHeight() + 10}px;
  background-color: #1D273A;
  padding-right: 20px;
  padding-left: 10px;
  height: 120px;
`;

export const LogoWrapper = styled.View`
  margin-right: auto;
`;

export const HeaderItemButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

export const HeaderItemButtonTitle = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  margin-left: 10px;
`;

export const Button = styled(TouchableOpacity)``;

export const ButtonWithLinearGradient = styled(LinearGradient)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 14px;
  border-radius: 8px;
`;

export const ButtonTitle = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
`;
