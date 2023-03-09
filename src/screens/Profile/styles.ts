import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native";

export const Container = styled.ScrollView`
  background-color: #1a2232;
  flex: 1;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 40}px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  align-items: center;
  background-color: #1d273a;
  justify-content: space-between;
`;

export const Heading = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const ButtonHeader = styled(TouchableOpacity)``;

export const Content = styled.View`
  padding: 20px;
`;

export const Section = styled.View``;

export const SectionHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-bottom: 10px;
`;

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #1f293d;
  border-radius: 8px;
  padding: 15px;
`;

export const CardNumber = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-left: 20px;
`;

export const CardDate = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  margin-left: auto;
`;

export const ButtonNewCard = styled(TouchableOpacity)`
  border-width: 1px;
  border-color: #222f46;
  border-radius: 8px;
  padding: 12px 15px;
  margin-top: 20px;
  margin-bottom: 20px;

  align-items: center;
  justify-content: center;
`;

export const ButtonNewCardHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const PaymentHistory = styled.View`
  background-color: #1f293d;
  padding: 10px;
  border-radius: 8px;
`;

export const PaymentHistoryItem = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const PaymentHistoryItemImg = styled.Image`
  width: 56px;
  height: 88px;
`;

export const PaymentHistoryItemWrapper = styled.View`
  margin-left: 15px;
`;

export const PaymentHistoryItemMovieTitle = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const PaymentHistoryItemDate = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const PaymentHistoryItemCinema = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: #637394;
`;

export const EmptyData = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 100px;
`;

export const EmptyMessage = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: #637394;
  margin-top: 10px;
`;
