import { StyleSheet } from "react-native";

import {
  ButtonWrapper,
  ButtonGradient,
  ButtonContainer,
  ButtonHeading,
} from "./styles";

interface Props {
  title: string;
  onPress?: () => void;
}

export function Button({ title, onPress }: Props) {
  return (
    <ButtonWrapper onPress={onPress}>
      <ButtonGradient colors={["#FF8036", "#FC6D19"]} style={styles.shadow}>
        <ButtonContainer onPress={onPress}>
          <ButtonHeading>{title}</ButtonHeading>
        </ButtonContainer>
      </ButtonGradient>
    </ButtonWrapper>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#ff8036",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 16.41,
    elevation: 20,
  },
});
