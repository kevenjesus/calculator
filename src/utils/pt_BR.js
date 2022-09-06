const ptBR = {
    type: 'ptBR',
    header: {
        naming: 'calculadora',
        slogan: 'impactos do garimpo ilegal de ouro',
        linkWebsite: 'ir para o site',
        team: 'Equipe'
    },
    resume: 'Resumo',
    comeBack: 'Voltar',
    defaultValue: "Valor padrão",
    iDontKnowYet: 'Ainda não conheço',
    more: 'Saiba mais',
    knowRegionYes: 'Impactos em lugar específico',
    iAlreadyKnow: 'Já conheço',
    buttonIntroduction: 'Me leva para o passo-a-passo',
    buttonResumeCalculator: 'Me leva para versão resumida',
    knowRegionNo: 'Impactos Gerais Médios',
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
                amountOfGold: 'Quantidade de ouro',
            },
            qtdAnalysisUnit: {
                hactare: 'Hectares',
                grams: 'Gramas de ouro',
                months: 'Meses',
                years: 'Anos'
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
            paragraphy_01: 'A extração de <strong>$grams gramas de ouro</strong> gera o desmatamento de <strong>$hectare hectares</strong>, em média.',
            paragraphy_02: 'O desmatamento destes <strong>$hectare hectares</strong> leva a perdas de oportunidade de realização de outras atividades, como extração de produtos florestais não-madeireiros, uso recreativo, cultural, e da manutenção de serviços ecossistêmicos de regulação do clima e de controle de erosão'
        },
        siltingOfRivers: {
            headline: 'Assoreamento dos rios',
            paragraphy_01: 'A extração de <strong>$grams gramas de ouro</strong> gera erosão/sedimentação de <strong>$volumeM3</strong> de solo, em média',
            paragraphy_02: 'O assoreamento/sedimentação destes <strong>$volumeM3</strong> leva a perdas de oportunidade de realização de outras atividades nos rios, como o uso da água para beber, pesca e turismo.'
        },
        mercuryContamination: {
            headline: 'Contaminação por mercúrio',
            paragraphy_01: 'A extração de 1 kg de ouro utiliza 2,6kg de mercúrio, dos quais 13% são despejados nos rios. Destes, 3% são metilados, se tornando ainda mais tóxicos e sendo absorvidos por peixes, que podem migrar por até 2000km, contaminando as pessoas que se alimentam deles. De modo conservador, consideramos que o raio de dispersão do mercúrio é de 100km, em que, dentro dele, <strong>$people pessoas</strong> estão expostas a riscos aumentados pela exposição ao mercúrio oriundo do garimpo.',
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
            text: 'A calculadora de impactos é fruto de uma parceria entre CSF e MPF, uma ferramenta analítica e pedagógica que descreve os impactos do garimpo ilegal de ouro, seus valores monetários e o passo-a-passo para sua mensuração.'
        },
        analysisUnit: {
            headline: 'Qual base de informação você usará para o cálculo de impacto?',
            chooseOption: '* Escolha uma opção',
            goldType: {
                headline: 'Quantidade de ouro',
                text: 'Considera o contexto médio de produtividade e impacto de garimpo na Amazônia. Utilizado quando ocorre apreensão de ouro ilegal sem que se saiba sua origem exata.'
            },
            goldMiningSize: {
                headline: 'Tamanho do garimpo',
                text: 'O tamanho do garimpo é dado pela multiplicação de sua área pela profundidade média das cavas. Utilizado quando se conhece o local do garimpo ilegal, havendo possibilidade de detalhar o contexto com parâmetros específicos.'
            },
            yearsMining: {
                headline: 'Anos de exploração do garimpo',
                text: 'A idade do garimpo pode ser utilizada como uma aproximação do tamanho, quantidade de ouro extraído e de mercúrio utilizado'
            },
            monthsMining: {
                headline: 'Meses de garimpo',
                text: 'O tempo de funcionamento da balsa pode ser utilizado como uma aproximação da quantidade de ouro extraído e mercúrio despejado no ambiente'
            },
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
            paragraphy_06: '-Tipo de garimpo',
            paragraphy_07: '-Unidade de medida',           
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
                },
                {
                    type: 'Uso de retorta?',
                    text: 'Extração de minério por meio de túneis subterrâneo, tem menores impactos em termos de desmatamento e erosão, porém também utiliza o mercúrio no processamento do minério.'
                }
            ],
            text: 'Caso não seja especificado o tipo, serão considerados os impactos do tipo de garimpo mais comum na Amazônia, o garimpo de aluvião'
        }
    },
    hypotheses: 'Hipoteses',
    references: 'Referências',
    observation: 'Observações',
    hypothesesReferences: {
        deforestation: {
            headline: 'Desmatamento / Hipoteses e referências',
            bioprospecting: 'bioprospecção',
            bio_ref_line1: 'Andersen (1997)',
            bio_ref_line2: 'May et al (2013)',
            bio_ref_line3: 'Groot et al (2012)',
            carbon: 'Carbono',
            carbon_hypotheses: 'Estoque de carbono por hectare na amâzônia de 347 tCO2/ha',
            carbon_ref_line1: 'World Bank (2020)',
            carbon_ref_line2: 'Fearnside (2018)',
            woodNonwoodProducts: 'Produtos não-madeireiros e madeireiros',
            woodNonwoodProducts_hypotheses_line1: 'Valor dos produtos madeireiros foi obtido pelo VPL de estudos de concessão florestal na Amazônia.',
            woodNonwoodProducts_hypotheses_line2: 'Valor dos produtos não madeireiros foi obtido pelo VPL de modelos agroflorestais com consórcio de café, cacau, guaraná, açaí e banana',
            woodNonwoodProducts_ref_line1: 'Rodrigues (2016)',
            woodNonwoodProducts_ref_line2: 'CSF (2019)',
            recreation_culture_species: 'Recreação / Cultural / Espécies',
            recreation_culture_species_hypotheses: 'Meta-análise que os valores variam em função da densidade demográfica, do PIB per capita e da riqueza de espécies',
            recreation_culture_species_ref: 'Siikamaki et al (2015)',
            recreation_culture_comments_line1: 'A perda da floresta em pé pode ser mensurada a partir do custo de oportunidade, ou seja, observa-se na literatura qual a rentabilidade média por hectare para as diferentes atividades foram excluídas com o desmatamento.',
            recreation_culture_comments_line2: 'Todos estes valores são perdidos integralmente com o garimpo, podendo ser recuperados anualmente. Assume-se a hipótese de que tais atividades retomarão 80% do que eram em 30 anos.',
            superficialSoilRecovery: 'Recuperação da camada superficial do solo',
            superficialSoilRecovery_hypotheses_line1: 'A recuperação da camada superficial do solo tem como diferentes técnicas aplicadas como, por exemplo, a aplicação de semeadura direta.',
            superficialSoilRecovery_hypotheses_line2: 'O impacto do desmatamento causado pelo garimpo pode gerar uma extensão até 12 vezes maior para construção de pistas de pouso, estradas, etc.',
            superficialSoilRecovery_hypotheses_line3: 'Assume-se hipótese de que tal recuperação é realizada em 1 ano.',
            superficialSoilRecovery_hypotheses_line4: 'Considera-se o custo de frete de mudas a partir da distância média dos pontos de garimpo nos municípios (RAISG e IBAMA) e a localização de centros urbanos.',
            superficialSoilRecovery_ref_line1: 'IBAMA (2019)',
            superficialSoilRecovery_ref_line2: 'Sonter et al (2017)',
            superficialSoilRecovery_ref_line3: 'RAISG – Rede Amazônica de informação Socioambiental',
            superficialSoilRecovery_ref_line4: 'IBGE (2015)',
            superficialSoilRecovery_comments: 'Um dos primeiros impactos do garimpo é a perda de cobertura florestal na camada superficial que posteriormente precisa ser recuperada.',
        },
        siltingOfRivers: {
            headline: 'Assoreamento dos rios / Hipoteses e referências',
            erosion_Silting: 'Erosão – Assoreamento',
            erosion_Silting_hypotheses_line1: 'Estudos demonstram qual a importância monetária do controle de erosão por hectare que foi perdido com o garimpo.',
            erosion_Silting_hypotheses_line2: 'Tais valores são perdidos integralmente com o garimpo, podendo ser recuperados anualmente. Assume-se a hipótese de que tais atividades retomarão 80% do que eram em 30 anos.',
            erosion_Silting_ref_line1: 'De Groot et al (2012)',
            erosion_Silting_ref_line2: 'Constanza et al (1997)',
            erosion_Silting_comments: 'A presença do garimpo pode causar impactos significativos na camada profunda do solo, afetando serviços ecossistêmicos como a controle de erosão.',
            dredging_sediments_in_the_river: 'Dragagem de sedimentos no rio',
            dredging_hypotheses_line1: 'Assume-se que 15% do sedimento movimentado pelo garimpo de aluvião é direcionado aos rios e precisam ser dragados. Utiliza-se como referência estudo que calcula o custo para uma draga de sucção entre 8” à 12” (polegadas)',
            dredging_ref_line1: 'Costa (2016)',
            soil_stabilization: 'Estabilização de solo',
            soil_stabilization_hypotheses_line1: 'A camada profunda de solo é dividida em camada fértil (40 cm) e o restante como terra que possuem custos de transporte diferentes para o aterramento.',
            soil_stabilization_hypotheses_line2: 'Uma retroescavadeira tem a capacidade de mobilizar 160 m3 por hora',
            soil_stabilization_hypotheses_line3: 'Uma draga tem a capacidade de movimentar 300 m3 por hora',
            soil_stabilization_ref_line1: 'CID PUCESE (2011)',
            soil_stabilization_ref_line2: 'Tonietto & Silva, (2011)',
            soil_stabilization_ref_line3: 'Polícia Federal (2018)',
            soil_stabilization_ref_line4: 'Cardoso, (2002)',
            soil_stabilization_dredging_sediments_comments_line1: 'Assume-se hipótese de que tal recuperação é realizada em 1 ano.',
            soil_stabilization_dredging_sediments_comments_line2: 'A revisão de literatura sobre produtividades médias de garimpo foram realizadas para o cálculo do sedimento médio movimentado.'
        },
        mercury: {
            headline: 'Impactos do mercurio / Hipoteses e referências',
            loss_QI: 'Perda de QI',
            loss_QI_hypotheses_line1: '2,6 kg de mercúrio usado para a extração de 1 kg de ouro',
            loss_QI_hypotheses_line2: 'Proporção de mercúrio liberado e emitido em água e sedimentos 12% até 22 %.',
            loss_QI_hypotheses_line3: 'Proporção de mercúrio que sofre transformação em metilmercúrio (metilação), segundo a literatura, varia de 3% e 22%.',
            loss_QI_hypotheses_line4: 'A ingestão média diária de mercúrio é calculada a partir do peso médio dos indivíduos, do nível de consumo médio de peixes por dia diferenciando pelo tipo de população (urbana e rural obtida pelo IBGE).',
            loss_QI_hypotheses_line5: 'Assume-se que o impacto do metilmercúrio na água pode ocorrer até 50 anos',
            loss_QI_hypotheses_line6: 'Cada 1,0 μg/g de mercúrio (MeHg) no cabelo da mãe corresponde a perda de 0,18 pontos de QI no feto.',
            loss_QI_hypotheses_line7: 'Impacto cardiovascular se dividem em infarto do miocárdio e hipertensão, tendo tanto custo de tratamento quanto dias vividos com incapacidade (DALY)',
            loss_QI_ref_line1: 'Castilhos & Domingos (2018)',
            loss_QI_ref_line2: 'Vasconcellos (2015)',
            loss_QI_ref_line3: 'Lopez & Cólon, 2010',
            loss_QI_ref_line4: 'Lino et al, 2019',
            loss_QI_ref_line5: 'Codex Alimentarius (1995)',
            loss_QI_ref_line6: 'Hacon et al, (2020)',
            loss_QI_ref_line7: 'Fiocruz, 2020',
            loss_QI_ref_line8: 'Bisinoti e Jardim, (2004)',
            loss_QI_ref_line9: 'Salonen et al (1995)',
            loss_QI_ref_line10: 'Hu et al (2018)',
            loss_QI_comments_line1: 'A utilização de mercúrio pelo garimpo faz com que sejam contaminados solos, ar e água, causando problemas à saúde humana.',
            loss_QI_comments_line2: 'Uma das formas de quantificar o impacto é pelos problemas de saúde gerados pela contaminação da água e aumento do risco de doenças relacionadas à ingestão de peixes.',
            neuropsychological_symptoms_in_garimpeiros: 'Sintomas neuropsicológicos em garimpeiros',
            neuroSymptoms_hypotheses_line1: 'Hipótese de que um garimpeiro, em média, extrai 150 gramas de ouro no ano.',
            neuroSymptoms_hypotheses_line2: 'Probabilidade/proporção de garimpeiros com sintomas neuropsicológicos de 72%',
            neuroSymptoms_hypotheses_line3: 'Os sintomas neuropsicológicos são avaliados tanto pelo custo de tratamento destes sintomas, como pela perda de bem-estar gerada ao viver com tal incapacidade (DALY).',
            neuroSymptoms_ref_line1: 'Steckling et al (2014)',
            neuroSymptoms_ref_line2: 'Steckling et al (2019)',
            neuroSymptoms_comments_line1: 'Hipótese de que um garimpeiro, em média, extrai 150 gramas de ouro no ano.',
            neuroSymptoms_comments_line2: 'Probabilidade/proporção de garimpeiros com sintomas neuropsicológicos de 72%',
            soil_mercury_remediation: 'Remediação de mercúrio no solo',
            soil_mercury_hypotheses_line1: 'Assume-se que a biorremediação, a partir do plantio de mudas de espécies capazes de absorver o mercúrio no solo, seria a alternativa mais aplicável ao contexto amazônico para remediar o impacto do garimpo.',
            soil_mercury_hypotheses_line2: 'Hipótese de concentração média de mercúrio nos solos de 0,24 gramas de ouro por tonelada de sedimento.',
            soil_mercury_ref_line1: 'Miranda (2019) Kahhat et al (2019)',
            soil_mercury_comments_line1: 'Assume-se que a biorremediação, a partir do plantio de mudas de espécies capazes de absorver o mercúrio no solo, seria a alternativa mais aplicável ao contexto amazônico para remediar o impacto do garimpo.',
            soil_mercury_comments_line2: 'Hipótese de concentração média de mercúrio nos solos de 0,24 gramas de ouro por tonelada de sedimento.',
        }
    }
};

export default ptBR;