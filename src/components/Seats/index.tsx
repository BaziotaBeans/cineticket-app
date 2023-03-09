import { SeatToSelect } from "../SeatToSelect";
import { Container, ItemRow } from "./styles";

interface SeatProps {
  id: number;
  isAvailable: boolean;
  seatNumber: number;
}

interface Props {
  data: SeatProps[];
}


export function Seats({ data }: Props) {
  let currentStep = 0, nextStep = 15;
  const rows = 11;

  function handleSelectSeat() {
    console.log('selected');
  }

  return (
    <Container>
      {Array.from({ length: rows }).map((item, index) => {
        if (index > 0) {
          currentStep = currentStep + 15;
          nextStep = nextStep + 15;
        }
        return (
          <ItemRow key={index}>
            {data.slice(currentStep, nextStep).map((seat) => {
              return (
                <SeatToSelect
                  key={seat.id}
                  id={seat.id}
                  isAvailable={seat.isAvailable}
                  seatNumber={seat.seatNumber}
                  onPress={handleSelectSeat}
                />
              );
            })}
          </ItemRow>
        );
      })}
    </Container>
  );
}
