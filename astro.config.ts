import {defineConfig} from 'astro/config';
import {defaultLocale, languages} from "./src/i18n/ui";

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale,
        locales: Object.keys(languages),
        routing: {
            prefixDefaultLocale: true
        }
    }
});
