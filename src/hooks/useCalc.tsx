import { Calc, CalcAverages, CalcMax, CalcStats, Inputs } from 'src/constants';

export const useCalc = (inputs: Inputs): Calc => {

    const { simulationTime, customerProb, arrival, service } = inputs;


    const stats: CalcStats = {
        arrivalRate: {
            a: simulationTime / arrival.a,
            b: simulationTime / arrival.b,
            c: simulationTime / arrival.c
        },
        service: {
            a: simulationTime / service.a,
            b: simulationTime / service.b,
            c: simulationTime / service.c
        }
    };


    const averages: CalcAverages = {
        cars: {
            a: stats.arrivalRate.a / (stats.service.a - stats.arrivalRate.a),
            b: stats.arrivalRate.b / (stats.service.b - stats.arrivalRate.b),
            c: stats.arrivalRate.c / (stats.service.c - stats.arrivalRate.c)
        },
        time: {
            a: 1 / (stats.service.a - stats.arrivalRate.a),
            b: 1 / (stats.service.b - stats.arrivalRate.b),
            c: 1 / (stats.service.c - stats.arrivalRate.c)
        },
        occupancy: {
            a: stats.arrivalRate.a / stats.service.a,
            b: stats.arrivalRate.b / stats.service.b,
            c: stats.arrivalRate.c / stats.service.c
        }
    };


    const maxes: CalcMax[] = [];
    for(let i = 0; i < customerProb; i++) {
        maxes.push({
            id: i,
            scenery: {
                a: (1 - (stats.arrivalRate.a / stats.service.a)) * Math.pow(stats.arrivalRate.a / stats.service.a, i),
                b: (1 - (stats.arrivalRate.b / stats.service.b)) * Math.pow(stats.arrivalRate.b / stats.service.b, i),
                c: (1 - (stats.arrivalRate.c / stats.service.c)) * Math.pow(stats.arrivalRate.c / stats.service.c, i)
            }
        });
    }

    return {
        stats,
        averages,
        maxes
    };
};