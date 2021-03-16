import { forwardRef, useEffect, useRef } from 'react' 
import { colors } from 'theme/colors'

const TextField = forwardRef((props, ref) => {
    const { error, label, ...rest} = props;
    const refInput = useRef();
    useEffect(() => {
        if(error) {
            refInput.current.focus();
        }
    }, [refInput, error])
    return (
        <>
            <label ref={ref} style={{color: error ? 'red' : colors.blacks.normal}}>{label}</label>
            <input {...rest} ref={refInput} style={{borderColor: error ? 'red' : colors.blacks.medium}} />
        </>
    )
})

export default TextField;