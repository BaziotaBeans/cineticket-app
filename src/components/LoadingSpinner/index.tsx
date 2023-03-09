import React from "react";
import LottieView from "lottie-react-native";

import loadingSpinner from "../../assets/LottieAnimation/spinner.json";

import { Container } from "./styles";

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={loadingSpinner}
        style={{ height: 80, width: 80 }}
        autoPlay
        loop
      />
    </Container>
  );
}
