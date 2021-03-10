import { RadioBox } from 'theme'
const RadioBoxConditional = ({state, setState}) => {
    return (
        <>
            {
                state.map(({name, label, value, checked}) => (
                    <RadioBox key={label} name={name} checked={checked} value={value} onChange={setState}>
                        {label}
                    </RadioBox>
                ))
            }
        </>
    )
}

export default RadioBoxConditional;