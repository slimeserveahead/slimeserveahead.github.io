function Selection(props) {

    
    return ( 
        <div className="selection" >
            <label htmlFor={props.for} key={props.label}>{props.label}</label>
            <select name={props.for} id={props.for} onChange={(event) => props.checkValue(props.for, event)}> 
                {props.values.map(value => { 
                    return (
                        <option key={value.name} value={value.id}>{value.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Selection