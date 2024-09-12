

export default function InputField({onChangeInput, inputValue}) {
    return (
        <form id="EingabeForm" className="EingabeForm">
            <div className="SingleInput">
                <label htmlFor="Initial Investment">Initial Investment</label>
                <input id="Initial Investment" required type="number"
                    value={inputValue.initialInvestment} 
                    onChange={(event) => onChangeInput('initialInvestment', event.target.value)} />
            </div>
            <div className="SingleInput">
                <label htmlFor="Annual Investment">Annual Investment</label>
                <input id="Annual Investment" required type="number"
                    value={inputValue.annualInvestment} 
                    onChange={(event) => onChangeInput('annualInvestment', event.target.value)} />
            </div>
            <div className="SingleInput">
                <label htmlFor="Expected return">Expected return</label>
                <input id="Expected return" required type="number"
                    value={inputValue.expectedReturn} 
                    onChange={(event) => onChangeInput('expectedReturn', event.target.value)} />
            </div>
            <div className="SingleInput">
                <label htmlFor="Duration">Duration</label>
                <input id="Duration" required type="number"
                    value={inputValue.duration} 
                    onChange={(event) => onChangeInput('duration', event.target.value)} />
            </div>
        </form>
    )
}