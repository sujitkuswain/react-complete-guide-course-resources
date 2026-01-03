import InputField from "./InputItem.jsx";

export default function UserInputs({inputValues, handleChange}) {
    return (
        <div id="user-input">
            <div className="input-group">
                <InputField
                    name="initialInvestment"
                    label="INITIAL INVESTMENT"
                    value={inputValues.initialInvestment}
                    onChange={handleChange}/>
                <InputField
                    name="annualInvestment"
                    label="ANNUAL INVESTMENT"
                    value={inputValues.annualInvestment}
                    onChange={handleChange}/>
            </div>
            <div className="input-group">
                <InputField
                    name="expectedReturn"
                    label="EXPECTED RETURN"
                    value={inputValues.expectedReturn}
                    onChange={handleChange}/>
                <InputField
                    name="duration"
                    label="DURATION"
                    value={inputValues.duration}
                    onChange={handleChange}/>
            </div>
        </div>
    );
}
