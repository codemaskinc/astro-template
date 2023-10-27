import { defineConfig } from 'astro/config'
import { astroStaticDict } from 'astro-static-dict/integration'
import { enUS, plPL } from './src/lib/locale'

export default defineConfig({
    integrations: [
        astroStaticDict({
            dictionaries: {
                enUS,
                plPL
            },
            dictionary: enUS
        })
    ]
})
