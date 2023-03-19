import { Inputs } from 'src/constants';
import { useCalc } from 'src/hooks';
import { ResultStats } from './Stats';
import './styles.scss';
import { ResultAverages } from './Averages';
import { ResultTable } from './Table';

type Props = {
    inputs: Inputs
    onClear: () => void
}

export const Result = ({ inputs, onClear }: Props) => {

    const { stats, averages, maxes } = useCalc(inputs);

    return (
        <div id='result'>
            <ResultStats stats={stats} onClear={onClear} />
            <ResultAverages averages={averages} />
            <ResultTable maxes={maxes} />
        </div>
    );
};