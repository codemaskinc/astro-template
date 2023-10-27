import { Pathname, ThemeMode } from '../types'

export const enUS = {
    components: {
        nav: {
            [Pathname.A]: 'A',
            [Pathname.Home]: 'Home',
            [ThemeMode.Dark]: 'Dark 🌛',
            [ThemeMode.Light]: 'Light 🌞',
            currentLanguage: 'English 🇺🇸'
        }
    }
}
