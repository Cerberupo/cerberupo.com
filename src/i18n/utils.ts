import {defaultLocale, ui} from './ui';
import _ from "lodash";

export function getLangFromUrl(url: URL | Location) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLocale;
}

export function useTranslations(url: URL | Location) {
    const lang = getLangFromUrl(url);

    function t(key: string) {
        return _.get(ui[lang], key, _.get(ui[defaultLocale], key));
    }

    return {t, locale: lang}
}