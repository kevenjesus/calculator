const ptBR = {
    header: {
        naming: 'calculadora',
        slogan: 'impactos do garimpo ilegal de ouro',
        linkWebsite: 'ir para o site'
    },
    calculatorForm: {
        commons: {
            yes: 'Sim',
            no: 'Não'
        },
        labels: {
            knowRegion: 'Você gostaria de aprender sobre os impactos gerais do garimpo de ouro ou dos impactos de um garimpo específico?',
            state: 'Região',
            country: 'Municipio',
            analysisUnit: 'Unidade de análise',
            pitDepth: 'Profundidade da cava',
            extractionType: 'Tipo de garimpo',
            valueHypothesis: 'Hipóteses de valores' ,
            btnCalulator: 'Calcular impactos'
        },
        values: {
            analysisUnit: {
                impactedArea: 'Tamanho da área impactada',
                amountOfGold: 'Quantidade de ouro'
            },
            qtdAnalysisUnit: {
                hactare: 'Hectares',
                grams: 'Gramas de ouro'
            },
            pitDepth: {
                meters: 'metros'
            },
            extractionType: {
                openPit: 'Aluvião (beira de rio)',
                boat: 'Balsa (flutuante)',
		        pitMine: 'Poço (subterrâneo)'
            },
            valueHypothesis: {
                conservative: 'Conservador (Valores médios)',
                precautionaryPrinciple: 'Princípio da precaução (Valores máximos)'            
            },
            txPrevalence: {
                minimum: 'Minimo',
                medium: 'Médio',
                maximum: 'Máximo'
            }
        }
    },
    loading: {
        text: 'Calculando impactos...'
    },
    impacts: {
        menu: {
            deforestation: 'desmatamento',
            siltingOfRivers: 'Assoreamento de rios',
            mercuryContamination: 'Contaminação por mercúrio',
            monetaryImpacts: 'impactos monetários'
        },
        deforestation: {
            headline: 'Desmatamento',
            paragraphy_01: 'A extração de 1000 kg de ouro gera o desmatamento de 5 hectares, em média.',
            paragraphy_02: 'O desmatamento de 5 hectares leva a perdas de oportunidade de realização de outras atividades sustentáveis, como concessões florestais e agroflorestas, além de serviços ecossistêmicos de regulação, como sequestro de carbono e controle de erosão'
        },
        siltingOfRivers: {
            headline: 'Assoreamento dos rios',
            paragraphy_01: 'A extraçã o de 1000 kg de ouro gera o assoreamento de 150 m³, em média',
            paragraphy_02: 'O assoreamento de 5 hectares leva a perdas de oportunidade de realização de outras atividades sustentáveis, como pesca e turismo.'
        },
        mercuryContamination: {
            headline: 'Contaminação por mercúrio'
        },
        monetaryImpacts: {
            headline: 'Impactos monetários',
            labels: {
                finalValue: 'Valor total monetário',
                typeText: 'Por',
                typeGold: 'gramas de ouro',
                typeHectare: 'hectares',
                impactCategories: 'Categorias de impacto',
                impactedsVisualization: 'Visualização de impactos',
                mobileImpactedsVisualization: 'É possivel apenas visualizar 4 impactos por vez no smartphone.'
            },
            values: {
                deforestation: 'Decapeamento / Desmatamento',
                mercuryImpacts: 'Impactos do mercurio',
                pitOpening: 'Escavação / Abertura de cava'
            }
        },
        buttons: {
            references: 'Referências',
            hypotheses: 'Hipóteses',
            next: 'Prosseguir',
            newCalculation: 'Fazer novo calculo',
            printReports: 'Imprimir relatório'
        }
    },
    introduction: {
        buttons: {
            skip: 'Pular introdução',
            next: 'Prosseguir',
            moreContextValue: 'Saiba mais (contexto e valor)'
        },
        about: {
            headline: 'Sobre',
            text: 'A calculadora de impactos é fruto de uma parceria entre CSF e MPF com o objetivo de tornar-se uma ferramenta analítica e pedagógica que descreve os <strong>impactos do garimpo ilegal de ouro</strong> e o passo-a-passo para sua mensuração.'
        },
        contextValue: {
            headline: 'Valor e contexto',
            paragraphy_01: 'A calculadora estima valores para cada um destes impactos. O conceito de “valor” se refere à importância social de uma variação na qualidade ambiental sobre o nível de bem-estar da população.',
            paragraphy_02: 'Por exemplo:',
            paragraphy_03: 'Com e sem poluição',
            paragraphy_04: 'Variação biofísica (ecossistema, peixes, clima)',
            paragraphy_05: 'Variação no bem-estar social',
            paragraphy_06: 'A importância da variação de um impacto depende do contexto em que ocorre. Quanto mais pessoas deixam de usar um recurso natural, maior será o valor de sua perda. Quanto mais escasso o recurso natural, maior o seu valor'
        },
        howUseCalculator: {
            headline: 'Como utilizar a calculadora',
            paragraphy_01: 'Precisamos que você inclua algumas informações sobre o contexto para que a calculadora possa estimar o valor dos impactos de forma mais precisa',
            paragraphy_02: 'Caso não tenha informações específicas, não tem problema, serão incluídos automaticamente valores médios de contexto e impacto e resultados e suas explicações serão gerados na sequencia.'
        },
        introduction: {
            headline: 'Introdução',
            paragraphy_01: 'O garimpo ilegal na Amazônia vem crescendo nos últimos anos, puxado pela alta do preço do ouro no mercado internacional.',
            paragraphy_02: 'A atividade gera impactos sobre:',
            impacts: [
                {
                    headline: 'Desmatamento',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at '
                },
                {
                    headline: 'Assoreamento dos rios',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at '
                },
                {
                    headline: 'Contaminação por mercurio',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at '
                }
            ],
            paragraphy_03: 'A calculadora estima valores para cada um desses impactos. Os valores dependem do contexto.'
        },
        pitDepth: {
            headline: 'Profundidade da cava',
            paragraphy_01: 'Qual é a profundidade média das cavas (valas) do garimpo em questão? ',
            paragraphy_02: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor'
        },
        region: {
            headline: 'Região',
            text: 'As regiões apresentam diferentes características populacionais (tamanho, densidade, origem) e ambientais (cor e turbidez dos rios)',
        },
        extractionType: {
            headline: 'Tipo de garimpo',
            values: [
                {
                    type: 'Aluvião',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor'
                },
                {
                    type: 'Balsa',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor'
                },
                {
                    type: 'Poço',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor'
                }
            ],
            text: 'caso não seja especificado o tipo, serão considerados os impactos do tipo de garimpo mais comum na Amazônia, o garimpo de aluvião'
        }
    }

};

export default ptBR;