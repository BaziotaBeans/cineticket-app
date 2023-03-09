import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const ButtonWrapper = styled(TouchableOpacity)`
  width: 100%;
`;

export const ButtonGradient = styled(LinearGradient)`
  border-radius: 8px;
  width: 100%;
`;

export const ButtonContainer = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  height: 60px;
  width: 100%;
`;

export const ButtonHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;
