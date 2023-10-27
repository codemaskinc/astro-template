import type { Dictionary, Language } from 'lib/locale'
import type { ThemeMode } from 'lib/types'

export declare global {
    interface Window {
        changeLanguage(newLanguage: Language): void,
        selectedLanguage: Language,
        cachedDictionaries: Partial<Record<Language, Dictionary>>,
        themeMode: ThemeMode | undefined
    }
}
