import { useContext, useCallback } from 'react'
import { Headline, Text } from 'pages/Introduction/style'
import ImageExample from 'assets/images/example2.svg'
import { Row, Col } from 'react-flexbox-grid';
import { AppContext, stateTypes } from 'utils/AppContext';

const PitDepth = () => {
    const { state, dispatch } = useContext(AppContext);
    const { calculator, language } = state;
    const { pitDepth } = calculator;
    const { calculatorForm, introduction } = language
    
    const dataPitDepth = [
        {
            label: '2,5 '+calculatorForm.values.pitDepth.meters+'',
            value: 2.5
        },
        {
            label: '5 '+calculatorForm.values.pitDepth.meters+'',
            value: 5
        },
        {
            label: '7,5 '+calculatorForm.values.pitDepth.meters+'',
            value: 7.5
        },
        {
            label: '10 '+calculatorForm.values.pitDepth.meters+'',
            value: 10
        },
        {
            label: '12,5 '+calculatorForm.values.pitDepth.meters+'',
            value: 12.5
        },
        {
            label: '15 '+calculatorForm.values.pitDepth.meters+'',
            value: 15
        },
        {
            label: '17,5 '+calculatorForm.values.pitDepth.meters+'',
            value: 17.5
        },
        {
            label: '20 '+calculatorForm.values.pitDepth.meters+'',
            value: 20
        },
    ]

    const handlePitDepth = useCallback((e) => {
        const { value } = e.target;
        dispatch({type: stateTypes.SET_PITDEPTH, payload: Number(value)})
    }, [dispatch]);
    return (
        <>
            <Headline>{introduction.pitDepth.headline}</Headline>
            <Text>
                {introduction.pitDepth.paragraphy_01}           
            </Text>
            
            <div>
                <img src={ImageExample} alt="" style={{display: 'block', margin: '30px auto 0 auto'}} />
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor
                </Text>
            </div>

            <Row center="sm">
                <Col sm={6} md={4}> 
                    <label>* Selecione a profundidade da cava</label>
                    <select name="pitdepth" value={pitDepth} onChange={handlePitDepth}>
                        {
                            dataPitDepth.map(({label, value}) => <option key={value} value={value}>{label}</option>)
                        }
                    </select>
                </Col>
            </Row>
        </>
    )
}

export default PitDepth;