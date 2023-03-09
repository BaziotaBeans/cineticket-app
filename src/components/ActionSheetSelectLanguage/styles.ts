import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled.View``;
export const ActionSheetResult = styled.ScrollView`
  width: 100%;
`;

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
