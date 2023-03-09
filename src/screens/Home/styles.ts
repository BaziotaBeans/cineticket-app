import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #1a2232;
`;

export const Content = styled.View`
    flex: 1;
    padding: 20px;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
`;

export const SectionTItle = styled.Text`
  color: #fff;
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;


export const Button = styled(TouchableOpacity)`

`;