import { CalcStats } from './calc-stats';
import { CalcAverages } from './calc-averages';
import { CalcMax } from './calc-max';

export type Calc = {
    stats: CalcStats
    averages: CalcAverages
    maxes: CalcMax[]
};