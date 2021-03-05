import { Container, Header, Headline, Text } from './style'
import { ReactComponent as Warning } from 'assets/icons/warning.svg'

const Alert = ({children}) => {
    return (
        <Container>
            <Header>
                <Warning />
                <Headline>Atenção</Headline>
            </Header>
            <Text>{children}</Text>
        </Container>
    )
}

export default Alert;
