import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  padding: 20px;
`;

export const PaymentMethodHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-bottom: 10px;
`;

export const PaymentMethodItem = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  border-top-width: 0.5px;
  border-top-color: #637394;
  padding: 15px 0;
`;

export const PaymentMethodIcon = styled.View`
  width: 40px;
  margin: 0 15px;
`;

export const PaymentMethodTitle = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const PaymentMethodSubHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-left: auto;
`;

interface RadioButtonWrapperProps {
  isActive: boolean;
}

export const RadioButtonWrapper = styled(
  TouchableOpacity
)<RadioButtonWrapperProps>`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: ${({ isActive }) => (isActive ? "#FF8036" : "#253554")};
`;

export const RadioButtonInner = styled.View`
  width: 12px;
  height: 12px;
  background-color: #ffffff;
  border-radius: 12px;
`;

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
