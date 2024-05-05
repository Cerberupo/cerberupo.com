import type {TimelineCard} from "./timeline-card.ts";

export interface TimelineProject {
    endDate: Date | null;
    startDate: Date;
    proyectName: string;
    proyectLogo: any;
    proyectCardProps: TimelineCard;
    proyectImage: any;
    cardSide: 'left' | 'right';
    color: string;
}