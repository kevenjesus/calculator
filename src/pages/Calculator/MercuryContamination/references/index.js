import { Container, Headline, Table, Tbody, Td, Text, Th, Thead, Tr } from 'pages/Calculator/ImpactsStyles'
import { Go } from 'pages/Introduction/style'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'theme'
import { ReactComponent as GoBack } from 'assets/icons/goBack.svg'
import { useContext } from 'react'
import { AppContext } from 'utils/AppContext'
const MercuryReferences = () => {
    const {state} = useContext(AppContext)
    const {language} = state
    const {hypothesesReferences} = language
    const history = useHistory();
    window.scrollTo(0,0)
    return (
        <div style={{padding: '0 15px'}}>
        <Container>
            <Go onClick={() => history.push('/impacts/mercury-contamination')}>
                    <GoBack />
                    <span>{language.comeBack}</span>
                </Go>
            <Headline>{hypothesesReferences.mercury.headline}</Headline>
            <Text><strong> &raquo; {hypothesesReferences.mercury.loss_QI}</strong></Text>
            
            <Table>
                <Thead>
                    <Tr>
                        <Th>{language.hypotheses}</Th>
                        <Th>{language.references}</Th> 
                    </Tr>                   
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Text>
                            {hypothesesReferences.mercury.loss_QI_hypotheses_line1}
                            </Text>
                            <Text>
                            {hypothesesReferences.mercury.loss_QI_hypotheses_line2}
                            </Text>
                            <Text>
                            {hypothesesReferences.mercury.loss_QI_hypotheses_line3}
                            </Text>
                            <Text>
                            {hypothesesReferences.mercury.loss_QI_hypotheses_line4}
                            </Text>
                            <Text>
                            {hypothesesReferences.mercury.loss_QI_hypotheses_line5}
                            </Text>
                            <Text>
                            {hypothesesReferences.mercury.loss_QI_hypotheses_line6}
                            </Text>
                            <Text>
                            {hypothesesReferences.mercury.loss_QI_hypotheses_line7}
                            </Text>
                        </Td>
                        <Td>
                            <Text>{hypothesesReferences.mercury.loss_QI_ref_line1}</Text>
                            <Text>{hypothesesReferences.mercury.loss_QI_ref_line2}</Text>
                            <Text>{hypothesesReferences.mercury.loss_QI_ref_line3}</Text>
                            <Text>{hypothesesReferences.mercury.loss_QI_ref_line4}</Text>
                            <Text>{hypothesesReferences.mercury.loss_QI_ref_line5}</Text>
                            <Text>{hypothesesReferences.mercury.loss_QI_ref_line6}</Text>
                            <Text>{hypothesesReferences.mercury.loss_QI_ref_line7}</Text>
                            <Text>{hypothesesReferences.mercury.loss_QI_ref_line8}</Text>
                            <Text>{hypothesesReferences.mercury.loss_QI_ref_line9}</Text>
                            <Text>{hypothesesReferences.mercury.loss_QI_ref_line10}</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Text>
                <strong>* {language.observation}</strong>
            </Text>
            <Text>
            {hypothesesReferences.mercury.loss_QI_comments_line1} 
            </Text>
            <Text>
            {hypothesesReferences.mercury.loss_QI_comments_line2} 
            </Text>

            <br />
            <hr />
            <br />

            <Text><strong> &raquo; {hypothesesReferences.mercury.neuropsychological_symptoms_in_garimpeiros} </strong></Text>
            <Table>
                <Thead>
                    <Tr>
                        <Th>{language.hypotheses}</Th>
                        <Th>{language.references}</Th> 
                    </Tr>                   
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Text>
                            {hypothesesReferences.mercury.neuroSymptoms_hypotheses_line1}
                            </Text>
                            <Text>
                            {hypothesesReferences.mercury.neuroSymptoms_hypotheses_line2}
                            </Text>
                            <Text>
                            {hypothesesReferences.mercury.neuroSymptoms_hypotheses_line3}
                            </Text>
                        </Td>
                        <Td>
                            <Text>{hypothesesReferences.mercury.neuroSymptoms_ref_line1}</Text>
                            <Text>{hypothesesReferences.mercury.neuroSymptoms_ref_line2}</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Text>
                <strong>* {language.observation}</strong>
            </Text>
            <Text>
            {hypothesesReferences.mercury.neuroSymptoms_comments_line1}
            </Text>
            <Text>
            {hypothesesReferences.mercury.neuroSymptoms_comments_line2}
            </Text>
            <br />
            <hr />
            <br />
            <Text><strong> &raquo; {hypothesesReferences.mercury.soil_mercury_remediation}</strong></Text>
            <Table>
                <Thead>
                    <Tr>
                        <Th>{language.hypotheses}</Th>
                        <Th>{language.references}</Th> 
                    </Tr>                   
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Text>
                            {hypothesesReferences.mercury.soil_mercury_hypotheses_line1}
                            </Text>
                            <Text>
                            {hypothesesReferences.mercury.soil_mercury_hypotheses_line2}
                            </Text>
                        </Td>
                        <Td>
                            <Text>{hypothesesReferences.mercury.soil_mercury_ref_line1}</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Text>
                <strong>* {language.observation}</strong>
            </Text>
            <Text>
            {hypothesesReferences.mercury.soil_mercury_comments_line1}
            </Text>
            <Text>
            {hypothesesReferences.mercury.soil_mercury_comments_line2}
            </Text>




            <Link to='/impacts/mercury-contamination'>
                <Button style={{width: 200}}>{language.comeBack}</Button>
            </Link>
        </Container>
        </div>
    )
}

export default MercuryReferences;