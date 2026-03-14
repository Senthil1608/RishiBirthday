import i18n from "../i18n"

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng)
}

export const detectBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.languages[0]
  const supportedLangs = ['en', 'fr', 'es', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko', 'ar', 'hi', 'nl', 'sv', 'da', 'no', 'fi', 'tr']

  // Get the language code (e.g., 'en-US' -> 'en')
  const langCode = browserLang.split('-')[0]

  // Check if the detected language is supported
  if (supportedLangs.includes(langCode)) {
    return langCode
  }

  return 'en' // fallback
}

export const resetToBrowserLanguage = () => {
  const browserLang = detectBrowserLanguage()
  i18n.changeLanguage(browserLang)
}