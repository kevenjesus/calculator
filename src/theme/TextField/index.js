import { useEffect, useState } from 'react' 
import { colors } from 'theme/colors'

const TextField = ({ error, label, ...rest }) => {
    const [focus, setFocus] = useState(false);
    useEffect(() => {
        if(error) {
            setFocus(true);
        }
    }, [error])
    console.log('error', error)
    return (
        <>
            <label style={{color: error ? 'red' : colors.blacks.normal}}>{label}</label>
            <input {...rest} autoFocus={focus} style={{borderColor: error ? 'red' : colors.blacks.medium}} />
        </>
    )
}

export default TextField;