import { Controller, useForm } from 'react-hook-form';
import { Inputs } from 'src/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './schema/form-schema';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import './styles.scss';
import { useEffect } from 'react';

type Props = {
    onSubmit: (value: Inputs) => void
}

export const Inputter = ({ onSubmit }: Props) => {

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors: formErrors, isValid: formIsValid }
    } = useForm<Inputs>({
        resolver: yupResolver(formSchema),
        reValidateMode: 'onChange',
        mode: 'onChange'
    });

    const submitHandler = (value: Inputs) => {
        onSubmit(value);
        reset();
    };

    useEffect(() => {
        console.log(formErrors);
    }, [formErrors]);

    return (
        <div id='inputter'>
            <Card>
                <CardContent>
                    <div className='title'>
                        <Typography variant='h3'>
                            Teoria das filas
                        </Typography>
                        <Typography variant='subtitle1' color='text.secondary'>
                            Para começar, por favor insira os dados necessários logo abaixo.
                        </Typography>
                    </div>

                    <form id='inputter-form' onSubmit={handleSubmit(submitHandler)}>
                        <Controller
                            name='simulationTime'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id='simulationTime'
                                    type='number'
                                    label='Tempo de Simulação'
                                    variant='outlined'
                                    autoFocus
                                    error={!!formErrors.simulationTime}
                                    helperText={formErrors.simulationTime?.message}
                                />
                            )}
                        />

                        <Controller
                            name='customerProb'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    id='customerProb'
                                    type='number'
                                    label='Probabilidade de Cliente (MAX)'
                                    variant='outlined'
                                    error={!!formErrors.customerProb}
                                    helperText={formErrors.customerProb?.message}
                                />
                            )}
                        />


                        <div></div>
                        <Typography variant='body1' fontWeight='700' textAlign='center'>
                            A
                        </Typography>
                        <Typography variant='body1' fontWeight='700' textAlign='center'>
                            B
                        </Typography>
                        <Typography variant='body1' fontWeight='700' textAlign='center'>
                            C
                        </Typography>


                        <Typography variant='body1' className='arrival' textAlign='end'>
                            Chegadas (λ)
                        </Typography>
                        <Controller
                            name='arrival.a'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type='number'
                                    variant='outlined'
                                    label=''
                                    error={!!formErrors.arrival?.a}
                                    helperText={formErrors.arrival?.a?.message}
                                />
                            )}
                        />
                        <Controller
                            name='arrival.b'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type='number'
                                    variant='outlined'
                                    label=''
                                    error={!!formErrors.arrival?.b}
                                    helperText={formErrors.arrival?.b?.message}
                                />
                            )}
                        />
                        <Controller
                            name='arrival.c'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type='number'
                                    variant='outlined'
                                    label=''
                                    error={!!formErrors.arrival?.c}
                                    helperText={formErrors.arrival?.c?.message}
                                />
                            )}
                        />


                        <Typography variant='body1' className='service' textAlign='end'>
                            Serviços (μ)
                        </Typography>
                        <Controller
                            name='service.a'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type='number'
                                    variant='outlined'
                                    label=''
                                    error={!!formErrors.service?.a}
                                    helperText={formErrors.service?.a?.message}
                                />
                            )}
                        />
                        <Controller
                            name='service.b'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type='number'
                                    variant='outlined'
                                    label=''
                                    error={!!formErrors.service?.b}
                                    helperText={formErrors.service?.b?.message}
                                />
                            )}
                        />
                        <Controller
                            name='service.c'
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    type='number'
                                    variant='outlined'
                                    label=''
                                    error={!!formErrors.service?.c}
                                    helperText={formErrors.service?.c?.message}
                                />
                            )}
                        />
                    </form>

                    <Button
                        type='submit'
                        variant='contained'
                        size='large'
                        form='inputter-form'
                        disabled={!formIsValid}
                    >
                        Simular
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};