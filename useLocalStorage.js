import { useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;
type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];

export const useLocalStorage: UseLocalStorage = (keyName) => {
    const initialValue = localStorage.getItem(keyName) || '';
    const [value, setValue] = useState<LocalStorageReturnValue>(initialValue);
    const setItem = (newValue: LocalStorageSetValue) => {
        setValue(newValue);
        localStorage.setItem(keyName, newValue);
    };
    const removeItem = () => {
        setValue(null); 
        localStorage.removeItem(keyName);
    };

    return [value, { setItem, removeItem }];
};