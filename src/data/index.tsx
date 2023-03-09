import uuid from "react-native-uuid";

import PaySVG from "../assets/SVG/pay.svg";

import KaspiSVG from "../assets/SVG/kaspi.svg";

import VisaSVG from "../assets/SVG/visa.svg";

export interface PaymentMethodDataProps {
  id: number;
  svg: any | null;
  title: string;
  date?: string;
}

export const paymentMethodData: PaymentMethodDataProps[] = [
  {
    id: 1,
    svg: <PaySVG />,
    title: "Apple Pay",
  },
  {
    id: 2,
    svg: <KaspiSVG />,
    title: "Kaspi",
  },
  {
    id: 3,
    svg: <VisaSVG />,
    title: "4716 •••• •••• 5615",
    date: "06/24",
  },
];

export const data = [
  {
    id: 1,
    time: "14:40",
    params: ["Pyc"],
    cinema: "Eurasia Cinema7",
    prices: {
      adult: "2200 ₸",
      child: "1000 ₸",
      student: "1500 ₸",
      vip: "",
    },
  },
  {
    id: 2,
    time: "15:10",
    params: ["IMAX", "Pyc"],
    cinema: "Kinopark 8 IMAX Saryarka",
    prices: {
      adult: "3500 ₸",
      child: "1500 ₸",
      student: "2500 ₸",
      vip: "4000 ₸",
    },
  },
  {
    id: 3,
    time: "15:40",
    params: ["Laser", "Eng"],
    cinema: "Kinopark 6 Keruencity Astana",
    prices: {
      adult: "2700 ₸",
      child: "900 ₸",
      student: "1700 ₸",
      vip: "",
    },
  },
  {
    id: 4,
    time: "16:05",
    params: ["Қаз"],
    cinema: "Arman Asia Park",
    prices: {
      adult: "1900 ₸",
      child: "",
      student: "1200 ₸",
      vip: "",
    },
  },
  {
    id: 5,
    time: "16:15",
    params: ["Рус"],
    cinema: "Chaplin MEGA Silk Way",
    prices: {
      adult: "2300 ₸",
      child: "",
      student: "1600 ₸",
      vip: "",
    },
  },
  {
    id: 6,
    time: "15:10",
    params: ["Рус"],
    cinema: "Chaplin Khan Shatyr",
    prices: {
      adult: "2400 ₸",
      child: "",
      student: "1700 ₸",
      vip: "",
    },
  },
  {
    id: 7,
    time: "16:30",
    params: ["IMAX", "Рус"],
    cinema: "Kinopark 7 IMAX Keruen",
    prices: {
      adult: "2700 ₸",
      child: "900 ₸",
      student: "1700 ₸",
      vip: "",
    },
  },
];

export function getSeats() {
  let tmpArray = [];
  for (let index = 0; index <= 165; index++) {
    const seat = {
      id: `${uuid.v4()}`,
      isAvailable: true,
      seatNumber: index + 1,
    };

    tmpArray.push(seat);
  }

  return tmpArray;
}

export const seats = [
  {
    id: 1,
    isAvailable: true,
    seatNumber: 1,
  },
  {
    id: 2,
    isAvailable: true,
    seatNumber: 2,
  },
  {
    id: 3,
    isAvailable: true,
    seatNumber: 3,
  },
  {
    id: 4,
    isAvailable: true,
    seatNumber: 4,
  },
  {
    id: 5,
    isAvailable: true,
    seatNumber: 5,
  },
  {
    id: 6,
    isAvailable: true,
    seatNumber: 6,
  },
  {
    id: 7,
    isAvailable: true,
    seatNumber: 7,
  },
  {
    id: 8,
    isAvailable: true,
    seatNumber: 8,
  },
  {
    id: 9,
    isAvailable: true,
    seatNumber: 9,
  },
  {
    id: 10,
    isAvailable: true,
    seatNumber: 10,
  },
  {
    id: 11,
    isAvailable: true,
    seatNumber: 11,
  },
  {
    id: 12,
    isAvailable: true,
    seatNumber: 12,
  },
  {
    id: 13,
    isAvailable: true,
    seatNumber: 13,
  },
  {
    id: 14,
    isAvailable: true,
    seatNumber: 14,
  },
  {
    id: 15,
    isAvailable: true,
    seatNumber: 15,
  },
  {
    id: 16,
    isAvailable: true,
    seatNumber: 16,
  },
  {
    id: 17,
    isAvailable: true,
    seatNumber: 17,
  },
  {
    id: 18,
    isAvailable: true,
    seatNumber: 18,
  },
  {
    id: 19,
    isAvailable: true,
    seatNumber: 19,
  },
  {
    id: 20,
    isAvailable: true,
    seatNumber: 20,
  },
  {
    id: 21,
    isAvailable: true,
    seatNumber: 21,
  },
  {
    id: 22,
    isAvailable: true,
    seatNumber: 22,
  },
  {
    id: 23,
    isAvailable: true,
    seatNumber: 23,
  },
  {
    id: 24,
    isAvailable: true,
    seatNumber: 24,
  },
  {
    id: 25,
    isAvailable: true,
    seatNumber: 25,
  },
  {
    id: 26,
    isAvailable: true,
    seatNumber: 26,
  },
  {
    id: 27,
    isAvailable: true,
    seatNumber: 27,
  },
  {
    id: 28,
    isAvailable: true,
    seatNumber: 28,
  },
  {
    id: 29,
    isAvailable: true,
    seatNumber: 29,
  },
  {
    id: 30,
    isAvailable: true,
    seatNumber: 30,
  },
  {
    id: 31,
    isAvailable: true,
    seatNumber: 31,
  },
  {
    id: 32,
    isAvailable: true,
    seatNumber: 32,
  },
  {
    id: 33,
    isAvailable: true,
    seatNumber: 33,
  },
  {
    id: 34,
    isAvailable: true,
    seatNumber: 34,
  },
  {
    id: 35,
    isAvailable: true,
    seatNumber: 35,
  },
  {
    id: 36,
    isAvailable: true,
    seatNumber: 36,
  },
  {
    id: 37,
    isAvailable: true,
    seatNumber: 37,
  },
  {
    id: 38,
    isAvailable: true,
    seatNumber: 38,
  },
  {
    id: 39,
    isAvailable: true,
    seatNumber: 39,
  },
  {
    id: 40,
    isAvailable: true,
    seatNumber: 40,
  },
  {
    id: 41,
    isAvailable: true,
    seatNumber: 41,
  },
  {
    id: 42,
    isAvailable: true,
    seatNumber: 42,
  },
  {
    id: 43,
    isAvailable: true,
    seatNumber: 43,
  },
  {
    id: 44,
    isAvailable: true,
    seatNumber: 44,
  },
  {
    id: 45,
    isAvailable: true,
    seatNumber: 45,
  },
  {
    id: 46,
    isAvailable: true,
    seatNumber: 46,
  },
  {
    id: 47,
    isAvailable: true,
    seatNumber: 47,
  },
  {
    id: 48,
    isAvailable: true,
    seatNumber: 48,
  },
  {
    id: 49,
    isAvailable: true,
    seatNumber: 49,
  },
  {
    id: 50,
    isAvailable: true,
    seatNumber: 50,
  },
  {
    id: 51,
    isAvailable: true,
    seatNumber: 51,
  },
  {
    id: 52,
    isAvailable: true,
    seatNumber: 52,
  },
  {
    id: 53,
    isAvailable: true,
    seatNumber: 53,
  },
  {
    id: 54,
    isAvailable: true,
    seatNumber: 54,
  },
  {
    id: 55,
    isAvailable: true,
    seatNumber: 55,
  },
  {
    id: 56,
    isAvailable: true,
    seatNumber: 56,
  },
  {
    id: 57,
    isAvailable: true,
    seatNumber: 57,
  },
  {
    id: 58,
    isAvailable: true,
    seatNumber: 58,
  },
  {
    id: 59,
    isAvailable: true,
    seatNumber: 59,
  },
  {
    id: 60,
    isAvailable: true,
    seatNumber: 60,
  },
  {
    id: 61,
    isAvailable: true,
    seatNumber: 61,
  },
  {
    id: 62,
    isAvailable: true,
    seatNumber: 62,
  },
  {
    id: 63,
    isAvailable: true,
    seatNumber: 63,
  },
  {
    id: 64,
    isAvailable: true,
    seatNumber: 64,
  },
  {
    id: 65,
    isAvailable: true,
    seatNumber: 65,
  },
  {
    id: 66,
    isAvailable: true,
    seatNumber: 66,
  },
  {
    id: 67,
    isAvailable: true,
    seatNumber: 67,
  },
  {
    id: 68,
    isAvailable: true,
    seatNumber: 68,
  },
  {
    id: 69,
    isAvailable: true,
    seatNumber: 69,
  },
  {
    id: 70,
    isAvailable: true,
    seatNumber: 70,
  },
  {
    id: 71,
    isAvailable: true,
    seatNumber: 71,
  },
  {
    id: 72,
    isAvailable: true,
    seatNumber: 72,
  },
  {
    id: 73,
    isAvailable: true,
    seatNumber: 73,
  },
  {
    id: 74,
    isAvailable: true,
    seatNumber: 74,
  },
  {
    id: 75,
    isAvailable: true,
    seatNumber: 75,
  },
  {
    id: 76,
    isAvailable: true,
    seatNumber: 76,
  },
  {
    id: 77,
    isAvailable: true,
    seatNumber: 77,
  },
  {
    id: 78,
    isAvailable: true,
    seatNumber: 78,
  },
  {
    id: 79,
    isAvailable: true,
    seatNumber: 79,
  },
  {
    id: 80,
    isAvailable: true,
    seatNumber: 80,
  },
  {
    id: 81,
    isAvailable: true,
    seatNumber: 81,
  },
  {
    id: 82,
    isAvailable: true,
    seatNumber: 82,
  },
  {
    id: 83,
    isAvailable: true,
    seatNumber: 83,
  },
  {
    id: 84,
    isAvailable: true,
    seatNumber: 84,
  },
  {
    id: 85,
    isAvailable: true,
    seatNumber: 85,
  },
  {
    id: 86,
    isAvailable: true,
    seatNumber: 86,
  },
  {
    id: 87,
    isAvailable: true,
    seatNumber: 87,
  },
  {
    id: 88,
    isAvailable: true,
    seatNumber: 88,
  },
  {
    id: 89,
    isAvailable: true,
    seatNumber: 89,
  },
  {
    id: 90,
    isAvailable: true,
    seatNumber: 90,
  },
  {
    id: 91,
    isAvailable: true,
    seatNumber: 91,
  },
  {
    id: 92,
    isAvailable: true,
    seatNumber: 92,
  },
  {
    id: 93,
    isAvailable: true,
    seatNumber: 93,
  },
  {
    id: 94,
    isAvailable: true,
    seatNumber: 94,
  },
  {
    id: 95,
    isAvailable: true,
    seatNumber: 95,
  },
  {
    id: 96,
    isAvailable: true,
    seatNumber: 96,
  },
  {
    id: 97,
    isAvailable: true,
    seatNumber: 97,
  },
  {
    id: 98,
    isAvailable: true,
    seatNumber: 98,
  },
  {
    id: 99,
    isAvailable: true,
    seatNumber: 99,
  },
  {
    id: 100,
    isAvailable: true,
    seatNumber: 100,
  },
  {
    id: 101,
    isAvailable: true,
    seatNumber: 101,
  },
  {
    id: 102,
    isAvailable: false,
    seatNumber: 102,
  },
  {
    id: 103,
    isAvailable: false,
    seatNumber: 103,
  },
  {
    id: 104,
    isAvailable: false,
    seatNumber: 104,
  },
  {
    id: 105,
    isAvailable: false,
    seatNumber: 105,
  },
  {
    id: 106,
    isAvailable: false,
    seatNumber: 106,
  },
  {
    id: 107,
    isAvailable: false,
    seatNumber: 107,
  },
  {
    id: 108,
    isAvailable: false,
    seatNumber: 108,
  },
  {
    id: 109,
    isAvailable: false,
    seatNumber: 109,
  },
  {
    id: 110,
    isAvailable: false,
    seatNumber: 110,
  },
  {
    id: 111,
    isAvailable: false,
    seatNumber: 111,
  },
  {
    id: 112,
    isAvailable: false,
    seatNumber: 112,
  },
  {
    id: 113,
    isAvailable: false,
    seatNumber: 113,
  },
  {
    id: 114,
    isAvailable: false,
    seatNumber: 114,
  },
  {
    id: 115,
    isAvailable: false,
    seatNumber: 115,
  },
  {
    id: 116,
    isAvailable: false,
    seatNumber: 116,
  },
  {
    id: 117,
    isAvailable: false,
    seatNumber: 117,
  },
  {
    id: 118,
    isAvailable: false,
    seatNumber: 118,
  },
  {
    id: 119,
    isAvailable: false,
    seatNumber: 119,
  },
  {
    id: 120,
    isAvailable: false,
    seatNumber: 120,
  },
  {
    id: 121,
    isAvailable: false,
    seatNumber: 121,
  },
  {
    id: 122,
    isAvailable: false,
    seatNumber: 122,
  },
  {
    id: 123,
    isAvailable: false,
    seatNumber: 123,
  },
  {
    id: 124,
    isAvailable: false,
    seatNumber: 124,
  },
  {
    id: 125,
    isAvailable: false,
    seatNumber: 125,
  },
  {
    id: 126,
    isAvailable: false,
    seatNumber: 126,
  },
  {
    id: 127,
    isAvailable: false,
    seatNumber: 127,
  },
  {
    id: 128,
    isAvailable: false,
    seatNumber: 128,
  },
  {
    id: 129,
    isAvailable: false,
    seatNumber: 129,
  },
  {
    id: 130,
    isAvailable: false,
    seatNumber: 130,
  },
  {
    id: 131,
    isAvailable: false,
    seatNumber: 131,
  },
  {
    id: 132,
    isAvailable: false,
    seatNumber: 132,
  },
  {
    id: 133,
    isAvailable: false,
    seatNumber: 133,
  },
  {
    id: 134,
    isAvailable: false,
    seatNumber: 134,
  },
  {
    id: 135,
    isAvailable: false,
    seatNumber: 135,
  },
  {
    id: 136,
    isAvailable: false,
    seatNumber: 136,
  },
  {
    id: 137,
    isAvailable: false,
    seatNumber: 137,
  },
  {
    id: 138,
    isAvailable: false,
    seatNumber: 138,
  },
  {
    id: 139,
    isAvailable: false,
    seatNumber: 139,
  },
  {
    id: 140,
    isAvailable: false,
    seatNumber: 140,
  },
  {
    id: 141,
    isAvailable: false,
    seatNumber: 141,
  },
  {
    id: 142,
    isAvailable: false,
    seatNumber: 142,
  },
  {
    id: 143,
    isAvailable: false,
    seatNumber: 143,
  },
  {
    id: 144,
    isAvailable: false,
    seatNumber: 144,
  },
  {
    id: 145,
    isAvailable: false,
    seatNumber: 145,
  },
  {
    id: 146,
    isAvailable: false,
    seatNumber: 146,
  },
  {
    id: 147,
    isAvailable: false,
    seatNumber: 147,
  },
  {
    id: 148,
    isAvailable: false,
    seatNumber: 148,
  },
  {
    id: 149,
    isAvailable: false,
    seatNumber: 149,
  },
  {
    id: 150,
    isAvailable: false,
    seatNumber: 150,
  },
  {
    id: 151,
    isAvailable: false,
    seatNumber: 151,
  },
  {
    id: 152,
    isAvailable: false,
    seatNumber: 152,
  },
  {
    id: 153,
    isAvailable: false,
    seatNumber: 153,
  },
  {
    id: 154,
    isAvailable: false,
    seatNumber: 154,
  },
  {
    id: 155,
    isAvailable: false,
    seatNumber: 155,
  },
  {
    id: 156,
    isAvailable: false,
    seatNumber: 156,
  },
  {
    id: 157,
    isAvailable: false,
    seatNumber: 157,
  },
  {
    id: 158,
    isAvailable: false,
    seatNumber: 158,
  },
  {
    id: 159,
    isAvailable: false,
    seatNumber: 159,
  },
  {
    id: 160,
    isAvailable: false,
    seatNumber: 160,
  },
  {
    id: 161,
    isAvailable: false,
    seatNumber: 161,
  },
  {
    id: 162,
    isAvailable: false,
    seatNumber: 162,
  },
  {
    id: 163,
    isAvailable: false,
    seatNumber: 163,
  },
  {
    id: 164,
    isAvailable: false,
    seatNumber: 164,
  },
  {
    id: 165,
    isAvailable: false,
    seatNumber: 165,
  },
  {
    id: 166,
    isAvailable: false,
    seatNumber: 166,
  },
];


export const languages = [
  {
    id: 1,
    description: 'Қазақ'
  },
  {
    id: 2,
    description: 'Русский'
  },
  {
    id: 3,
    description: 'English'
  },
];

export const city = [
  {
    id: 1,
    name: 'Almaty',
  },
  {
    id: 2,
    name: 'Shymkent',
  },
  {
    id: 3,
    name: 'Nur-Sultan',
  },
  {
    id: 4,
    name: 'Karaganda',
  },
  {
    id: 5,
    name: 'Kokshetau',
  },
  {
    id: 6,
    name: 'Oskemen',
  },
  {
    id: 8,
    name: 'Semey',
  },
  {
    id: 9,
    name: 'Kostanay',
  },
  {
    id: 10,
    name: 'Oral',
  },
  {
    id: 11,
    name: 'Katal Oral',
  },
  {
    id: 12,
    name: 'Matadi',
  },
  {
    id: 13,
    name: 'Burundi',
  },
  {
    id: 14,
    name: 'Katal Oral',
  },
];

export const sort = [
  {
    id: 1,
    name: 'Time'
  },
  {
    id: 2,
    name: 'Distance'
  },
  {
    id: 3,
    name: 'Price'
  }
];

export const order = [
  {
    id: 1,
    name: 'Ascending ↑'
  },
  {
    id: 2,
    name: 'Descending ↓'
  },
  
]