import type {TimelineCard} from "./timeline-card.ts";

export interface TimelineProject {
    endDate: Date | null;
    startDate: Date;
    proyectName: string;
    proyectLogo: any;
    proyectCardProps: TimelineCard;
    proyectImage: any;
    noImage?: boolean;
    color: string;
    side?: 'right' | 'left';
}