import { atom, selector } from "recoil";

interface Props {
    isLogged: boolean;
    isMovieChosen: boolean;
    isChosenSeat: boolean;
}

const INITIAL_STATE: Props = {
    isLogged: false,
    isMovieChosen: false,
    isChosenSeat: false,
}

export const generalState = atom({
    key: 'generalState',
    default: INITIAL_STATE
})