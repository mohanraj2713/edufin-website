import { LanguageStringsInterface, LanguageTypes } from "../types/language";
import languageStrings from "./strings.json";

export const getUserLanguagePreference = (): LanguageTypes => {
  const lang = localStorage.getItem("language");

  switch (lang) {
    case "ta":
      return "ta";
    case "hi":
      return "hi";
    case "tl":
      return "tl";
    case "ka":
      return "ka";
    default:
      return "en";
  }
};

export const getStringInUserLanguage = (
  key: keyof LanguageStringsInterface
) => {
  const userLanguage: LanguageTypes = getUserLanguagePreference();
  const str = languageStrings[key][userLanguage];
  return str;
};
