import type {MediaQuery} from "../interfaces/media-query.ts";

export function getMediaQueryDefaults(value: any): MediaQuery<any> {
    return {
        mobile: value,
        tablet: value,
        tabletH: value,
        default: value
    };
}