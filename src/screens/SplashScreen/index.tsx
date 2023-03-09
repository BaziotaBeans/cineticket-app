import React, { useEffect } from "react";
import { StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from "react-native-reanimated";

import LogoSVG from "../../assets/BRAND/LogoBIG.svg";

import { Container, ImageBackground, LogoSVGWrapper } from "./styles";

export function SplashScreen() {
  const splashAnimation = useSharedValue(0);

  const navigation = useNavigation<any>();

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0.2, 25, 50], [0.2, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

  function startApp() {
    navigation.navigate("Home");
  }

  useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      {
        duration: 5000,
      },
      () => {
        "worklet";
        runOnJS(startApp)();
      }
    );
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        animated={true}
      />

      <ImageBackground
        source={require("../../assets/BG/bg1.png")}
        blurRadius={40}
      >
        <Animated.View style={[logoStyle, { position: "absolute" }]}>
          <LogoSVGWrapper>
            <LogoSVG />
          </LogoSVGWrapper>
        </Animated.View>
      </ImageBackground>
    </Container>
  );
}
