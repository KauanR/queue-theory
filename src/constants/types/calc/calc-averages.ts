export type CalcAverages = {
    /** Número Médio de Carros no Sistema (L) */
    cars: { 
        a: number
        b: number
        c: number
    }
    /** Tempo Médio Despendido no Sistema (W) */
    time: { 
        a: number
        b: number
        c: number
    }
    /** Taxa média de ocupação do servidor (p) */
    occupancy: { 
        a: number
        b: number
        c: number
    }
}