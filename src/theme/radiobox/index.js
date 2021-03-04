import { Label, CheckboxContainer, HiddenCheckbox, StyledCheckbox, LabelContainer, Text } from './style'

const RadioBox = ({children, checked = false, ...rest}) => {
    return (
        <LabelContainer>
            <CheckboxContainer>
                <HiddenCheckbox checked={checked} {...rest} />
                <Label htmlFor={HiddenCheckbox} checked={checked} />
                <StyledCheckbox checked={checked} />
            </CheckboxContainer>
            <Text checked={checked}>{children}</Text>
        </LabelContainer>
    )
}

export default RadioBox;