export type CalcStats = {
    /** Chegadas (λ) */
    arrivalRate: {
        a: number
        b: number
        c: number
    }
    /** Serviços (μ) */
    service: {
        a: number
        b: number
        c: number
    }
};