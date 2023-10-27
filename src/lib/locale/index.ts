import { initDictionary } from 'astro-static-dict/server'
import { enUS } from './en_US'
export { plPL } from './pl_PL'

export enum Language {
    enUS = 'enUS',
    plPL = 'plPL'
}

export type Dictionary = typeof enUS

export const dictionary = initDictionary({
    dictionary: enUS,
    isDev: import.meta.env.DEV
})

export const updateDictionary = () => {

}

export {
    enUS
}
