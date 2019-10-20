import { League } from './league';
import { President } from './president';
import { Coach } from './coach';
import { Stadium } from './stadium';

export class Team {
    logo: string;
    name: string;
    membersNumber?: number;
    avgAge?: number;
    league?: League;
    president?: President ;
    coach?: Coach;
    stadium?: Stadium;
}
