import { useState } from 'react'
import { Headline, Text } from 'pages/Introduction/style'
import ImageExample from 'assets/images/example2.svg'
import { Row, Col } from 'react-flexbox-grid';

const dataPitDepth = [
    {
        label: '2,5 metros',
        value: 2.5
    },
    {
        label: '5 metros',
        value: 5
    },
    {
        label: '7,5 metros',
        value: 7.5
    },
    {
        label: '10 metros',
        value: 10
    },
    {
        label: '12,5 metros',
        value: 12.5
    },
    {
        label: '15 metros',
        value: 15
    },
    {
        label: '17,5 metros',
        value: 17.5
    },
    {
        label: '20 metros',
        value: 20
    },
]

const PitDepth = () => {
    const [pitDepth, setPitDepth] = useState(2.5);

    const handlePitDepth = (e) => {
        const { value } = e.target;
        setPitDepth(Number(value));
    }
    return (
        <>
            <Headline>Profundidade da cava</Headline>
            <Text>
                Qual é a profundidade média das cavas (valas) do garimpo em questão?            
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