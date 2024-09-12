import {calculateInvestmentResults} from '../util/investment.js'

export default function Tabelle({inputValue}) {
    const resultData = calculateInvestmentResults(inputValue);
    console.log(resultData);
    return (
        <table>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
        </table>
    );
}