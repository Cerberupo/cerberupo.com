import type {MediaQuery} from "../interfaces/media-query.ts";
import {StyleSPEnum} from "../styles/enums/sp.enum.ts";
import _ from "lodash";
import {getMediaQueryDefaults} from "./getMediaQueryDefaults.ts";
import {setMissingMediaQuery} from "./setMissingMediaQuery.ts";

export function getMediaQueryProp(value: any, _default: any): MediaQuery<any> {
    if (!value) value = _default;
    if (!_.isObject(value)) {
        value = getMediaQueryDefaults(value);
    }
    return setMissingMediaQuery(value as MediaQuery<StyleSPEnum>, _default);
}