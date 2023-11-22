import { useEffect, useState } from "react";

const getStorageValue = function (key, defaultValue) {
  const data = localStorage.getItem(key);
  const parsedData = JSON.parse(data);
  return parsedData || defaultValue;
};

const useStorageData = function (key, defaultValue) {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStorageData;
