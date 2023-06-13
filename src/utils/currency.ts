export const formatCurrency = (value: number | bigint) => {
  return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(
    value
  );
};
