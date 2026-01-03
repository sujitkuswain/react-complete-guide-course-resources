import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Result({initialInvestment, userInput}) {

    //calculate result
    const results = calculateInvestmentResults(userInput);

    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {results.map((item, index) => (
                <tr key={index}>
                    <td>{item.year}</td>
                    <td>{formatter.format(initialInvestment)}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                    <td>{formatter.format(item.annualInvestment)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}