import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const ActionSheetContent = styled.View`
  padding: 20px;
  width: 100%;
`;

export const ActionSheetHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-bottom: 20px;
`;

export const ActionSheetResult = styled.ScrollView``;

export const ActionSheetResultItem = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  border-bottom-color: #233049;
  border-bottom-width: 1px;
  padding: 14px 20px 14px 30px;
`;

export const ActionSheetResultItemHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const ActiionSheetResultItemIcon = styled.View`
  position: absolute;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 20px;
`;
