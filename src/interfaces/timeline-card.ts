import {TagEnum} from "../enums/tag.enum.ts";
import type {ImageMetadata} from "astro";

export interface TimelineCard {
    logo: any;
    longLogo?: boolean;
    star?: boolean;
    name: string;
    position: string;
    description: string;
    endDate?: Date;
    startDate?: Date;
    current?: boolean;
    company?: any;
    tags: TagEnum[];
    fullTags: TagEnum[];
    fullDescription: string;
    images?: ImageMetadata[];
    video?: string;
}