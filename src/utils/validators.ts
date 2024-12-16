import { SearchOption } from "../types";

export const vRequired = (_v: unknown) => {
  if (_v !== null && _v !== undefined) {
    if (typeof _v === "string") {
      return String(_v).trim().length > 0;
    } else if (isSearchOption(_v)) {
      return _v.id !== "" && _v.name !== "";
    }
  }
  return false;
};

export const vEmail = (_v: unknown): boolean => {
  if (typeof _v === "string") {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(_v);
  }
  return false;
};

export const vPhone = (_v: unknown): boolean => {
  if (typeof _v === "string") {
    return /^\d{10}$/.test(String(_v));
  }
  return false;
};

export const vNumber = (_v: unknown) => {
  if (typeof _v === "string") {
    return !isNaN(Number(_v));
  }
  return false;
};

export const vAlphabets = (_v: unknown): boolean => {
  if (typeof _v === "string") {
    return /^[a-zA-Z\s]+$/.test(_v);
  }
  return false;
};

export const vPanNumber = (_v: unknown): boolean => {
  if (typeof _v === "string") {
    return /^[A-Z]{5}\d{4}[A-Z]$/.test(_v);
  }
  return false;
};

export const vPinCode = (_v: unknown): boolean => {
  if (typeof _v === "string") {
    return /^\d{6}$/.test(_v);
  }
  return false;
};

export const isSearchOption = (obj: object): obj is SearchOption => {
  return (
    "id" in obj &&
    "name" in obj &&
    typeof (obj as SearchOption).id === "string" &&
    typeof (obj as SearchOption).name === "string"
  );
};
