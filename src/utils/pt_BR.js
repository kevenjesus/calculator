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
        },
        siltingOfRivers: {
            headline: 'Assoreamento dos rios'
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
                impactCategories: 'Categorias de impacto'
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
    }

};

export default ptBR;