import { useState } from "react";

import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import { useDisclose } from "native-base";

import { useRecoilState } from "recoil";

import { generalState } from "../../store";

import { LoadAnimation } from "../../components/LoadingSpinner";

import { paymentMethodData, PaymentMethodDataProps } from "../../data";

import {
  Container,
  PaymentMethodHeading,
  PaymentMethodItem,
  PaymentMethodIcon,
  PaymentMethodTitle,
  RadioButtonWrapper,
  RadioButtonInner,
  PaymentMethodSubHeading,
  AddBankCardItem,
  AddBankCardHeading,
} from "./styles";

import { Button } from "../Button";
import { ActionSheetAddCard } from "../ActionSheetAddCard";

interface RadioButtonProps {
  isSelected: boolean;
  onChange: () => void;
}

export function RadioButton({ isSelected, onChange }: RadioButtonProps) {
  return (
    <RadioButtonWrapper isActive={isSelected} onPress={onChange}>
      {isSelected && <RadioButtonInner />}
    </RadioButtonWrapper>
  );
}

export function RadioButtonGroup() {
  const [paymentMethod, setPaymentMethod] = useState<number>(0);

  function handleChangeValue(itemPressed: number) {
    setPaymentMethod(itemPressed);
  }

  return (
    <>
      {paymentMethodData.map((item: PaymentMethodDataProps) => {
        return (
          <PaymentMethodItem
            key={item.id}
            onPress={() => {
              handleChangeValue(item.id);
            }}
          >
            <RadioButton
              isSelected={item.id === paymentMethod}
              onChange={() => {
                handleChangeValue(item.id);
              }}
            />

            <PaymentMethodIcon>{item.svg}</PaymentMethodIcon>

            <PaymentMethodTitle>{item.title}</PaymentMethodTitle>

            {item.date && (
              <PaymentMethodSubHeading>{item.date}</PaymentMethodSubHeading>
            )}
          </PaymentMethodItem>
        );
      })}
    </>
  );
}

export function PaymentMethod() {
  const [generalStateData, setGeneralStateData] = useRecoilState(generalState);
  const { isOpen, onOpen, onClose } = useDisclose();
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(false);

  function handleGoToTicket() {
    setIsLoading(true);
    setGeneralStateData((state) => ({ ...state, isMovieChosen: true }));
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Ticket");
    }, 2000);
  }

  return (
    <>
      {isLoading ? (
        <LoadAnimation />
      ) : (
        <>
          <Container>
            <PaymentMethodHeading>Select payment method</PaymentMethodHeading>
            <RadioButtonGroup />
            <AddBankCardItem onPress={onOpen}>
              <AntDesign name="pluscircle" size={24} color="#637394" />
              <AddBankCardHeading>Add bank card</AddBankCardHeading>
            </AddBankCardItem>
            <Button title="Pay • 3000 ₸" onPress={handleGoToTicket} />
          </Container>

          <ActionSheetAddCard
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
        </>
      )}
    </>
  );
}

// const gap = 10;
// const itemPerRow = 3;
// const totalGapSize = (itemPerRow - 1) * gap;
// const windowWidth = Dimensions.get("window").width;
// const childWidth = (windowWidth - totalGapSize) / itemPerRow;

// const styles = StyleSheet.create({
//   container: {
//     flexWrap: "wrap",
//     flexDirection: "row",
//     marginVertical: -(gap / 2),
//     marginHorizontal: -(gap / 2),
//   },
//   child: {
//     //width: childWidth,
//     //height: childWidth,
//     marginVertical: gap / 2,
//     marginHorizontal: gap / 2,
//   },
//   marginRight: {
//     marginHorizontal: 0,
//     marginLeft: "auto",
//   },
// });
