import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background-color: #1a2232;
`;

export const Header = styled.View`
  padding-top: ${getStatusBarHeight() + 50}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #1d273a;
  /* padding: 20px; */
  height: 150px;
  width: 100%;
  position: relative;
`;

export const ButtonGoBackWrapper = styled.View`
  position: absolute;
  top: 97px;
  left: 20px;
`;

export const ButtonGoBack = styled(TouchableOpacity)``;

export const MovieTitle = styled.Text`
  color: #fff;
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

interface TabBarTitleProp {
  isFocused: boolean;
}

export const TabBarTitle = styled.Text<TabBarTitleProp>`
  color: ${({ isFocused }) => (isFocused ? "#FE7E33" : "#637394")};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const AboutContainer = styled.ScrollView`
  flex: 1;
`;

export const VideoWrapper = styled.View`
  height: 220px;
  position: relative;
`;

export const Content = styled.View`
  background-color: #1d273a;
  flex: 1;
`;

interface VideoStateButtonWrapperProps {
  isActive: boolean;
}

export const VideoStateButtonWrapper = styled(
  LinearGradient
)<VideoStateButtonWrapperProps>`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  width: 64px;
  height: 64px;
  border-radius: 80px;

  position: absolute;
  top: 64px;
  left: 42%;
`;

export const VideoStateButton = styled(TouchableOpacity)`
  background-color: rgba(255, 255, 255, 0.1);
  width: 64px;
  height: 64px;
  border-radius: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LineSeparator = styled.View`
  background-color: #1F2940;
  height: 100%;
  width: 2px;
`;

export const RatingContainer = styled(LinearGradient)`
  flex-direction: row;
  align-items: center;
  
  /* height: 70px; */
`;

export const RatingItem = styled.View`
  align-items: center;
  justify-content: center;
  padding: 15px;
  flex: 1;
`;

export const RatingItemHeading = styled.Text`
  color: #fff;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const RatingItemSubHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const DetailWrapper = styled.View`
  padding: 20px;
  overflow: hidden;
`;

export const DetailDescription = styled.Text`
  color: #FFF;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: left;
  line-height: 25px;
  margin-bottom: 20px;
`;

export const DetailParamsRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  /* overflow: hidden; */
`;

export const DetailParamsRowHeading = styled.Text`
  color: #637394;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  width: 110px;
`;

export const DetailParamsRowSubHeading = styled.Text`
  color: #FFF;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};

  flex: 1;
  flex-wrap: wrap;
`;

export const DetailParamsRowClassification = styled.View`
  border-color: rgba(109, 158, 255, 0.1);
  border-radius: 4px;
  border-width: 2px;
  padding: 2px 10px;
`;

export const Footer = styled.View`
  padding: 20px;
  background: rgba(31, 41, 61, 0.7);
`;

export const SelectSessionButton = styled(TouchableOpacity)`
  background-color: #FF8036;
  padding: 20px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;

`;

export const SelectSessionHeading = styled.Text`
  color: #FFF;
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;