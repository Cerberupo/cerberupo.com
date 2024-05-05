import type {TimelineProject} from "./timeline-project.ts";

export interface TimelineCompany {
    logo: any;
    name: string;
    side: 'left' | 'right';
    projects: TimelineProject[];
}