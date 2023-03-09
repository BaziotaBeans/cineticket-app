import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  width: 46%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 15px;
  /* margin-right: 10px; */
`;

export const MovieImage = styled.Image`
  width: 100%;
  height: 230px;
  border-radius: 8px;
`;

interface MovieClassificationProp {
    isGood: boolean;
}

export const MovieClassificationBox = styled.View<MovieClassificationProp>`
  background-color: ${({ isGood }) => isGood ? '#ff8036' : '#182333'};
  padding: 5px 10px;
  border-radius: 4px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const MovieClassification = styled.Text`
  color: #fff;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const MovieTitle = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin-top: 10px;
`;

export const MovieGenre = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
