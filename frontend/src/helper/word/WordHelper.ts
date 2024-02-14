import { LanguageStore } from "@/language/LanguageHelper";
import { configZH } from "./zh";
import { configHK } from "./zh-HK";
import { configEN } from "./en";

export const WordHelper = {
  useInstance() {
    const { currentLanguage } = LanguageStore;

    if (currentLanguage == "zh-HK") {
      return configHK;
    }
    if (currentLanguage == "zh-CN") {
      return configZH;
    }
    return configEN;
  },
};
