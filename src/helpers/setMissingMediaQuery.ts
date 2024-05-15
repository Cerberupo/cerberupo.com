import type {MediaQuery} from "../interfaces/media-query.ts";

export function setMissingMediaQuery(value: MediaQuery<any>, _default: any): MediaQuery<any> {
    if (!value.mobileS) {
        value.mobileS = value.mobile || value.tablet || value.tabletH || value.default || _default;
    }
    if (!value.mobile) {
        value.mobile = value.tablet || value.tabletH || value.default || _default;
    }
    if (!value.tablet) {
        value.tablet = value.tabletH || value.default || _default;
    }
    if (!value.tabletH) {
        value.tabletH = value.default || _default;
    }
    if (!value.default) {
        value.default = _default;
    }
    return value;
}