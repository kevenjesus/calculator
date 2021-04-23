const en_US = {
    header: {
        naming: 'mining impacts calculator',
        slogan: '',
        linkWebsite: 'go to website'
    },
    calculatorForm: {
        commons: {
            yes: 'Yes',
            no: 'No'
        },
        labels: {
            knowRegion: 'Would you like to evaluate general impacts of mining or impacts from one specific mining site?',
            state: 'State',
            country: 'Municipality',
            analysisUnit: 'Unit of measurement',
            pitDepth: 'Pit Depth',
            extractionType: 'Extraction type',
            valueHypothesis: 'Value hypothesis',
            btnCalulator: 'Calculate impacts'
        },
        values: {
            analysisUnit: {
                impactedArea: 'Impacted area size',
                amountOfGold: 'Amount of gold'
            },
            qtdAnalysisUnit: {
                hactare: 'Hectare',
                grams: 'Grams',
                months: 'Months',
                years: 'Years'
            },
            pitDepth: {
                meters: 'meters'
            
            },
            extractionType: {
                openPit: 'Alluvial (open pit)',
                boat: 'Dredging (on boats)',
		        pitMine: 'Underground (pit)'
            },
            valueHypothesis: {
                conservative: 'Conservative (Average Values)',
                precautionaryPrinciple: 'Precautionary Principle (Maximum Values)'
            },
            txPrevalence: {
                minimum: 'Minimum',
                medium: 'Average',
                maximum: 'Maximum'
            }
        }
        
    },
    loading: {
        text: 'Calculating impacts...'
    },
    impacts: {
        menu: {
            deforestation: 'Deforestation',
            siltingOfRivers: 'Erosion and silting',
            mercuryContamination: 'Mercury contamination',
            monetaryImpacts: 'Monetary impacts'
        },
        deforestation: {
            headline: 'Deforestation',
            paragraphy_01: 'The extraction of 1 kg of gold leads to 14 hectares of deforestation, in average.',
            paragraphy_02: 'The deforestation of these 14 hectares leads to loss of opportunities for other activities, such as extraction of non-timber forest products, recreational and cultural use, and maintenance of the ecosystem services of climate regulation and erosion control.'

        },
        siltingOfRivers: {
            headline: 'Erosion and silting',
            paragraphy_01: 'The extraction of 1 kg of gold leads to erosion and sedimentation of 150m³ of soil, in average.',
            paragraphy_02: 'The sedimentation of these 150 m³ leads to loss of opportunity to carry out other activities in the rivers, such as drinking water, fishing, and tourism.'

        },
        mercuryContamination: {
            headline: 'Mercury contamination',
            paragraphy_01: 'The extraction of 1 kg of gold utilizes 2.6 kg of mercury, which 13% are deposited in rivers. Of those, 3% are metilated, becoming even more toxic and being absorbed by fish, which can migrate up to 2000km, contaminating the people who eat them. Conservatively, we consider the dispersion radius of mercury to be 100km.',
            paragraphy_02: 'Depending on the level of fish consumption, an individual will have an average increase in mercury level between 4ug/g and 15ug/g, leading to neuropsychological, cognitive and cardiac problems.'

        },
        monetaryImpacts: {
            headline: 'Monetary impacts',
            labels: {
                finalValue: 'Total monetary value',
                typeText: 'by',
                typeGold: 'gram of gold',
                typeHectare: 'hectares',
                impactCategories: 'Impact categories',
                impactedsVisualization: 'Impact visualization',
                mobileImpactedsVisualization: "It's only possible to visualize 4 impacts at a time on smartphone.",
            },
            values: {
                deforestation: 'Deforestation',
                mercuryImpacts: 'Mercury impacts',
                pitOpening: 'Excavation'
            }
        },
        buttons: {
            references: 'References',
            hypotheses: 'Hypotheses',
            next: 'Next',
            newCalculation: 'New calculation',
            printReports: 'Print report'
        }
    }, 
    introduction: {
        buttons: {
            skip: 'Skip introduction',
            next: 'Skip',
            moreContextValue: 'More'
        },
        about: {
            headline: 'Introduction',
            text: 'The impacts calculator is the result of a partnership between CSF and MPF, an analytical and pedagogical tool that describes the <strong>impacts of illegal gold mining</strong>, their monetary values and the steps for measuring them.',
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
            },
            yearsMining: {
                headline: 'Anos de garimpo',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor'
            },
            monthsMining: {
                headline: 'Meses de garimpo',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum nibh id sed habitant. Ac faucibus at rutrum feugiat eu lobortis nibh eu. Tortor nisl turpis pretium tincidunt luctus quam eu purus, sit. Accumsan, phasellus gravida aliquam dolor'
            },
        },
        contextValue: {
            headline: 'The value of impact depends on context',
            paragraphy_01: 'The concept of "value" refers to the social importance of a variation in environmental quality on the level of well-being of the population.',
            paragraphy_02: 'For example: The value of a piece of land or a house varies',
            paragraphy_03: "-If it's on a polluted or non-polluted place",
            paragraphy_04: "-If it has a nice view or not",
            paragraphy_05: "-If it's on a noisy neighboorhood or not",
            paragraphy_06: 'The importance (value) of an impact depends on the context in which it occurs.',  
            paragraphy_07: '-The more people stop using a natural resource, the greater the value of its loss.',
            paragraphy_08: '-The scarcer the natural resource, the higher its value.'       
        },
        howUseCalculator: {
            headline: 'How to use the calculator',
            paragraphy_01: 'You can include some information about the context for the calculator to estimate the value of the impacts more accurately',
            paragraphy_02: 'The location defines other variables such as:',
            paragraphy_03: '-Density and size of the affected population',
            paragraphy_04: '-Average fish consumption',
            paragraphy_05: '-Transportation cost for restoration of impacted areas',  
            paragraphy_06: 'Type of mining',
            paragraphy_07: 'Unit of measurement',           
            paragraphy_08: "If you don't have specific information, no problem, average context input values will be included automatically, and results will be generated afterwards."
        },
        introduction: {
            headline: 'Introduction',
            paragraphy_01: 'Illegal mining in the Amazon has been growing in recent years, driven by the rise in gold price in international markets.',            
            paragraphy_02: 'The activity has impacts on:',
            impacts: [
                {
                    headline: 'Deforestation',
                    text: 'Areas are opened up for excavation and for the construction of infrastructure such as roads and landing strips '
                },
                {
                    headline: 'Sedimentation of rivers',
                    text: 'Digging pits generates erosion and silting, while boat dredges generate river sedimentation. As a consequence, there is a worsening in water quality'
                },
                {
                    headline: 'Contamination by mercury',
                    text: 'The mercury deposited by mining generates impacts on the environment and on human health, such as neuropsychological, cognitive, and cardiac symptoms '
                }
            ],
            paragraphy_03: 'The calculator estimates values for each of these impacts.', 
            paragraphy_04: 'The values depend on the context and the type of mining.'
        },
        pitDepth: {
            headline: 'Pit depth',
            paragraphy_01: 'What is the average depth of the pits (ditches) at the mine?'
        },
        region: {
            headline: 'Region',
            text: 'The regions have different population (size, density, origin) and environmental (color and turbidity of the rivers) characteristics',
        },
        extractionType: {
            headline: 'Type of mining',
            values: [
                {
                    type: 'Alluvial',
                    text: "Extraction of ore by digging open pits, usually along riverbanks. This is the most common type of illegal mining in the Amazon."
                },
                {
                    type: 'Boat',
                    text: 'Extraction of ore by dredging river beds. Performed on boats, they do not generate deforestation, but have a greater impact in terms of mercury contamination of rivers. '
                },
                {
                    type: 'Pit',
                    text: 'Mining through underground tunnels has less impact in terms of deforestation and erosion, but also uses mercury in ore processing.'
                }
            ],
            text: 'If the type is not specified, the impacts of the most common type of artisanal small scale gold mine in the Amazon, the alluvial type, will be considered.'
        }
    }

};

export default en_US;