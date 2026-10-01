export function getNextMessageIndex(currentIndex, messageCount) {
  return (currentIndex + 1) % messageCount;
}

export function calculateClockRotations(hour, minute, second) {
  const hours = hour % 12;

  return {
    hours: (hours + minute / 60 + second / 3600) * 30,
    minutes: (minute + second / 60) * 6,
    seconds: second * 6
  };
}