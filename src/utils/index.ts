import { SEAT_COLOR } from "./Enum";

export function getSeatStatusColor(isActive: boolean, isAvailable: boolean) {
  const seatStatusMap: Map<SEAT_COLOR, string> = new Map();

  seatStatusMap.set(SEAT_COLOR.SEAT_AVAILABLE, "#253554");
  seatStatusMap.set(SEAT_COLOR.SEAT_OCCUPIED, "#1F293D");
  seatStatusMap.set(SEAT_COLOR.SEAT_CHOSEN, "#FF8036");

  if (isActive && isAvailable) return seatStatusMap.get(SEAT_COLOR.SEAT_CHOSEN);
  else if (!isActive && isAvailable)
    return seatStatusMap.get(SEAT_COLOR.SEAT_AVAILABLE);

  return seatStatusMap.get(SEAT_COLOR.SEAT_OCCUPIED);
}

// export function secondsToTime(value_in_second: number) {
//     let hours = Math.floor(value_in_second / (60 * 60));

//     let divisor_for_minutes = value_in_second % (60 * 60);

//     let minutes = Math.floor(divisor_for_minutes);

//     let divisor_for_seconds = divisor_for_minutes % 60;

//     let seconds = Math.ceil(divisor_for_seconds);

//     // return {
//     //     "h": hours,
//     //     "m": minutes,
//     //     "s": seconds
//     // }

//     return `${minutes}:${seconds}`;
// }

export function secondsToTime(secs: number) {
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };

  //return obj;

  return `${minutes}:${seconds}`;
}

export function getTLeftTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return `${minutes}:${seconds}`;
}


export const millisToMinutesAndSeconds = (millis: number) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = Number(((millis % 60000) / 1000).toFixed(0));
	//ES6 interpolated literals/template literals 
  	//If seconds is less than 10 put a zero in front.
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}