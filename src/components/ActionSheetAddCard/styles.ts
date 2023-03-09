import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const AddBankCardItem = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  border-top-width: 0.5px;
  border-top-color: #637394;
  padding: 15px 0;
  margin-bottom: 20px;
`;

export const AddBankCardHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin-left: 15px;
`;

export const ActionSheetForm = styled.View`
  width: 100%;
  padding: 0 10px;
`;

export const ActionSheetHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  align-self: flex-start;
  margin-bottom: 10px;
`;

export const ActionSheetTextInput = styled.TextInput`
  padding: 20px;
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  border-width: 1px;
  border-color: #233049;
  border-radius: 10px;
  padding: 20px;
`;

export const ActionSheetWrapper = styled.View`
  width: 100%;
`;

export const ActionSheetCardDetailTextInput = styled.TextInput`
  padding: 20px;
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  border-width: 1px;
  border-color: #233049;
  border-radius: 10px;
  padding: 20px;
  width: 25%;
`;

export const ActionSheetFormRow = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
`;