import { useState } from "react";

import { useToast } from "native-base";

import { Ionicons } from "@expo/vector-icons";

import { Item, ItemSeatNumber, ToastContainer, ToastMessage } from "./styles";

interface SeatProps {
  id: number;
  isAvailable: boolean;
  seatNumber: number;
  onPress: () => void;
}

export function SeatToSelect({
  id,
  isAvailable,
  seatNumber,
  onPress,
}: SeatProps) {
  const [isSelected, setIsSelected] = useState(false);

  const toast = useToast();
  const idToast = "test-toast";

  function handleToggle() {
    if (!isAvailable && !toast.isActive(idToast)) {
      toast.show({
        id: idToast,
        placement: "bottom",
        duration: 1500,
        onCloseComplete: () => {console.log('complete')},
        render: () => {
          return (
            <ToastContainer>
              <ToastMessage>This seat is unavailable</ToastMessage>
            </ToastContainer>
          );
        },
      });
    }
    setIsSelected(!isSelected);
  }

  return (
    <>
      <Item
        onPress={handleToggle}
        isActive={isSelected}
        isAvailable={isAvailable}
        // disabled={!isAvailable}
      >
        {isAvailable ? (
          <ItemSeatNumber>{seatNumber}</ItemSeatNumber>
        ) : (
          <Ionicons name="close" size={18} color="#637394" />
        )}
      </Item>
    </>
  );
}
