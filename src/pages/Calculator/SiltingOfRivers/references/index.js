import { Container, Headline, Table, Tbody, Td, Text, Th, Thead, Tr } from 'pages/Calculator/ImpactsStyles'
import { Go } from 'pages/Introduction/style'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'theme'
import { ReactComponent as GoBack } from 'assets/icons/goBack.svg'
const SiltingRiversReferences = () => {
    const history = useHistory();
    window.scrollTo(0,0)
    return (
        <div style={{padding: '0 15px'}}>
        <Container>
            <Go onClick={() => history.push('/impacts/silting-of-rivers')}>
                    <GoBack />
                    <span>Voltar</span>
                </Go>
            <Headline>Assoreamento dos rios / Hipoteses e referências </Headline>
            <Text><strong> &raquo; Erosão – Assoreamento</strong></Text>
            
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
                            Estudos demonstram qual a importância monetária do controle de erosão por hectare que foi perdido com o garimpo.
                            </Text>
                            <Text>
                            Tais valores são perdidos integralmente com o garimpo, podendo ser recuperados anualmente. Assume-se a hipótese de que tais atividades retomarão 80% do que eram em 30 anos.
                            </Text>
                        </Td>
                        <Td style={{borderLeft: 0}}>
                            <Text>De Groot et al (2012)</Text>
                            <Text>Constanza et al (1997)</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Text>
                <strong>* Observações</strong>
            </Text>
            <Text>
            A presença do garimpo pode causar impactos significativos na camada profunda do solo, afetando serviços ecossistêmicos como a controle de erosão.  
            </Text>

            <br />
            <hr />
            <br />

            <Text><strong> &raquo; Dragagem de sedimentos no rio</strong></Text>
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
                                Assume-se que 15% do sedimento movimentado pelo garimpo de aluvião é direcionado aos rios e precisam ser dragados. Utiliza-se como referência estudo que calcula o custo para uma draga de sucção entre 8” à 12” (polegadas)
                            </Text>
                        </Td>
                        <Td style={{borderLeft: 0}}>
                            <Text>Costa (2016)</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            
            <br />
            <hr />
            <br />
            <Text><strong> &raquo; Estabilização de solo</strong></Text>
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
                            A camada profunda de solo é dividida em camada fértil (40 cm) e o restante como terra que possuem custos de transporte diferentes para o aterramento.
                            </Text>
                            <Text>
                            Uma retroescavadeira tem a capacidade de mobilizar 160 m3 por hora
                            </Text>
                            <Text>
                            Uma draga tem a capacidade de movimentar 300 m3 por hora
                            </Text>
                        </Td>
                        <Td style={{borderLeft: 0}}>
                            <Text>CID PUCESE (2011)</Text>
                            <Text>Tonietto & Silva, (2011)</Text>
                            <Text>Polícia Federal (2018)</Text>
                            <Text>Cardoso, (2002)</Text>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            <Text>
                <strong>* Observações</strong>
            </Text>
            <Text>
                Assume-se hipótese de que tal recuperação é realizada em 1 ano.
            </Text>
            <Text>
                A revisão de literatura sobre produtividades médias de garimpo foram realizadas para o cálculo do sedimento médio movimentado. 
            </Text>




            <Link to='/impacts/silting-of-rivers'>
                <Button style={{width: 200}}>Voltar</Button>
            </Link>
        </Container>
        </div>
    )
}

export default SiltingRiversReferences;