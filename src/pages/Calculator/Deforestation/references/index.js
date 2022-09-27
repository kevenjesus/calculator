import { Container, Headline, Table, Tbody, Td, Text, Th, Thead, Tr } from 'pages/Calculator/ImpactsStyles'
import { Go } from 'pages/Introduction/style'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'theme'
import { ReactComponent as GoBack } from 'assets/icons/goBack.svg'
import { useContext } from 'react'
import { AppContext } from 'utils/AppContext'
const DeforestationReferences = () => {
    const {state} = useContext(AppContext)
    const {language} = state
    const {hypothesesReferences} = language
    const history = useHistory();
    window.scrollTo(0,0)
    return (
        <div style={{padding: '0 15px'}}>
        <Container>
            <Go onClick={() => history.push('/impacts/deforestation')}>
                    <GoBack />
                    <span>{language.comeBack}</span>
                </Go>
            <Headline>{hypothesesReferences.deforestation.headline}</Headline>
            <Text><strong> &raquo; {hypothesesReferences.deforestation.bioprospecting}</strong></Text>
            
            <Table>
                <Thead>
                    <Tr>
                        <Th style={{width: '100%'}}>{language.references}</Th> 
                    </Tr>                   
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Text>{hypothesesReferences.deforestation.bio_ref_line1}</Text>
                            <Text>{hypothesesReferences.deforestation.bio_ref_line2}</Text>
                            <Text>{hypothesesReferences.deforestation.bio_ref_line3}</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
           

            <br />
            <hr />
            <br />

            <Text><strong> &raquo; {hypothesesReferences.deforestation.carbon}</strong></Text>
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
                            {hypothesesReferences.deforestation.carbon_hypotheses}
                            </Text>
                        </Td>
                        <Td>
                            <Text>{hypothesesReferences.deforestation.carbon_ref_line1}</Text>
                            <Text>{hypothesesReferences.deforestation.carbon_ref_line2}</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            
            <br />
            <hr />
            <br />
            <Text><strong> &raquo; {hypothesesReferences.deforestation.woodNonwoodProducts}</strong></Text>
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
                            {hypothesesReferences.deforestation.woodNonwoodProducts_hypotheses_line1} 
                            </Text>
                            <Text>
                            {hypothesesReferences.deforestation.woodNonwoodProducts_hypotheses_line2} 
                            </Text>
                        </Td>
                        <Td>
                            <Text>{hypothesesReferences.deforestation.woodNonwoodProducts_ref_line1}</Text>
                            <Text>{hypothesesReferences.deforestation.woodNonwoodProducts_ref_line2}</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>


            <br />
            <hr />
            <br />
            <Text><strong> &raquo; {hypothesesReferences.deforestation.recreation_culture_species}</strong></Text>
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
                            {hypothesesReferences.deforestation.recreation_culture_species_hypotheses}
                            </Text>
                        </Td>
                        <Td>
                            <Text>{hypothesesReferences.deforestation.recreation_culture_species_ref}</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>


            <Text>
                <strong>* {language.observation}</strong>
            </Text>
            <Text>
                {hypothesesReferences.deforestation.recreation_culture_comments_line1} 
            </Text>
            <Text>
                {hypothesesReferences.deforestation.recreation_culture_comments_line2} 
            </Text>

            <br />
            <hr />
            <br />
            <Text><strong> &raquo; {hypothesesReferences.deforestation.superficialSoilRecovery}</strong></Text>
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
                                {hypothesesReferences.deforestation.superficialSoilRecovery_hypotheses_line1}
                            </Text>
                            <Text>
                                {hypothesesReferences.deforestation.superficialSoilRecovery_hypotheses_line2}
                            </Text>
                            <Text>
                                {hypothesesReferences.deforestation.superficialSoilRecovery_hypotheses_line3}
                            </Text>
                            <Text>
                                {hypothesesReferences.deforestation.superficialSoilRecovery_hypotheses_line4}
                            </Text>
                        </Td>
                        <Td>
                            <Text>{hypothesesReferences.deforestation.superficialSoilRecovery_ref_line1}</Text>
                            <Text>{hypothesesReferences.deforestation.superficialSoilRecovery_ref_line2}</Text>
                            <Text>{hypothesesReferences.deforestation.superficialSoilRecovery_ref_line3}</Text>
                            <Text>{hypothesesReferences.deforestation.superficialSoilRecovery_ref_line4}</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>

            <Text>
                <strong>* {language.observation}</strong>
            </Text>
            <Text>
                {hypothesesReferences.deforestation.superficialSoilRecovery_comments}
            </Text>


            <Link to='/impacts/deforestation'>
                <Button style={{width: 200}}>{language.comeBack}</Button>
            </Link>
        </Container>
        </div>
    )
}

export default DeforestationReferences;