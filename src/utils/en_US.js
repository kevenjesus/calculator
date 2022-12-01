const en_US = {
    type: 'enUS',
    header: {
        naming: 'mining impacts calculator',
        slogan: '',
        linkWebsite: 'go to website',
        team: 'Team'
    },
    resume: 'Resume',
    comeBack: 'Back',
    iDontKnowYet: "I don't know it",
    defaultValue: "Default value",
    more: 'Learn more',
    knowRegionYes: 'Impacts in a specific location',
    knowRegionNo: 'General average impacts',
    iAlreadyKnow: 'I know it already',
    buttonIntroduction: 'Take me to the walkthrough',
    buttonResumeCalculator: 'Take me to the short version',
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
            motorPower: 'Motor Power',
            retort: 'Does it use retort?',
            extractionType: 'Extraction type',
            valueHypothesis: 'Value hypothesis',
            btnCalulator: 'Calculate impacts'
        },
        values: {
            analysisUnit: {
                impactedArea: 'Impacted area size',
                amountOfGold: 'Amount of gold',
                qtd_ferry: 'Ferries'
            },
            qtdAnalysisUnit: {
                hactare: 'Hectare',
                grams: 'Grams',
                months: 'Months',
                years: 'Years',
                ferry: 'ferries'
            },
            pitDepth: {
                meters: 'meters'
            
            },
            extractionType: {
                openPit: 'Alluvial (riverside)',
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
        text: 'Calculating impacts...',
        pdfText: 'Generating PDF...'
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
            paragraphy_01: 'The extraction of <strong>$grams grams of gold</strong> leads to <strong>$hectare hectares</strong> of deforestation, in average.',
            paragraphy_02: 'The deforestation of these <strong>$hectare hectares</strong> leads to loss of opportunities for other activities, such as extraction of non-timber forest products, recreational and cultural use, and maintenance of the ecosystem services of climate regulation and erosion control.'

        },
        siltingOfRivers: {
            headline: 'Erosion and silting',
            paragraphy_01: 'The extraction of <strong>$grams grams of gold</strong> leads to erosion / sedimentation of <strong>$volumeM3</strong> of soil, in average.',
            paragraphy_02: 'The sedimentation of <strong>$volumeM3</strong> leads to a decline in fishing and tourism, and prevents the river from being used as a source of drinking water'
        },
        mercuryContamination: {
            headline: 'Mercury contamination',
            paragraphy_01: 'The extraction of 1 kg of gold utilizes 2.6 kg of mercury, which 13% are deposited in rivers. Of those, 3% are metilated, becoming even more toxic and being absorbed by fish, which can migrate up to 2000km, contaminating the people who eat them. Conservatively, we consider the dispersion radius of mercury to be 100km which has <strong>$people people</strong> exposed to additional risk from the exposure to the mercury from mining',
            paragraphy_02: 'Depending on the level of fish consumption, an individual will have an average increase in mercury level between 4ug/g and 15ug/g, leading to neuropsychological, cognitive and cardiac problems.'

        },
        monetaryImpacts: {
            headline: 'Monetary impacts',
            labels: {
                totalImpacts: 'Total impacts value',
                totalGold: 'Total gold value',
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
            next: 'Next',
            moreContextValue: 'More'
        },
        about: {
            headline: 'Introduction',
            text: 'The impacts calculator is the result of a partnership between CSF and MPF, an analytical and pedagogical tool that describes the impacts of illegal gold mining, their monetary values and the steps for measuring them.',
        },
        analysisUnit: {
            headline: 'What baseline information will you use for the impact calculation?',
            chooseOption: '* Select an alternative',
            input_qtdAnalysis: '* Enter the value in',
            goldType: {
                headline: 'Amount of gold',
                text: 'Considers the average context of productivity and impact of garimpo in the Amazon. Used when illegal gold is apprehended and its origin is unknown.'
            },
            goldMiningSize: {
                headline: 'Impacted area size',
                text: 'The size of the mine is defined by multiplying its area by the average depth of the pits. Used when the location of illegal mining site is known, with the possibility of detailing the context with specific parameters.'
            },
            yearsMining: {
                headline: 'Anos de garimpo',
                text: 'The age of the mining site can be used to estimate the size, amount of gold mined, and mercury used'
            },
            monthsMining: {
                headline: 'Meses de garimpo',
                text: 'The operating time of the boat can be used as an approximation of the amount of gold mined and mercury dumped into the environment'
            },
            qtdFerry: {
                headline: 'number of ferries in 1 year',
                text: ''
            }
        },
        contextValue: {
            headline: 'The value of the impact depends on the context',
            paragraphy_01: 'The concept of "value" refers to the social importance of a variation in environmental quality on the level of well-being of the population.',
            paragraphy_02: 'For example: The value of a plot of land or a house will vary if it is in a certain location.',
            paragraphy_03: "-With or without pollution",
            paragraphy_04: "-With or without a special view",
            paragraphy_05: "-If it's in a noisy neighboorhood or not",
            paragraphy_06: 'The importance (value) of an impact depends on the context in which it occurs.',  
            paragraphy_07: '-The fewer the people using a natural resources, the greater the value if it is lost?',
            paragraphy_08: '-The scarcer the natural resource, the higher its value.'       
        },
        howUseCalculator: {
            headline: 'How to use the calculator',
            paragraphy_01: 'You can include some contextual information for the calculator to estimate the value of the impacts more accurately',
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
                    text: 'Areas are opened up for excavation and infrastructure construction, such as roads and landing strips'
                },
                {
                    headline: 'Sedimentation of rivers',
                    text: 'Digging pits generates erosion and silting, while boat dredges generate river sedimentation. As a consequence, water quality worsens'
                },
                {
                    headline: 'Contamination by mercury',
                    text: 'The mercury deposited by mining generates impacts on the environment and neuropsychological, cognitive, and cardiac problems for humans'
                }
            ],
            paragraphy_03: 'The calculator estimates values for each of these impacts.', 
            paragraphy_04: 'The values depend on the context and the type of mining.'
        },
        pitDepth: {
            headline: 'Pit depth',
            paragraphy_01: 'What is the average depth of the pits (ditches) at the mine?'
        },
        motorPower: {
            headline: 'Motor Power',
            paragraphy_01: 'What is the power of the engine? '
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
                },
                {
                    type: 'Does it use retort?',
                    text: 'Mining through underground tunnels has less impact in terms of deforestation and erosion, but also uses mercury in ore processing.'
                }
            ],
            text: 'If the type is not specified, the impacts of the most common type of artisanal small scale gold mine in the Amazon, the alluvial type, will be considered.'
        }
    },
    hypotheses: 'Hipoteses',
    references: 'References',
    observation: 'Observações',
    hypothesesReferences: {
        deforestation: {
            headline: 'Deforestation/ Hypotheses and references',
            bioprospecting: 'bioprospection',
            bio_ref_line1: 'Andersen (1997)',
            bio_ref_line2: 'May et al (2013)',
            bio_ref_line3: 'Groot et al (2012)',
            carbon: 'Carbono',
            carbon_hypotheses: 'Amazon carbon stock is 347 tCO2/ha',
            carbon_ref_line1: 'World Bank (2020)',
            carbon_ref_line2: 'Fearnside (2018)',
            woodNonwoodProducts: 'Produtos não-madeireiros e madeireiros',
            woodNonwoodProducts_hypotheses_line1: 'Value of timber products was obtained in forest concession studies in the Amazon.',
            woodNonwoodProducts_hypotheses_line2: 'Value of non timber products was obtained from the consortium of coffee, cocoa, guaraná, açaí and banana',
            woodNonwoodProducts_ref_line1: 'Rodrigues (2016)',
            woodNonwoodProducts_ref_line2: 'CSF (2019)',
            recreation_culture_species: 'Recreação / Cultural / Espécies',
            recreation_culture_species_hypotheses: 'Meta-analysis that values vary according to population density, GDP per capita, and species richness',
            recreation_culture_species_ref: 'Siikamaki et al (2015)',
            recreation_culture_comments_line1: 'The loss of forest can be measured from the opportunity cost, that is, it is observed in the literature what is the average profitability per hectare for the different activities were excluded with deforestation.',
            recreation_culture_comments_line2: 'All the values are lost entirely to mining and can be recovered annualy. It is assumed that such activities will return to 80% of what they were in 30 years.',
            superficialSoilRecovery: 'Recovery of the topsoil layer',
            superficialSoilRecovery_hypotheses_line1: 'Topsoil recovery has different techniques applied, such as the application of direct seeding. ',
            superficialSoilRecovery_hypotheses_line2: 'Deforestation impact caused by illegal mining can produce an extension up to 12 times as much than the construction of landing roads, highways, etc. ',
            superficialSoilRecovery_hypotheses_line3: 'It is assumed that such a recovery is realized in 1 year.',
            superficialSoilRecovery_hypotheses_line4: 'The cost of shipping seedlings is considered based on the average distance of the mining points in the municipalities (RAISG and IBAMA) and the location of urban centers.',
            superficialSoilRecovery_ref_line1: 'IBAMA (2019)',
            superficialSoilRecovery_ref_line2: 'Sonter et al (2017)',
            superficialSoilRecovery_ref_line3: 'RAISG – Rede Amazônica de informação Socioambiental',
            superficialSoilRecovery_ref_line4: 'IBGE (2015)',
            superficialSoilRecovery_comments: 'One of the first impacts of mining is the loss of forest cover in the surface layerlater, which needs to be recovered later.',
        },
        siltingOfRivers: {
            headline: 'Siltation of rivers / Hypotheses and references',
            erosion_Silting: 'Erosion – Siltation',
            erosion_Silting_hypotheses_line1: 'Studies show the monetary importance of erosion control per hectare that has been lost to mining.',
            erosion_Silting_hypotheses_line2: 'These values are lost entirely to mining, and can be recovered annually. It is assumed that such activities will return to 80% of what they were in 30 years.',
            erosion_Silting_ref_line1: 'De Groot et al (2012)',
            erosion_Silting_ref_line2: 'Constanza et al (1997)',
            erosion_Silting_comments: 'The presence of mining can have significant impacts on the deep soil layer, affecting ecosystem services such as erosion control.',
            dredging_sediments_in_the_river: 'Dredging sediments in the river',
            dredging_hypotheses_line1: 'It is assumed that 15% of the sediment moved by alluvial mining is directed into rivers and needs to be dredged. A study that calculates the cost for a suction dredge between 8" to 12" (inches) is used as a reference.',
            dredging_ref_line1: 'Costa (2016)',
            soil_stabilization: 'Estabilização de solo',
            soil_stabilization_hypotheses_line1: 'Soil Stabilization',
            soil_stabilization_hypotheses_line2: 'A backhoe has the capacity to mobilize 160 m³ per hour',
            soil_stabilization_hypotheses_line3: 'A dredge has the capacity to move 300 m³ per hour',
            soil_stabilization_ref_line1: 'CID PUCESE (2011)',
            soil_stabilization_ref_line2: 'Tonietto & Silva, (2011)',
            soil_stabilization_ref_line3: 'Polícia Federal (2018)',
            soil_stabilization_ref_line4: 'Cardoso, (2002)',
            soil_stabilization_dredging_sediments_comments_line1: 'It is assumed that such a recovery is realized in 1 year.',
            soil_stabilization_dredging_sediments_comments_line2: 'The literature review on average mining productivities were performed to calculate the average sediment moved.'
        },
        mercury: {
            headline: 'Mercury impacts / Hypotheses and references',
            loss_QI: 'IQ loss',
            loss_QI_hypotheses_line1: '2.6 kg of mercury used to extract 1 kg of gold',
            loss_QI_hypotheses_line2: 'Proportion of mercury released and emitted in water and sediments 12% up to 22 %.',
            loss_QI_hypotheses_line3: 'The proportion of mercury that undergoes transformation to methylmercury (methylation), according to the literature, ranges from 3% to 22%.',
            loss_QI_hypotheses_line4: 'The average daily intake of mercury is calculated from the average weight of the individuals, the average level of fish consumption per day differentiated by the type of population (urban and rural obtained by IBGE).',
            loss_QI_hypotheses_line5: 'It is assumed that the impact of methylmercury in water can occur up to 50 years',
            loss_QI_hypotheses_line6: "Every 1.0 μg/g of mercury (MeHg) in the mother's hair corresponds to a loss of 0.18 IQ points in the fetus.",
            loss_QI_hypotheses_line7: 'Cardiovascular impact is divided into myocardial infarction and hypertension, having both treatment cost and disability-adjusted days lived (DALY)',
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
            loss_QI_comments_line1: 'The usage of mercury from mining causes soil, air, and water contamination, causing problems for human health.',
            loss_QI_comments_line2: 'One of the ways to quantify the impact is by the health problems generated by water contamination and increased risk of diseases related to fish ingestion.',
            neuropsychological_symptoms_in_garimpeiros: 'Neuropsychological symptoms in gold miners',
            neuroSymptoms_hypotheses_line1: 'We hypothesize that an average gold miner extracts 150 grams of gold a year.',
            neuroSymptoms_hypotheses_line2: 'Probability/proportion of miners with neuropsychological symptoms of 72%.',
            neuroSymptoms_hypotheses_line3: 'Neuropsychological symptoms are valued both by the cost of treating these symptoms and the loss of well-being generated by living with such a disability (DALY).',
            neuroSymptoms_ref_line1: 'Steckling et al (2014)',
            neuroSymptoms_ref_line2: 'Steckling et al (2019)',
            neuroSymptoms_comments_line1: 'We hypothesize that an average gold miner extracts 150 grams of gold a year.',
            neuroSymptoms_comments_line2: 'Probability/proportion of miners with neuropsychological symptoms of 72%.',
            soil_mercury_remediation: 'Mercury Remediation in Soil',
            soil_mercury_hypotheses_line1: 'It is assumed that bioremediation, starting with the planting of seedlings of species capable of absorbing mercury in the soil, would be the most applicable alternative to the Amazonian context to remediate the impact of mining.',
            soil_mercury_hypotheses_line2: 'We hypothesize an average mercury concentration in soils of 0.24 grams of gold per ton of sediment.',
            soil_mercury_ref_line1: 'Miranda (2019) Kahhat et al (2019)',
            soil_mercury_comments_line1: 'It is assumed that bioremediation, starting with the planting of seedlings of species capable of absorbing mercury in the soil, would be the most applicable alternative to the Amazonian context to remediate the impact of mining.',
            soil_mercury_comments_line2: 'We hypothesize an average mercury concentration in soils of 0.24 grams of gold per ton of sediment.',
        },
    },
    inflation: 'Accumulated inflation since January 2022 (%)',
    inflation_placeholder: 'Insert the inflation in this format: 10 or 6.2',
    district: 'District',
    goldImpact: 'Value for $grams grams of gold',
    goldImpact_graphic: '$grams grams of gold',
    goldImpact_graphic_tooltip: 'Value $grams grams of gold',
    monetaryimpact_text: 'Impacts + gold',
    science_article: 'Scientific article',
    methodology: 'Methodology',
    button_download_pdf: 'Download PDF',
    bioprospecting: 'Bioprospecting',
    carbon: 'Carbon',
    cavaGroundingCostAu: 'Pit grounding',
    culturedAndSpecies: 'Species',
    dredgingAndRiverSediments: 'Dredging sediment in the river',
    erosionSiltingUp: 'Erosion',
    woodAndNonWoodProducts:'NTFP',
    woodAndNonWoodProducts_tooltip: 'Timber and non-timber forest products',
    recreation: 'Recreation',
    recoveryOfTopsoil: 'Soil surface recovery',
    neuroSymptomsGarimpeiro: 'Neuropsychological symptoms in miners',
    lossQI: 'Loss of QI in fetus',
    HeartHypertesion: 'Cardiovascular diseases',
    HeartHypertesion_tooltip: 'Cardiovascular diseases (Hypertension + Infarction)',
    soilMercuryRemediation: 'Mercury remediation in soil',
    button_youtube: 'See other videos about illegal mining',
    not_monetary_headline: 'non-monetary impacts',
    not_monetary_type: 'type of impact',
    not_monetary_results: 'Results',
    not_monerary_goldGrass: 'Total gold production',
    not_monetary_proporcaoKgporHectare: 'Kg of gold per impacted hectare',
    not_monerary_hecatereGrass: 'Total hectares impacted',
    not_monetary_lossyVolumeFertile: 'Volume of sediments moved',
    not_monetary_qtdOfMinersAffected: 'Miners at risk of developing neuropsychological symptoms',
    not_monetary_concentrationMediaMercuryHair: 'Average level of mercury contamination in hair from eating contaminated fish',
    not_monetary_porcentNascidosVivosPerdaQIAcimaDe2Pts: 'Live births with an IQ loss greater than 2 points',
    not_monetary_toMethylatedWater: 'Amount of mercury that turns into methylmercury and enters the trophic chain (in grams)',
    not_monetary_toPopulationAffectedMercuryHair: 'Population potentially exposed to risk',
    not_monetary_menOver40InTheRegionIn27Years: 'Population at risk of acute myocardial infarction',
    not_monetary_peopleAbove20YearsoldInTheRegionIn52Years: 'Population at risk of high blood pressure',
    not_monetary_people: 'people'
};

export default en_US;