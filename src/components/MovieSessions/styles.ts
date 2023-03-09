import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: #1a2232;
`;

export const Controls = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 25px 20px;
  width: 100%;
`;

export const ControlsItemWrapper = styled.View`
  width: 33.33%;
  height: 65px;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
`;

export const ControlsItem = styled(TouchableOpacity)`
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const ControlsItemBody = styled.View`
  height: 50%;
`;

export const ControlsItemFooter = styled.View`
  height: 50%;
`;

export const ControlsItemSwitch = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const ControlsItemHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin-top: 5px;
`;

export const Header = styled.View`
  background-color: #253554;
  padding: 10px 20px;

  flex-direction: row;

  justify-content: space-between;
`;

export const HeaderItem = styled(TouchableOpacity)``;

export const HeaderItemHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const SessionList = styled.ScrollView`
  flex: 1;
`;

export const SessionItem = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;

  border-color: #2a3a58;
  border-bottom-width: 1px;
`;

export const SessionTimeWrapper = styled.View`
  flex: 1 1 20%;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;

export const SessionTimeHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const SessionTimeSubHeadingWrapper = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const SessionTimeSubHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;
  margin-right: 5px;

  flex-wrap: wrap;
`;

export const SessionDivider = styled.View`
  background-color: rgba(109, 158, 255, 0.1);
  height: 100%;
  width: 1px;
`;

export const SessionContent = styled.View`
  flex: 1 1 80%;
  padding: 0px 25px 0 15px;
`;

export const SessionTitle = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const SessionPriceWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const SessionPrice = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_300};
`;

export const NoPrice = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 10px;
  background-color: #637394;
`;
