function removeSmallest(numbers) {
  const lessBoring = Array.from(numbers);
  lessBoring.splice( lessBoring.indexOf(Math.min(...lessBoring)), 1);
  return lessBoring;
}