import {TagEnum} from "../enums/tag.enum.ts";

export interface TimelineCard {
    logo: any;
    name: string;
    position: string;
    description: string;
    tags: TagEnum[];
}