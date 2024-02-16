import { LanguageStore } from "@/language/LanguageHelper";
import { configZH } from "./word/zh";
import { configHK } from "./word/zh-HK";
import { configEN } from "./word/en";

export const WordHelper = {
  useGameInstance() {
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
