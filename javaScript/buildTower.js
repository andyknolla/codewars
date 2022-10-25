function towerBuilder(nFloors) {
  return Array.from({length: nFloors}, (element, index) => {
    const space = ' '.repeat((nFloors - index) - 1);
    return space + '*'.repeat((index * 2) + 1) + space;
  });
}