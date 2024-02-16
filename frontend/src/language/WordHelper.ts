import { LanguageStore } from "@/language/LanguageHelper";
import { configZH } from "./word/zh";
import { configHK } from "./word/zh-HK";
import { configEN } from "./word/en";
import { SITE_ZH_HK } from "./site/zh-HK";
import { SITE_ZH } from "./site/zh";
import { SITE_EN } from "./site/en";

export const WordHelper = {
  useInstance() {
    const { currentLanguage } = LanguageStore;

    if (currentLanguage == "zh-HK") {
      return SITE_ZH_HK;
    }
    if (currentLanguage == "zh-CN") {
      return SITE_ZH;
    }
    return SITE_EN;
  },
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
