import { Container, Headline, Table, Tbody, Td, Text, Th, Thead, Tr } from 'pages/Calculator/ImpactsStyles'
import { Go } from 'pages/Introduction/style'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'theme'
import { ReactComponent as GoBack } from 'assets/icons/goBack.svg'
import { useContext } from 'react'
import { AppContext } from 'utils/AppContext'
import Header from 'layout/Header'
const SiltingRiversReferences = () => {
    const {state} = useContext(AppContext)
    const {language} = state
    const {hypothesesReferences} = language
    const history = useHistory();
    window.scrollTo(0,0)
    return (
        <>
        <Header />
        <div style={{padding: '0 15px'}}>
        <Container>
            <Go onClick={() => history.push('/impacts/silting-of-rivers')}>
                    <GoBack />
                    <span>{language.comeBack}</span>
                </Go>
            <Headline>{hypothesesReferences.siltingOfRivers.headline}</Headline>
            <Text><strong> &raquo; {hypothesesReferences.siltingOfRivers.erosion_Silting}</strong></Text>
            
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
                            {hypothesesReferences.siltingOfRivers.erosion_Silting_hypotheses_line1}
                            </Text>
                            <Text>
                            {hypothesesReferences.siltingOfRivers.erosion_Silting_hypotheses_line2}
                            </Text>
                        </Td>
                        <Td>
                            <Text>{hypothesesReferences.siltingOfRivers.erosion_Silting_ref_line1}</Text>
                            <Text>{hypothesesReferences.siltingOfRivers.erosion_Silting_ref_line2}</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Text>
                <strong>* {language.observation}</strong>
            </Text>
            <Text>
            {hypothesesReferences.siltingOfRivers.erosion_Silting_comments}  
            </Text>

            <br />
            <hr />
            <br />

            <Text><strong> &raquo; {hypothesesReferences.siltingOfRivers.dredging_sediments_in_the_river} </strong></Text>
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
                            {hypothesesReferences.siltingOfRivers.dredging_hypotheses_line1}
                            </Text>
                        </Td>
                        <Td>
                            <Text>{hypothesesReferences.siltingOfRivers.dredging_ref_line1}</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            
            <br />
            <hr />
            <br />
            <Text><strong> &raquo; {hypothesesReferences.siltingOfRivers.soil_stabilization}</strong></Text>
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
                            {hypothesesReferences.siltingOfRivers.soil_stabilization_hypotheses_line1}
                            </Text>
                            <Text>
                            {hypothesesReferences.siltingOfRivers.soil_stabilization_hypotheses_line2}
                            </Text>
                            <Text>
                            {hypothesesReferences.siltingOfRivers.soil_stabilization_hypotheses_line3}
                            </Text>
                        </Td>
                        <Td>
                            <Text>{hypothesesReferences.siltingOfRivers.soil_stabilization_ref_line1}</Text>
                            <Text>{hypothesesReferences.siltingOfRivers.soil_stabilization_ref_line2}</Text>
                            <Text>{hypothesesReferences.siltingOfRivers.soil_stabilization_ref_line3}</Text>
                            <Text>{hypothesesReferences.siltingOfRivers.soil_stabilization_ref_line4}</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Text>
                <strong>* {language.observation}</strong>
            </Text>
            <Text>
            {hypothesesReferences.siltingOfRivers.soil_stabilization_dredging_sediments_comments_line1}
            </Text>
            <Text>
            {hypothesesReferences.siltingOfRivers.soil_stabilization_dredging_sediments_comments_line2}
            </Text>




            <Link to='/impacts/silting-of-rivers'>
                <Button style={{width: 200}}>{language.comeBack}</Button>
            </Link>
        </Container>
        </div>
        </>
    )
}

export default SiltingRiversReferences;