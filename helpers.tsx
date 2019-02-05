export const convertCeliusToFahrenheit:Function = (num):number => {
  const converted = (num * 1.8) + 32;
  return parseInt(converted.toString(), 10);
};

