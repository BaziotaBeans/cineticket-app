import { Actionsheet } from "native-base";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { Button } from "../Button";

import {
  AddBankCardItem,
  AddBankCardHeading,
  ActionSheetHeading,
  ActionSheetTextInput,
  ActionSheetForm,
  ActionSheetFormRow,
  ActionSheetWrapper,
  ActionSheetCardDetailTextInput,
} from "./styles";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function ActionSheetAddCard({ isOpen, onOpen, onClose }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
        <Actionsheet.Content
          backgroundColor="#1A2435"
          h={350}
          borderWidth={2}
          style={{ borderColor: "#223049", paddingHorizontal: 10 }}
        >
          <ActionSheetForm>
            <ActionSheetHeading>Add card</ActionSheetHeading>

            <ActionSheetTextInput
              keyboardType="default"
              maxLength={2}
              placeholder="Card number"
              placeholderTextColor="#637394"
              onFocus={() => {
                console.log("YES");
              }}
            />

            <ActionSheetFormRow style={styles.container}>
              <ActionSheetCardDetailTextInput
                style={styles.child}
                keyboardType="numeric"
                maxLength={2}
                placeholder="MM"
                placeholderTextColor="#637394"
                onFocus={() => {
                  console.log("YES");
                }}
              />

              <ActionSheetCardDetailTextInput
                style={styles.child}
                keyboardType="numeric"
                maxLength={2}
                placeholder="YY"
                placeholderTextColor="#637394"
                onFocus={() => {
                  console.log("YES");
                }}
              />

              <ActionSheetCardDetailTextInput
                style={[styles.child, styles.marginRight]}
                keyboardType="numeric"
                maxLength={2}
                placeholder="CVC"
                placeholderTextColor="#637394"
                onFocus={() => {
                  console.log("YES");
                }}
              />
            </ActionSheetFormRow>
            <Button title="Add card" />
          </ActionSheetForm>
        </Actionsheet.Content>
      </Actionsheet>
    </KeyboardAvoidingView>
  );
}

const gap = 8;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: gap / -2,
  },
  child: {
    marginHorizontal: gap / 2,
  },
  marginRight: {
    marginHorizontal: 0,
    marginLeft: "auto",
  },
});
