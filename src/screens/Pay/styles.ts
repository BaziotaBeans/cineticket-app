import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.ScrollView`
  /* flex: 1; */
  background-color: #1a2232;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight()}px;
  background-color: #1d273a;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const ButtonGoBackWrapper = styled.View`
  position: absolute;
  top: 42px;
  left: 20px;
`;

export const ButtonGoBack = styled(TouchableOpacity)`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
`;

export const ButtonToggleWrapper = styled.View`
  position: absolute;
  top: 10px;
  right: 20px;
`;

export const Heading = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const Ticket = styled.View`
  background-color: #1f293d;
`;

export const TicketInfo = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin-bottom: 20px;
`;

export const TicketDetail = styled.View``;

export const TicketDetailRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 5px;
`;

export const TicketDetailRowHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  width: 100px;
  flex-wrap: wrap;
`;

export const TicketDetailRowWrap = styled.View``;

export const TicketDetailRowPrimaryHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  flex-wrap: wrap;
`;

export const TicketDetailRowSecondaryHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  flex-wrap: wrap;
`;

export const Divider = styled.View`
  background-color: rgba(109, 158, 255, 0.1);
  width: 100%;
  height: 1px;
  margin: 20px 0;
`;

export const Bill = styled.View``;

export const BillRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 5px;
`;

export const BillHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  width: 100px;
  flex-wrap: wrap;
`;

export const BillPrimaryHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  flex-wrap: wrap;
`;

export const TearLine = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LeftEllipse = styled.View`
  background: #1a2232;
  width: 44px;
  height: 44px;
  border-radius: 40px;
  /* left: -22px; */
  margin-left: -24px;
`;

export const Ellipse = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  /* Background / Main */

  background: #1a2232;
`;

export const RightEllipse = styled.View`
  background: #1a2232;
  width: 44px;
  height: 44px;
  border-radius: 40px;
  margin-right: -24px;
  /* right: -22px; */
`;

export const PaymentForm = styled.View`
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const InputPhoneNumber = styled.TextInput`
  border-width: 1px;
  border-color: #273550;
  border-radius: 8px;
  width: 100%;
  color: #fff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  padding: 20px;
  margin-bottom: 20px;
`;

export const ButtonGradient = styled(LinearGradient)`
  border-radius: 8px;
  width: 100%;
`;

export const Button = styled(TouchableOpacity)`
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

export const CodeHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const CodeFieldWrapper = styled.View`
  flex-direction: column;
  margin-top: 30px;  
  align-items: center;
  justify-content: center;
`;


export const ChangeNumberButton = styled(TouchableOpacity)`
  margin: 25px 0 20px;
`;

export const ChangeNumberButtonHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const ResendText = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin: 10px 0 0;
`;


export const CodefieldButtonWrapper = styled.View`
  padding: 20px;
  width: 100%;
`;


