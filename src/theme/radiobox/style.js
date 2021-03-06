import styled from 'styled-components'
import { colors } from 'theme/colors'
import RadioBoxIcon from 'assets/icons/radio.svg'
import radioBoxChecked from 'assets/icons/radio-checked.svg'

export const LabelContainer = styled.label`
    display: inline-block;
    height: 40px;
    margin: 0 20px 15px 0;
    @media (min-width: 768px) {
      margin: 8px 20px 0 0;
    }
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

export const HiddenCheckbox = styled.input.attrs({ type: 'radio' })`
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
  background-image: url(${({checked}) => checked ? radioBoxChecked : RadioBoxIcon});
  background-position: center center;
  background-repeat: no-repeat
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