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
            knowRegion: 'Você gostaria de avaliar os impactos gerais do garimpo de ouro ou dos impactos de um garimpo específico?',
            state: 'Estado',
            country: 'Municipio',
            analysisUnit: 'Unidade de análise',
            pitDepth: 'Profundidade da cava',
            extractionType: 'Tipo de garimpo',
            valueHypothesis: 'Hipóteses de valores' ,
            btnCalulator: 'Calcular impactos'
        },
        values: {
            knowRegion: {
                yes: 'Impactos Específicos',
                no: 'Impactos Gerais Médios'
            },
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
            deforestation: 'Desmatamento',
            siltingOfRivers: 'Assoreamento de rios',
            mercuryContamination: 'Contaminação por mercúrio',
            monetaryImpacts: 'Impactos Monetários'
        },
        deforestation: {
            headline: 'Desmatamento',
            paragraphy_01: 'A extração de 1 kg de ouro gera o desmatamento de 14 hectares, em média.',
            paragraphy_02: 'O desmatamento destes 14 hectares leva a perdas de oportunidade de realização de outras atividades, como extração de produtos florestais não-madeireiros, uso recreativo, cultural, e da manutenção de serviços ecossistêmicos de regulação do clima e de controle de erosão'
        },
        siltingOfRivers: {
            headline: 'Assoreamento dos rios',
            paragraphy_01: 'A extraçã o de 1 kg de ouro gera erosão e assoreamento de 150 m³ de solo, em média',
            paragraphy_02: 'O assoreamento destes 150 m³ leva a perdas de oportunidade de realização de outras atividades nos rios, como o uso da água para beber, pesca e turismo.'
        },
        mercuryContamination: {
            headline: 'Contaminação por mercúrio',
            paragraphy_01: 'A extraçã o de 1 kg de ouro utiliza 2,6kg de mercúrio, dos quais 13% são despejados nos rios. Destes, 3% são metilados, se tornando ainda mais tóxicos e sendo absorvidos por peixes, que podem migrar por até 2000km, contaminando as pessoas que se alimentam deles. De modo conservador, consideramos que o raio de dispersão do mercúrio é de 100km.',
            paragraphy_02: 'Dependendo do nível de consumo de peixes, um indivíduo terá um aumento médio do nível de mercúrio entre 4ug/g e 15ug/g, levando a problemas neuropsicológicos, cognitivos e cardíacos.'
        },
        monetaryImpacts: {
            headline: 'Impactos monetários',
            labels: {
                finalValue: 'Valor total monetário',
                typeText: 'por',
                typeGold: 'gramas de ouro',
                typeHectare: 'hectares',
                impactCategories: 'Categorias de impacto',
                impactedsVisualization: 'Visualização de impactos',
                mobileImpactedsVisualization: 'É possivel apenas visualizar 4 impactos por vez no smartphone.'
            },
            values: {
                deforestation: 'Desmatamento',
                mercuryImpacts: 'Impactos do mercurio',
                pitOpening: 'Escavação / Abertura de cava'
            }
        },
        buttons: {
            references: 'Hipóteses e Referências',
            next: 'Prosseguir',
            newCalculation: 'Fazer novo calculo',
            printReports: 'Imprimir relatório'
        }
    },
    introduction: {
        buttons: {
            skip: 'Pular introdução',
            next: 'Prosseguir',
            moreContextValue: 'Saiba mais'
        },
        about: {
            headline: 'Introdução',
            text: 'A calculadora de impactos é fruto de uma parceria entre CSF e MPF, uma ferramenta analítica e pedagógica que descreve os <strong>impactos do garimpo ilegal de ouro</strong>, seus valores monetários e o passo-a-passo para sua mensuração.'
        },
        analysisUnit: {
            headline: 'Qual base de informação você usará para o cálculo de impacto?',
            chooseOption: '* Escolha uma opção',
            goldType: {
                headline: 'Quantidade de ouro',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor'
            },
            goldMiningSize: {
                headline: 'Tamanho do garimpo',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor'
            }
        },
        contextValue: {
            headline: 'O valor do impacto depende do contexto',
            paragraphy_01: 'O conceito de “valor” se refere à importância social de uma variação na qualidade ambiental sobre o nível de bem-estar da população.',
            paragraphy_02: 'Por exemplo: O valor de um terreno ou uma casa varia se ela estiver em um lugar',
            paragraphy_03: '-Com ou sem poluição',
            paragraphy_04: '-Com ou sem vista',
            paragraphy_05: '-Com ou sem ruído',
            paragraphy_06: 'A importância (valor) de um impacto depende do contexto em que ocorre.',  
            paragraphy_07: '-Quanto mais pessoas deixam de usar um recurso natural, maior será o valor de sua perda.',
            paragraphy_08: '-Quanto mais escasso o recurso natural, maior o seu valor.'       
},
        howUseCalculator: {
            headline: 'Como utilizar a calculadora',
            paragraphy_01: 'Você pode incluir algumas informações sobre o contexto para que a calculadora estime o valor dos impactos de forma mais precisa',
            paragraphy_02: 'A localização define outras variáveis como:',
            paragraphy_03: '-Densidade e tamanho da população afetada',
            paragraphy_04: '-Média de consumo de peixe',
            paragraphy_05: '-Custo de transporte para recuperação de áreas',  
            paragraphy_06: 'Tipo de garimpo',
            paragraphy_07: 'Unidade de medida',           
            paragraphy_08: 'Caso não tenha informações específicas, não tem problema, serão incluídos automaticamente valores médios de contexto e impacto e resultados e suas explicações serão gerados na sequencia.'
        },
        introduction: {
            headline: 'Introdução',
            paragraphy_01: 'O garimpo ilegal na Amazônia vem crescendo nos últimos anos, puxado pela alta do preço do ouro no mercado internacional.',            
            paragraphy_02: 'A atividade gera impactos sobre:',
            impacts: [
                {
                    headline: 'Desmatamento',
                    text: 'Áreas são abertas para escavação e para a construção de infraestrutura, como estradas e pistas de pouso '
                },
                {
                    headline: 'Assoreamento dos rios',
                    text: 'A abertura de cavas gera erosão e assoreamento, enquanto balsas geram sedimentação. Como consequência, há uma piora na qualidade das águas'
                },
                {
                    headline: 'Contaminação por mercurio',
                    text: 'O mercúrio despejado pelo garimpo gera impactos sobre o ambiente e sobre a saúde humana, como sintomas neuropsicológicos, cognitivos e cardíacos '
                }
            ],
            paragraphy_03: 'A calculadora estima valores para cada um desses impactos.', 
            paragraphy_04: 'Os valores dependem do contexto e do tipo de garimpo.'
        },
        pitDepth: {
            headline: 'Profundidade da cava',
            paragraphy_01: 'Qual é a profundidade média das cavas (valas) do garimpo em questão? '
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
                    text: 'Extração de minério pela escavação de valas (cavas) abertas, em geral na beira de rios. Também conhecido como garimpo de baixão ou de barranco, é o tipo de garimpo ilegal mais comum na Amazônia.'
                },
                {
                    type: 'Balsa',
                    text: 'Extração de minério pela dragagem do leito dos rios. Realizado em barcos ou flutuantes, não geram desmatamento, mas tem maior impacto em termos de contaminação dos rios por mercúrio. '
                },
                {
                    type: 'Poço',
                    text: 'Extração de minério por meio de túneis subterrâneo, tem menores impactos em termos de desmatamento e erosão, porém também utiliza o mercúrio no processamento do minério.'
                }
            ],
            text: 'Caso não seja especificado o tipo, serão considerados os impactos do tipo de garimpo mais comum na Amazônia, o garimpo de aluvião'
        }
    }
};

export default ptBR;