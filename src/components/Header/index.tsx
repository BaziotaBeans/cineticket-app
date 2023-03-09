import React from "react";
import { StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

import LogoSVG from "../../assets/BRAND/LogoLitle.svg";
import LocationSVG from "../../assets/SVG/Location.svg";
import LangSVG from "../../assets/SVG/Lang.svg";

import { useRecoilState } from "recoil";

import { generalState } from "../../store";

import {
  Container,
  LogoWrapper,
  HeaderItemButton,
  HeaderItemButtonTitle,
  Button,
  ButtonWithLinearGradient,
  ButtonTitle,
} from "./styles";

interface Props {
  onOpenCityList: () => void;
  onOpenLanguageList: () => void;
  onOpenLogin: () => void;
}

export function Header({
  onOpenCityList,
  onOpenLanguageList,
  onOpenLogin,
}: Props) {
  const [generalStateData, setGeneralStateData] = useRecoilState(generalState);

  const navigation = useNavigation<any>();

  function handleGoToProfile() {
    navigation.navigate("Profile");
  }

  return (
    <Container style={styles.shadow}>
      <LogoWrapper style={styles.shadowWithColor}>
        <LogoSVG />
      </LogoWrapper>

      <HeaderItemButton onPress={onOpenCityList}>
        <LocationSVG />
        <HeaderItemButtonTitle>Nur-Sultan</HeaderItemButtonTitle>
      </HeaderItemButton>

      <HeaderItemButton onPress={onOpenLanguageList}>
        <LangSVG />
        <HeaderItemButtonTitle>Eng</HeaderItemButtonTitle>
      </HeaderItemButton>

      <Button
        onPress={generalStateData.isLogged ? handleGoToProfile : onOpenLogin}
      >
        <ButtonWithLinearGradient colors={["#FF8036", "#FC6D19"]}>
          <ButtonTitle>
            {generalStateData.isLogged ? "Profile" : "Log in"}
          </ButtonTitle>
        </ButtonWithLinearGradient>
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  shadowWithColor: {
    shadowColor: "rgba(255, 128, 54, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
