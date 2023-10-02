export const formatMoney = (value: number) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'BRL' });
};
