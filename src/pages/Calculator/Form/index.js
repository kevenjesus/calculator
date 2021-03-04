import React, { useState } from 'react'
import { Button, Checkbox, RadioBox } from 'theme'

const Form = () => {
    const [checked, setChecked] = useState(false)
    const handle = (e) => {
        console.log(e.target.value);
        setChecked(!checked)
    }
    return (
        <>
            <h1>Form..</h1>
            <Button variant="primary">entrar</Button>
            <Checkbox checked={checked} value="1" onChange={handle}>
                Usar
            </Checkbox>

            <RadioBox name="opcao" value="1">
                Opção 1
            </RadioBox>
            <RadioBox name="opcao" value="2" checked>
                Opção 2
            </RadioBox>
            <RadioBox name="opcao" value="3">
                Opção 3
            </RadioBox>
        </>
    )
}

export default Form;