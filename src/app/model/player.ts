import { Team } from './team';
import { Prosecutor } from './prosecutor';

export class Player {
    id: number;
    photo: string;
    name: string;
    birthDate: string;
    birthPlace: string;
    nationality: string;
    height: string;
    team: Team;
    foot: string;
    stats: string;
    role: string;
    position: string;
    quot: number;
    prosecutor?: Prosecutor;
}
