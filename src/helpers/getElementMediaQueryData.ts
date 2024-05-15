import type {MediaQuery} from "../interfaces/media-query.ts";

export function getElementMediaQueryData(values: MediaQuery<any>, name: string): any {
    return {
        [`data-${name}-mobile-s`]: values.mobileS,
        [`data-${name}-mobile`]: values.mobile,
        [`data-${name}-tablet`]: values.tablet,
        [`data-${name}-tablet-h`]: values.tabletH,
        [`data-${name}-default`]: values.default
    }
}