export const setStorageItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = (key: string) => {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
};

export const removeStorageItem = (key: string) => {
  localStorage.removeItem(key);
};
