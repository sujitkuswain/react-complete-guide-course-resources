import Result from "./components/Result.jsx";
import Header from "./components/Header.jsx";
import {useState} from "react";
import UserInputs from "./components/UserInputs.jsx";

function App() {

    const [input, setInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const validInput = input.duration > 0;

    //handle user input changes and update input state
    function handleChange(e) {
        const {name, value} = e.target;

        setInput(prev => ({
            ...prev,
            [name]: value === "" ? "" : +value
        }));
    }


    return (
        <>
            <Header/>
            <UserInputs inputValues={input} handleChange={handleChange}/>
            {!validInput && <p className="center">Invalid data.</p>}
            {validInput && <Result initialInvestment={input.initialInvestment} userInput={input}/>}
        </>
    )
}

export default App
