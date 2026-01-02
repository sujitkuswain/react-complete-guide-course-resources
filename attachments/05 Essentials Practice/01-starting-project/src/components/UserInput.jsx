export default function UserInput({inputValues, handleChange}) {
    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input name="initialInvestment" type="number" value={inputValues.initialInvestment}
                           onChange={handleChange}/>
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input name="annualInvestment" type="number" value={inputValues.annualInvestment}
                           onChange={handleChange}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input name="expectedReturn" type="number" value={inputValues.expectedReturn}
                           onChange={handleChange}/>
                </p>
                <p>
                    <label>DURATION</label>
                    <input name="duration" type="number" value={inputValues.duration}
                           onChange={handleChange}/>
                </p>
            </div>
        </div>
    );
}
