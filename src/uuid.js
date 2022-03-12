export const uuid = () => {
  const partOne = Date.now().toString(36);
  const partTwo = Math.random().toString(36).substring(2);
  const finalId = partOne.concat(partTwo);

  return finalId;
};
