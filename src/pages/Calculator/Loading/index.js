import {  useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Text } from './style'
import { ReactComponent as LoadingIcon } from 'assets/icons/loading-icon.svg'
import { AppContext } from 'utils/AppContext'
import { FERRY } from '../Form/consts'

const Loading = () => {
    const {state} = useContext(AppContext)
    const {calculator, language} = state
    const history = useHistory();
    useEffect(() => {
        sessionStorage.setItem('@Calculator/form', JSON.stringify(calculator))
        setTimeout(() => {
            if(calculator.valuatioMethod === FERRY) {
                history.push('/impacts/silting-of-rivers') 
            }else {
                history.push('/impacts/deforestation')
            }
        }, 2500);
    }, [history, calculator])
    return (
        <Container>
            <LoadingIcon width="40" height="40" style={{margin: '0 auto'}} />
            <Text>{language.loading.text}...</Text>
        </Container>
    )
}

export default Loading;