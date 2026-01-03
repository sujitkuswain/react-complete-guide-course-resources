import Result from "./components/Result.jsx";
import Header from "./components/Header.jsx";
import {useEffect, useState} from "react";
import {calculateInvestmentResults} from "./util/investment.js";
import UserInputs from "./components/UserInputs.jsx";

function App() {

    const [input, setInput] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    });

    const [result, setResult] = useState([]);

    //handle user input changes and update input state
    function handleChange(e) {
        const {name, value} = e.target;

        setInput(prev => ({
            ...prev,
            [name]: value === "" ? "" : +value   // allow empty string
        }));
    }


    useEffect(() => {
        setResult(calculateInvestmentResults(input));
    }, [input]);


    return (
        <>
            <Header/>
            <UserInputs inputValues={input} handleChange={handleChange}/>
            <Result initialInvestment={input.initialInvestment} result={result}/>
        </>
    )
}

export default App
