const randomLapNum = Math.floor(Math.random() * (250 - 100 + 1) + 50);
const randomPenNum = Math.floor(Math.random() * (150 - 50 + 1) + 50);

export const getLapTime = time =>
  new Date(time * randomLapNum).toTimeString().slice(0, 8);
export const getPenaltyTime = time =>
  new Date(time * randomPenNum).toTimeString().slice(0, 8);
