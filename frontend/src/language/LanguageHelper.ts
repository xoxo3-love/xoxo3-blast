"use client";

import resso from "resso";

export type TLanguage = {
  label: string;
  value: string;
  short: string;
};

export const LanguageStore = resso({
  currentLanguage: "",
  currentLanguageItem: {} as TLanguage,
  supportLanguages: [
    {
      label: "简体中文",
      value: "zh-CN",
      short: "简",
    },
    {
      label: "繁体中文",
      value: "zh-HK",
      short: "繁",
    },
    {
      label: "English",
      value: "en",
      short: "EN",
    },
  ] as TLanguage[],
});

export const LanguageHelper = {
  init: () => {
    let navLanguages = window?.navigator?.languages;
    if (!navLanguages) {
      return;
    }

    let temp = localStorage.getItem("currentLanguage");
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

    if (temp) {
      lang = temp;
    } else {
      set(["zh-CN"], ["zh-HK", "zh-TW"]);
    }

    LanguageHelper.switch(lang);
  },

  resetCurrentItem: () => {
    let { currentLanguage } = LanguageStore;
    let selected = LanguageStore.supportLanguages[0];
    for (let i = 0; i < LanguageStore.supportLanguages.length; i++) {
      let lang = LanguageStore.supportLanguages[i];
      if (lang.value == currentLanguage) {
        selected = lang;
        break;
      }
    }
    LanguageStore.currentLanguageItem = selected;
    return selected;
  },

  switch(lang: string) {
    localStorage.setItem("currentLanguage", lang);
    LanguageStore.currentLanguage = lang;
    LanguageHelper.resetCurrentItem();
  },
};
