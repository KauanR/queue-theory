export type Inputs = {
    simulationTime: number
    customerProb: number
    arrival: {
        a: number
        b: number
        c: number
    }
    service: {
        a: number
        b: number
        c: number
    }
}