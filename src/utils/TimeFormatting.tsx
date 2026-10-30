export function timeFormatting(currentTime) {
  if (!currentTime) return { currentTimeStart: "", currentTimeEnd: "" };

  const currentTimeStart = new Date(currentTime.time_start)
    .toLocaleTimeString("da-DK")
    .substring(0, 5);
  const currentTimeEnd = new Date(currentTime.time_end)
    .toLocaleTimeString("da-DK")
    .substring(0, 5);

  return { currentTimeStart, currentTimeEnd };
}

export function historyFormatting(dateByHour) {
  if (!dateByHour) return { dateByHourStart: "" };

  const dateByHourStart = new Date(dateByHour.time_start)
    .toLocaleTimeString("da-DK")
    .substring(0, 5);

  return { dateByHourStart };
}
