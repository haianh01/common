export const sayHello = (name: string): string => {
  return `Hello, ${name}! from @rslab/utils`;
};

export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};
