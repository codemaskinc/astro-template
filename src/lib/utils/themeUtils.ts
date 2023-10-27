import { PersistorKey, ThemeMode } from 'lib/types'
import { localStorageUtils } from '.'

export const getCurrentTheme = () => {
    const fromStorage = localStorageUtils.get(PersistorKey.ThemeMode)

    if (fromStorage) {
        return fromStorage
    }

    if (window.themeMode !== undefined) {
        return window.themeMode
    }

    const themeMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? ThemeMode.Dark
        : ThemeMode.Light
    window.themeMode = themeMode
    localStorageUtils.set(PersistorKey.ThemeMode, themeMode)

    return themeMode
}
