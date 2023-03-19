import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { CalcStats } from 'src/constants';
import './styles.scss';

type Props = {
    stats: CalcStats
    onClear: () => void
}

export const ResultStats = ({ stats: { arrivalRate, service }, onClear }: Props) => (
    <div id='result-stats'>
        <IconButton color='primary' onClick={onClear}>
            <ArrowBack />
        </IconButton>

        <Card>
            <CardContent className='content'>
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
                    Chegadas (λ)
                </Typography>
                <Typography variant='subtitle2' textAlign='center'>
                    { arrivalRate.a.toFixed(2) }
                </Typography>
                <Typography variant='subtitle2' textAlign='center'>
                    { arrivalRate.b.toFixed(2) }
                </Typography>
                <Typography variant='subtitle2' textAlign='center'>
                    { arrivalRate.c.toFixed(2) }
                </Typography>


                <Typography variant='body1' color='primary' textAlign='end'>
                    Serviços (μ)
                </Typography>
                <Typography variant='subtitle2' textAlign='center'>
                    { service.a.toFixed(2) }
                </Typography>
                <Typography variant='subtitle2' textAlign='center'>
                    { service.b.toFixed(2) }
                </Typography>
                <Typography variant='subtitle2' textAlign='center'>
                    { service.c.toFixed(2) }
                </Typography>
            </CardContent>
        </Card>
    </div>
);