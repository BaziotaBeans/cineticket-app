import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const ItemRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Item = styled(TouchableOpacity)`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #253554;

  align-items: center;
  justify-content: center;
`;

export const ItemSeatNumber = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
