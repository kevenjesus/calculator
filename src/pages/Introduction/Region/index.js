import {  Row, Col } from 'react-flexbox-grid'
import Conditional from 'components/Conditional'
import { Headline, Text } from 'pages/Introduction/style'
import RadioBoxConditional from 'components/RadioBoxConditional'


const Region = ({knowRegion, regionList, stateList, state, country, counties, handleRegion, handleState, handleCountry}) => {
    return (
        <>
            <Headline>Região</Headline>
            <Text>
                As regiões apresentam diferentes características populacionais (tamanho, densidade, origem) e ambientais (cor e turbidez dos rios)
            </Text>
            <div style={{textAlign: 'center'}}>
                <label>Você sabe a localização do garimpo?</label>
                <RadioBoxConditional state={regionList} setState={handleRegion} />
            </div>
            <Conditional check={knowRegion}>
                <Row center="sm">
                    <Col sm={8} md={6}>
                        <Row>
                            <Col xs={12} sm={6}>
                                <label style={{textAlign: 'left'}}>Região</label>
                                <select name="state" value={state} onChange={handleState}>
                                {
                                    stateList.map(({sigla, id}) => (
                                        <option key={id} value={id}>{sigla}</option>
                                    ))
                                }
                                </select>
                            </Col>
                            <Col xs={12} sm={6}>
                                <label style={{textAlign: 'left'}}>Municipio</label>
                                <select name="state" value={country} onChange={handleCountry}>
                                    {
                                        counties.map(({nome, id}) => (
                                            <option key={id} value={id}>{nome}</option>
                                        ))
                                    }
                                </select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Conditional>
        </>
    )
}

export default Region;