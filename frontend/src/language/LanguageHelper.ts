"use client";

import resso from "resso";

export type TLanguage = "en" | "light" | "auto";

export const LanguageStore = resso({
  currentLanguage: "",
});

export const LanguageHelper = {
  init: () => {
    let navLanguages = window?.navigator?.languages;
    if (!navLanguages) {
      return;
    }

    let lang = "en";
    let set = (...languages: string[][]) => {
      for (let i = 0; i < languages.length; i++) {
        let tempArray = languages[i];
        for (let j = 0; j < tempArray.length; j++) {
          let tempLang = tempArray[j];
          if (navLanguages.indexOf(tempLang) >= 0) {
            lang = tempArray[0];
            return;
          }
        }
      }
    };
    set(["zh-CN"], ["zh-HK", "zh-TW"]);

    LanguageStore.currentLanguage = lang;
  },
};
