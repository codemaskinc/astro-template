import type { Language } from 'lib/locale'
import type { ThemeMode } from './theme'

export enum PersistorKey {
    ThemeMode = 'app_theme',
    Locale = 'app_locale'
}

export type LocalStorage<TKey extends PersistorKey> =
    TKey extends PersistorKey.Locale ? Language
        : TKey extends PersistorKey.ThemeMode ? ThemeMode
            : never
