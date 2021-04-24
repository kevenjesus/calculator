import { Container, Headline, Table, Tbody, Td, Text, Th, Thead, Tr } from 'pages/Calculator/ImpactsStyles'
import { Go } from 'pages/Introduction/style'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'theme'
import { ReactComponent as GoBack } from 'assets/icons/goBack.svg'
const MercuryReferences = () => {
    const history = useHistory();
   
    return (
        <div style={{padding: '0 15px'}}>
        <Container>
            <Go onClick={() => history.push('/impacts/mercury-contamination')}>
                    <GoBack />
                    <span>Voltar</span>
                </Go>
            <Headline>Impactos do mercurio / Hipoteses e referenias </Headline>
            <Text><strong> &raquo; Erosão – Assoreamentos</strong></Text>
            
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
                                2,6 kg de mercúrio usado para a extração de 1 kg de ouro
                            </Text>
                            <Text>
                                Proporção de mercúrio liberado e emitido em água e sedimentos 12% até 22 %.
                            </Text>
                            <Text>
                                Proporção de mercúrio que sofre transformação em metilmercúrio (metilação), segundo a literatura, varia de 3% e 22%.
                            </Text>
                            <Text>
                                A ingestão média diária de mercúrio é calculada a partir do peso médio dos indivíduos, do nível de consumo médio de peixes por dia diferenciando pelo tipo de população (urbana e rural obtida pelo IBGE).
                            </Text>
                            <Text>
                                Assume-se que o impacto do metilmercúrio na água pode ocorrer até 50 anos
                            </Text>
                            <Text>
                                Cada 1,0 μg/g de mercúrio (MeHg) no cabelo da mãe corresponde a perda de 0,18 pontos de QI no feto.
                            </Text>
                            <Text>
                                Impacto cardiovascular se dividem em infarto do miocárdio e hipertensão, tendo tanto custo de tratamento quanto dias vividos com incapacidade (DALY)
                            </Text>
                        </Td>
                        <Td style={{borderLeft: 0}}>
                            <Text>Castilhos & Domingos (2018)</Text>
                            <Text>Vasconcellos (2015)</Text>
                            <Text>Lopez & Cólon, 2010</Text>
                            <Text>Lino et al, 2019</Text>
                            <Text>Codex Alimentarius (1995)</Text>
                            <Text>Hacon et al, (2020)</Text>
                            <Text>Fiocruz, 2020</Text>
                            <Text>Bisinoti e Jardim, (2004)</Text>
                            <Text>Salonen et al (1995)</Text>
                            <Text>Hu et al (2018)</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Text>
                <strong>* Observações</strong>
            </Text>
            <Text>
                A utilização de mercúrio pelo garimpo faz com que sejam contaminados solos, ar e água, causando problemas à saúde humana.   
            </Text>
            <Text>
                Uma das formas de quantificar o impacto é pelos problemas de saúde gerados pela contaminação da água e aumento do risco de doenças relacionadas à ingestão de peixes.
            </Text>

            <br />
            <hr />
            <br />

            <Text><strong> &raquo; Sintomas neuropsicológicos em garimpeiros</strong></Text>
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
                                Hipótese de que um garimpeiro, em média, extrai 150 gramas de ouro no ano.
                            </Text>
                            <Text>
                                Probabilidade/proporção de garimpeiros com sintomas neuropsicológicos de 72%
                            </Text>
                            <Text>
                                Os sintomas neuropsicológicos são avaliados tanto pelo custo de tratamento destes sintomas, como pela perda de bem-estar gerada ao viver com tal incapacidade (DALY).
                            </Text>
                        </Td>
                        <Td style={{borderLeft: 0}}>
                            <Text>Steckling et al (2014)</Text>
                            <Text>Steckling et al (2019)</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Text>
                <strong>* Observações</strong>
            </Text>
            <Text>
                Hipótese de que um garimpeiro, em média, extrai 150 gramas de ouro no ano. 
            </Text>
            <Text>
                Probabilidade/proporção de garimpeiros com sintomas neuropsicológicos de 72%
            </Text>
            <br />
            <hr />
            <br />
            <Text><strong> &raquo; Remediação de mercúrio no solo</strong></Text>
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
                                Assume-se que a biorremediação, a partir do plantio de mudas de espécies capazes de absorver o mercúrio no solo, seria a alternativa mais aplicável ao contexto amazônico para remediar o impacto do garimpo.
                            </Text>
                            <Text>
                                Hipótese de concentração média de mercúrio nos solos de 0,24 gramas de ouro por tonelada de sedimento.
                            </Text>
                        </Td>
                        <Td style={{borderLeft: 0}}>
                            <Text>Miranda (2019) Kahhat et al (2019)</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Text>
                <strong>* Observações</strong>
            </Text>
            <Text>
                Assume-se que a biorremediação, a partir do plantio de mudas de espécies capazes de absorver o mercúrio no solo, seria a alternativa mais aplicável ao contexto amazônico para remediar o impacto do garimpo. 
            </Text>
            <Text>
                Hipótese de concentração média de mercúrio nos solos de 0,24 gramas de ouro por tonelada de sedimento.
            </Text>




            <Link to='/impacts/mercury-contamination'>
                <Button style={{width: 200}}>Voltar</Button>
            </Link>
        </Container>
        </div>
    )
}

export default MercuryReferences;