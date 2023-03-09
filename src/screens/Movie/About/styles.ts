import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: #1a2232;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 50}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #1d273a;
  /* padding: 20px; */
  height: 150px;
  width: 100%;
  position: relative;
`;

export const ButtonGoBackWrapper = styled.View`
  position: absolute;
  top: 92px;
  left: 20px;
`;

export const ButtonGoBack = styled(TouchableOpacity)`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
`;

export const MovieTitle = styled.Text`
  color: #fff;
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  /* flex-wrap: wrap; */
  /* width: 50%; */
`;

interface TabBarTitleProp {
  isFocused: boolean;
}

export const TabBarTitle = styled.Text<TabBarTitleProp>`
  color: ${({ isFocused }) => (isFocused ? "#FE7E33" : "#637394")};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

