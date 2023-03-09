import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native";
import { RectButton, RectButtonProps  } from 'react-native-gesture-handler';
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  background-color: #1a2232;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 50}px;
  background-color: #1d273a;
  width: 100%;
  /* height: 192px; */
`;

export const HeaderBody = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* padding: 20px; */
  height: 64px;
  width: 100%;
  position: relative;
`;

export const ButtonGoBackWrapper = styled.View`
  position: absolute;
  top: 10px;
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

export const ButtonToggle = styled(TouchableOpacity)`
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
`;

export const HeaderHeadingWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const HeaderHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const HeaderSubHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const DateTimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 64px;
  padding: 20px;
`;

export const HeaderFooter = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  /* height: 64px;  */
  flex-direction: row;
  padding: 20px 15px;
`;

export const HeaderBox = styled.View`
  width: 47%;
`;

export const DateTimeButton = styled(TouchableOpacity)`
  border-width: 1px;
  border-color: rgba(109, 158, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-self: stretch;
  width: 100%;
  padding: 18px 5px;
`;

export const DateTimeButtonHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin-left: 20px;
`;

export const Space = styled.View`
  margin: 0 10px;
`;

export const SymbolContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const SymbolItemSpace = styled.View`
  margin: 0 20px;
`;

export const SymbolItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /* width: 33.33%; */
`;

export const SymbolSeat = styled.View``;

export const SymbolSeatAvailable = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 12px;
  background: rgba(109, 158, 255, 0.1);
`;

export const SymbolSeatOccupied = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 12px;
  background: #1f293d;

  align-items: center;
  justify-content: center;
`;

export const SymbolSeatChosen = styled(LinearGradient)`
  width: 20px;
  height: 20px;
  border-radius: 12px;
`;

export const SymbolSeatHeading = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  margin-left: 10px;
`;

export const MiddleWrapper = styled.View``;

export const SeatWrapper = styled.ScrollView``;

export const SeatContent = styled.ScrollView``;

export const SeatRowNumber = styled.View`
  position: absolute;
  right: -10px;
  top: 60px;
`;

export const SeatRowNumberItem = styled(LinearGradient)`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 32px;
`;

export const SeatRowNumberItemHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: auto;
  padding: 0px 10px 10px;
`;

export const ButtonByTicketsWrapper = styled(LinearGradient)`
  border-radius: 8px;
`;

export const ButtonByTickets = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 100%;
  height: 56px;
`;

export const ButtonByTicketsHeading = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const ActionSheetHeading = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const ActionSheetSubHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const ActionSheetItemWrapper = styled.View`
  width: 100%;
  margin-top: 15px;
  position: relative;
`;

export const ActionSheetItem = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #223049;
  padding: 10px 0;


`;

export const ActionSheetItemHeading = styled.Text`
  color: #ffffff;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const ActionSheetItemSubHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;
