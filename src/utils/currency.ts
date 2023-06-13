export const formatCurrency = (value: number | bigint) => {
  return new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: String(value).length,
  }).format(value);
};
