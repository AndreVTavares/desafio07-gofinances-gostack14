const formatValue = (value: number): string => {
  const valueReais = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
  return valueReais;
}; // TODO

export default formatValue;
