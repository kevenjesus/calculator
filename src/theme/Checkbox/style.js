import styled from 'styled-components'
import { colors } from 'theme/colors'
import CheckboxIcon from 'assets/icons/checkbox.svg'
import CheckboxCheckedIcon from 'assets/icons/checkbox-checked.svg'

export const LabelContainer = styled.label`
    display: flex;
    align-items: center;
    height: 30px;
` 

export const Text = styled.span`
    font-size: 15px;
    font-weight: ${({checked}) => checked ? 600 : 400};
    color: ${({checked}) => checked ? colors.primary : colors.blacks.normal};
    margin-left: 5px;
` 

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  width: 1px;
`

export const Label = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url(${({checked}) => checked ? CheckboxCheckedIcon : CheckboxIcon});
  background-position: center center;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-top: -5px;
  content: '';
  top: 50%;
  right: 0;
  transition: 0.2s;
`