import { ButtonComponent } from './style'

const Button = ({children, variant = 'primary'}) => {
    return (
        <ButtonComponent variant={variant}>
            {children}
        </ButtonComponent>
    )
}

export default Button;