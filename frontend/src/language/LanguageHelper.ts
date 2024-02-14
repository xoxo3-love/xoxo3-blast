"use client";

import resso from "resso";

export type TLanguage = "en" | "light" | "auto";

export const LanguageStore = resso({
  currentLanguage: "",
  supportLanguages: [
    {
      label: "简体中文",
      value: "zh-CN",
    },
    {
      label: "繁体中文",
      value: "zh-HK",
    },
    {
      label: "English",
      value: "en",
    },
  ] as {
    label: string;
    value: string;
  }[],
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

  switch(lang: string) {
    localStorage.setItem("currentLanguage", lang);
    LanguageStore.currentLanguage = lang;
  },
};
