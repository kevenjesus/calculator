import { Container, Headline, Table, Tbody, Td, Text, Th, Thead, Tr } from 'pages/Calculator/ImpactsStyles'
import { Go } from 'pages/Introduction/style'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'theme'
import { ReactComponent as GoBack } from 'assets/icons/goBack.svg'
const DeforestationReferences = () => {
    const history = useHistory();
    window.scrollTo(0,0)
    return (
        <div style={{padding: '0 15px'}}>
        <Container>
            <Go onClick={() => history.push('/impacts/deforestation')}>
                    <GoBack />
                    <span>Voltar</span>
                </Go>
            <Headline>Desmatamento / Hipoteses e referenias </Headline>
            <Text><strong> &raquo; Bioprospecção</strong></Text>
            
            <Table>
                <Thead>
                    <Tr>
                        <Th style={{width: '100%'}}>Referências</Th> 
                    </Tr>                   
                </Thead>
                <Tbody>
                    <Tr>
                        <Td style={{borderLeft: 0, width: '100%'}}>
                            <Text>Andersen (1997)</Text>
                            <Text>May et al (2013)</Text>
                            <Text>Groot et al (2012)</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
           

            <br />
            <hr />
            <br />

            <Text><strong> &raquo; Carbono</strong></Text>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Hipóteses</Th>
                        <Th>Referências</Th> 
                    </Tr>                   
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Text>
                            Estoque de carbono por hectare na amâzônia de 347 tCO2/ha
                            </Text>
                        </Td>
                        <Td style={{borderLeft: 0}}>
                            <Text>World Bank (2020)</Text>
                            <Text>Fearnside (2018)</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            
            <br />
            <hr />
            <br />
            <Text><strong> &raquo; Produtos não-madeireiros e madeireiros</strong></Text>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Hipóteses</Th>
                        <Th>Referências</Th> 
                    </Tr>                   
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Text>
                            Valor dos produtos madeireiros foi obtido em estudos de concessão florestal na Amazônia. 
                            </Text>
                            <Text>
                            Valor dos produtos não madeireiros foi obtida a partir do consórcio de café, cacau, guaraná, açaí e banana
                            </Text>
                        </Td>
                        <Td style={{borderLeft: 0}}>
                            <Text>Rodrigues (2016)</Text>
                            <Text>CSF (2019)</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>


            <br />
            <hr />
            <br />
            <Text><strong> &raquo; Recreação / Cultural / Espécies</strong></Text>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Hipóteses</Th>
                        <Th>Referências</Th> 
                    </Tr>                   
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Text>
                            Meta-análise que os valores variam em função da densidade demográfica, do PIB per capita e da riqueza de espécies
                            </Text>
                        </Td>
                        <Td style={{borderLeft: 0}}>
                            <Text>Siikamaki et al (2015)</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>


            <Text>
                <strong>* Observações</strong>
            </Text>
            <Text>
            A perda da floresta em pé pode ser mensurada a partir do custo de oportunidade, ou seja, observa-se na literatura qual a rentabilidade média por hectare para as diferentes atividades foram excluídas com o desmatamento. 
 
            </Text>
            <Text>
            Todos estes valores são perdidos integralmente com o garimpo, podendo ser recuperados anualmente. Assume-se a hipótese de que tais atividades retomarão 80% do que eram em 30 anos. 

            </Text>

            <br />
            <hr />
            <br />
            <Text><strong> &raquo; Recuperação da camada superficial do solo</strong></Text>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Hipóteses</Th>
                        <Th>Referências</Th> 
                    </Tr>                   
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <Text>
                            A recuperação da camada superficial do solo tem como diferentes técnicas aplicadas como, por exemplo, a aplicação de semeadura direta. 
                            </Text>
                            <Text>
                            O impacto do desmatamento causado pelo garimpo pode gerar uma extensão até 12 vezes maior para construção de pistas de pouso, estradas, etc.
                            </Text>
                            <Text>
                            Assume-se hipótese de que tal recuperação é realizada em 1 ano.
                            </Text>
                            <Text>
                            Considera-se o custo de frete de mudas a partir da distância média dos pontos de garimpo nos municípios (RAISG e IBAMA) e a localização de centros urbanos.
                            </Text>
                        </Td>
                        <Td style={{borderLeft: 0}}>
                            <Text>IBAMA (2019)</Text>
                            <Text>Sonter et al (2017)</Text>
                            <Text>RAISG – Rede Amazônica de informação Socioambiental</Text>
                            <Text>IBGE (2015)</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>

            <Text>
                <strong>* Observações</strong>
            </Text>
            <Text>
             Um dos primeiros impactos do garimpo é a perda de cobertura florestal na camada superficial que posteriormente precisa ser recuperada.
            </Text>


            <Link to='/impacts/deforestation'>
                <Button style={{width: 200}}>Voltar</Button>
            </Link>
        </Container>
        </div>
    )
}

export default DeforestationReferences;