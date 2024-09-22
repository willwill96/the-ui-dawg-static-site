export const convertToBaseUrl = (value: string) => {
  const baseUrl = import.meta.env.BASE_URL
  if (baseUrl) {
    if (baseUrl === '/') {
      return `/${value}`
    }
    return `${import.meta.env.BASE_URL}/${value}`;
  }
  return `/${value}`;
};

export const removeBaseUrl = (value: string) => {
  if (import.meta.env.BASE_URL && import.meta.env.BASE_URL !== "/") {
    return value.replace(import.meta.env.BASE_URL, "/");
  }
  return value;
};
