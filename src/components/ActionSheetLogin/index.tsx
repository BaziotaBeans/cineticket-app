import { useEffect, useState } from "react";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import { useRecoilState } from "recoil";

import { Actionsheet } from "native-base";

import { generalState } from "../../store";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import {
  ActionSheetCardTextInput,
  ActionSheetForm,
  ActionSheetHeading,
  ActionSheetSubHeading,
  ChangeNumberButton,
  ChangeNumberHeading,
  CodeFieldWrapper,
  PhoneNumberWrapper,
  Resend,
} from "./styles";

import { Button } from "../Button";

import { millisToMinutesAndSeconds } from "../../utils";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const CELL_COUNT = 4;

const PASSWORD_FROM_SMS = 9785;

export function ActionSheetLogin({ isOpen, onOpen, onClose }: Props) {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [generalStateData, setGeneralStateData] = useRecoilState(generalState);
  const [isSendNumber, setIsSendNumber] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [resendTime, setResendTime] = useState(298999);

  function handleCheckLoginNumber() {
    setIsSendNumber(true);
  }
  
  function handleLogin() {
    setGeneralStateData((state) => ({ ...state, isLogged: true }));
    onClose();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "position"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
          <Actionsheet.Content
            backgroundColor="#1A2435"
            h={550}
            borderWidth={2}
            style={{ borderColor: "#223049", paddingHorizontal: 10 }}
          >
            <ActionSheetForm>
              <ActionSheetHeading>Login</ActionSheetHeading>
              <ActionSheetSubHeading>
                Access to purchased tickets
              </ActionSheetSubHeading>

              {!isSendNumber && (
                <PhoneNumberWrapper>
                  <ActionSheetCardTextInput
                    keyboardType="numeric"
                    placeholder="Phone number"
                    placeholderTextColor="#637394"
                    onChangeText={setPhoneNumber}
                    value={phoneNumber}
                    onFocus={() => {
                      console.log("YES");
                    }}
                  />
                  <Button title="Continue" onPress={handleCheckLoginNumber} />
                </PhoneNumberWrapper>
              )}

              {isSendNumber && (
                <CodeFieldWrapper>
                  <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFiledRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                      <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}
                      >
                        {symbol || (isFocused ? <Cursor /> : null)}
                      </Text>
                    )}
                  />
                  <Button title="Login" onPress={handleLogin}/>

                  <ChangeNumberButton>
                    <ChangeNumberHeading>Change number</ChangeNumberHeading>
                  </ChangeNumberButton>

                  <Resend>Resend (0:59)</Resend>
                  {/* <Resend>Resend ({millisToMinutesAndSeconds(resendTime)})</Resend> */}
                </CodeFieldWrapper>
              )}
            </ActionSheetForm>
          </Actionsheet.Content>
        </Actionsheet>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  root: {
    padding: 20,
    minHeight: 300,
  },
  title: { textAlign: "center", fontSize: 30 },
  codeFiledRoot: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 0,
    marginBottom: 20,
  },
  cell: {
    width: 70,
    height: 53,
    lineHeight: 50,
    fontSize: 24,
    borderWidth: 1,
    borderColor: "#273550",
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  focusCell: {
    borderColor: "#F26834",
  },
});
