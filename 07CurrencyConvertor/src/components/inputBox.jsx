import "../css/inputBox.css";

export default function InputBox(props) {
    const optionsList = props.options.map((eachOption) => (
        <option
            key={eachOption} //becuase we can provide any value from the incoming data so this time we dont have any id but indeed the eachOption coming is going to be unique
            value={eachOption}
        >
            {eachOption.toUpperCase()}
        </option>
    ));

    return (
        <div className="input-box">
            <div className="amount-section">
                <label htmlFor={props.id}>{props.label}</label>
                <input
                    type="number"
                    name={props.id}
                    id={props.id}
                    value={props.amount} // so now using the setter function we will assign it e.target.value(so still we will be using the 'value' but looks like it is somehow coming from state but it is like a loop pehle khud state mein set kiya then state se hi liya and equated to value) look at the below onClick
                    onChange={(e) =>
                        props.setAmount &&
                        props.setAmount(Number(e.target.value > 0 && e.target.value))
                    } //first && becuase we cant have both properties disabled and onChange common sense //second && because we dont want negative values
                    disabled={props.changeDisabled}
                />
            </div>

            <div className="currency-section">
                <label htmlFor={props.selectId}>Currency Type</label>
                <select
                    name={props.selectId}
                    id={props.selectId}
                    value={props.selectedCurrency} //similar concept as the input field
                    onChange={(e) => props.setCurrency(e.target.value)}
                >
                    {optionsList}
                </select>
            </div>
        </div>
    );
}
