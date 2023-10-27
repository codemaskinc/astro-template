import { Pathname, ThemeMode } from '../types'
import type { Dictionary } from '.'

export const plPL: Dictionary = {
    components: {
        nav: {
            [Pathname.A]: 'A',
            [Pathname.Home]: 'Strona główna',
            [ThemeMode.Dark]: 'Ciemny 🌛',
            [ThemeMode.Light]: 'Jasny 🌞',
            currentLanguage: 'Polski 🇵🇱'
        }
    }
}
