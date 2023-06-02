export const setStorageItem = (key: string, value: any) => {
  localStorage.setItem(`${key}`, JSON.stringify(value));
};

export const getStorageItem = (key: string) => {
  const value = localStorage.getItem(`${key}`);

  return JSON.parse(value || "");
};
