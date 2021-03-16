import { useContext, useCallback } from 'react'
import { Headline, Text } from 'pages/Introduction/style'
import { AppContext, stateTypes } from 'utils/AppContext'
import { YES } from 'pages/Calculator/Form/consts'
import ImgExample from 'assets/images/example2.svg'
import RadioBoxConditional from 'components/RadioBoxConditional'


const Overflow = () => {
    const {state, dispatch} = useContext(AppContext);
    const { calculator } = state;
    const { overflowList } = calculator

    const handleOverflow = useCallback((e) => {
        const { value } = e.target;
        const overflowListUpdate = overflowList.map(r => {
            r.checked = false;
            if(r.value === Number(value)) {
                r.checked = !r.checked
            }
            return r;
        })
        dispatch({type: stateTypes.SET_OVERFLOW_LIST, payload: overflowListUpdate})
        dispatch({type: stateTypes.SET_OVERFLOW, payload: Number(value) === YES})
    }, [dispatch, overflowList])

    return (
        <>
            <Headline>Transbordamento de desmatamento</Headline>
            <Text>
                O efeito de transbordamento sobre o desmatamento pode ser até 12x o tamanho da área desmatada para extração de ouro
            </Text>
            
            <img src={ImgExample} alt="" style={{display: 'block', margin: '20px auto'}} />
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
            </Text>
            <div style={{textAlign: 'center'}}>
                <label>Houve Transbordamento?</label>
                <RadioBoxConditional state={overflowList} setState={handleOverflow} />
            </div>
        </>
    )
}

export default Overflow;