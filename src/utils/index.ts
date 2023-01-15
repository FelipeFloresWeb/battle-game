export const numeric = (
  value: string | number = 0,
  decimals: number = 2
): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
  return formatter.format(value as number);
};
