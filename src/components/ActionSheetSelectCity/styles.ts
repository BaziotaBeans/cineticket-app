import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const ActionSheetHeader = styled.View`
  width: 100%;
`;

export const ActionSheetTextInputIcon = styled.View`
  position: absolute;
  top: 20px;
  left: 14px;
`;

export const ActionSheetTextInput = styled.TextInput`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  align-self: flex-start;
  margin-bottom: 10px;
  border-color: #233049;
  border-width: 1px;
  width: 100%;
  padding: 15px 20px 15px 45px;
  border-radius: 10px;
`;

export const ActionSheetResult = styled.ScrollView`
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
