import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View``;

export const ActionSheetForm = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ActionSheetHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const ActionSheetSubHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  margin-bottom: 15px;
`;

export const CodeFieldWrapper = styled.View`
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  justify-content: center;
`;

export const PhoneNumberWrapper = styled.View`
  width: 100%;
  padding: 0 15px;
`;

export const ActionSheetCardTextInput = styled.TextInput`
  padding: 20px;
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  border-width: 1px;
  border-color: #233049;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const ChangeNumberButton = styled(TouchableOpacity)`
  margin: 20px 0;
`;

export const ChangeNumberHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const Resend = styled.Text`
  color: #637394;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;
