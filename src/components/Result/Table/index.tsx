import { Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { CalcMax } from 'src/constants';
import './styles.scss';

type Props = {
    maxes: CalcMax[]
}

export const ResultTable = ({ maxes }: Props) => (
    <Card id='result-table'>
        <CardContent>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>
                            N
                        </TableCell>
                        <TableCell align='center'>
                            P(x)
                        </TableCell>
                        <TableCell align='center'>
                            Cenário A
                        </TableCell>
                        <TableCell align='center'>
                            Cenário B
                        </TableCell>
                        <TableCell align='center'>
                            Cenário C
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    { maxes.map(max => (
                        <TableRow key={max.id}>
                            <TableCell align='center'>
                                { max.id }
                            </TableCell>
                            <TableCell align='center'>
                                P({ max.id })
                            </TableCell>
                            <TableCell align='center'>
                                { max.scenery.a.toFixed(2) }
                            </TableCell>
                            <TableCell align='center'>
                                { max.scenery.b.toFixed(2) }
                            </TableCell>
                            <TableCell align='center'>
                                { max.scenery.c.toFixed(2) }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);