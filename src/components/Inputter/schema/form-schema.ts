import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    simulationTime: Yup.number().typeError('Esse campo é obrigatório').required('Esse campo é obrigatório'),
    customerProb: Yup.number().typeError('Esse campo é obrigatório').required('Esse campo é obrigatório'),
    arrival: Yup.object().shape({
        a: Yup.number().typeError('Esse campo é obrigatório').required('Esse campo é obrigatório'),
        b: Yup.number().typeError('Esse campo é obrigatório').required('Esse campo é obrigatório'),
        c: Yup.number().typeError('Esse campo é obrigatório').required('Esse campo é obrigatório')
    }),
    service: Yup.object().shape({
        a: Yup.number().typeError('Esse campo é obrigatório').required('Esse campo é obrigatório'),
        b: Yup.number().typeError('Esse campo é obrigatório').required('Esse campo é obrigatório'),
        c: Yup.number().typeError('Esse campo é obrigatório').required('Esse campo é obrigatório')
    })
});