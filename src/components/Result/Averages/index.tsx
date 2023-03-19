import { Card, CardContent, Typography } from '@mui/material';
import { CalcAverages } from 'src/constants';
import './styles.scss';

type Props = {
    averages: CalcAverages
}

export const ResultAverages = ({ averages: { cars, time, occupancy } }: Props) => (
    <Card id='result-averages'>
        <CardContent>
            <div></div>
            <Typography variant='body1' color='text.secondary' textAlign='center'>
                A
            </Typography>
            <Typography variant='body1' color='text.secondary' textAlign='center'>
                B
            </Typography>
            <Typography variant='body1' color='text.secondary' textAlign='center'>
                C
            </Typography>


            <Typography variant='body1' color='primary' textAlign='end'>
                Número Médio de Carros no Sistema (L)
            </Typography>
            <Typography variant='subtitle2' textAlign='center'>
                { cars.a.toFixed(2) }
            </Typography>
            <Typography variant='subtitle2' textAlign='center'>
                { cars.b.toFixed(2) }
            </Typography>
            <Typography variant='subtitle2' textAlign='center'>
                { cars.c.toFixed(2) }
            </Typography>


            <Typography variant='body1' color='primary' textAlign='end'>
                Tempo Médio Despendido no Sistema (W)
            </Typography>
            <Typography variant='subtitle2' textAlign='center'>
                { time.a.toFixed(2) }
            </Typography>
            <Typography variant='subtitle2' textAlign='center'>
                { time.b.toFixed(2) }
            </Typography>
            <Typography variant='subtitle2' textAlign='center'>
                { time.c.toFixed(2) }
            </Typography>


            <Typography variant='body1' color='primary' textAlign='end'>
                Taxa média de ocupação do servidor (p)
            </Typography>
            <Typography variant='subtitle2' textAlign='center'>
                { occupancy.a.toFixed(2) }
            </Typography>
            <Typography variant='subtitle2' textAlign='center'>
                { occupancy.b.toFixed(2) }
            </Typography>
            <Typography variant='subtitle2' textAlign='center'>
                { occupancy.c.toFixed(2) }
            </Typography>
        </CardContent>
    </Card>
);