import { ButtonComponent } from './style'

const Button = ({children, variant = 'primary', ...rest}) => {
    return (
        <ButtonComponent variant={variant} {...rest}>
            {children}
        </ButtonComponent>
    )
}

export default Button;