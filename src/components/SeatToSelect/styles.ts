import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { getSeatStatusColor } from "../../utils";

interface ItemProps {
  isActive: boolean;
  isAvailable: boolean;
}

export const Item = styled(TouchableOpacity)<ItemProps>`
  width: 32px;
  height: 32px;
  border-radius: 8px;

  background-color: ${({ isActive, isAvailable }) => getSeatStatusColor(isActive, isAvailable)};

  align-items: center;
  justify-content: center;

  margin: 5px 8px 5px 0;
`;

export const ItemSeatNumber = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;


export const ToastContainer = styled.View`
  border-radius: 40px;
  background-color: #1A2435;
  border-width: 1px;
  border-color: #223049;
  padding: 10px 20px;
`;

export const ToastMessage = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;