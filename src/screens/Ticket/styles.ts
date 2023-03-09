import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.ScrollView`
  background-color: #1a2232;
  flex: 1;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 40}px;
  background-color: #1f293d;
  padding-bottom: 30px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* height: 100px; */
`;

export const ButtonClose = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;

  position: absolute;
  right: 0;
  top: 60px;
`;

export const Heading = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const TicketWrapper = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #1f293d;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const QrCodeTicketWrapper = styled.View`
  width: 270px;
  padding: 20px;
  background-color: #fff;

  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const TicketDetailText = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  flex-wrap: wrap;
  margin: 20px 0;
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

export const Content = styled.View``;

export const TicketDetail = styled.View`
  width: 100%;
  padding: 15px;
`;

export const MovieTitle = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  margin-bottom: 20px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const ItemHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  width: 100px;
`;

export const ItemWrapper = styled.View``;

export const ItemPrimaryHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const ItemSecondaryHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`;

export const ButtonBase = styled(TouchableOpacity)`
  width: 48%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  height: 56px;
`;

export const ButtonPrimary = styled(ButtonBase)`
  background-color: #ff8036;
  /* margin-left: 20px; */
  flex-direction: row;
  align-items: center;
`;

export const ButtonSecondary = styled(ButtonBase)`
  border-color: #273550;
  border-width: 1px;
`;

export const ButtonHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;
