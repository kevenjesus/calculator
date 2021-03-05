import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Text, Img, AjustDesktop } from './style'
import { ReactComponent as LoadingIcon } from 'assets/icons/loading-icon.svg'
import ImageLoading  from 'assets/images/image-loading.png'

const Loading = () => {
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            history.push('/impacts/deforestation')
        }, 2000);
    }, [history])
    return (
        <Container>
            <AjustDesktop>
            <LoadingIcon width="40" height="40" />
            <Text>Calculando impactos...</Text>
            </AjustDesktop>
            <Img src={ImageLoading} alt="" />
        </Container>
    )
}

export default Loading;