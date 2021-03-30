const enUS = {
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
            knowRegion: 'Would you like to learn more about general impacts of mining or about impacts from one specific mining activity?',
            state: 'Region',
            country: 'Municipality',
            analysisUnit: 'Unit of measurement',
            pitDepth: 'Pit Depth',
            extractionType: 'Extraction type',
            valueHypothesis: 'Value hypothesis' ,
            btnCalulator: 'Calculate impacts'
        },
        values: {
            analysisUnit: {
                impactedArea: 'Impacted area size',
                amountOfGold: 'Amount of gold'
            },
            qtdAnalysisUnit: {
                hactare: 'Hectare',
                grams: 'Grams'
            },
            pitDepth: {
                meters: 'Meters'
            
            },
            extractionType: {
                openPit: 'Alluvial (open pit)',
                boat: 'Dredging (on boats)',
		        pitMine: 'Underground (pit)'
            },
            valueHypothesis: {
                conservative: 'Conservative (Average Values)',
                precautionaryPrinciple: 'Precautionary Principle (Maximum Values)'
            }
        }
    },
    loading: {
        text: 'Calculating impacts...'
    },
    impacts: {
        menu: {
            deforestation: 'deforestation',
            siltingOfRivers: 'erosion and silting',
            mercuryContamination: 'mercury contamination',
            monetaryImpacts: 'monetary impacts'
        },
        deforestation: {
            headline: 'Deforestation',
        },
        siltingOfRivers: {
            headline: 'Erosion and silting'
        },
        mercuryContamination: {
            headline: 'Mercury contamination'
        },
        monetaryImpacts: {
            headline: 'Monetary impacts',
            labels: {
                finalValue: 'Total monetary value',
                typeText: 'by',
                typeGold: 'gram of gold',
                typeHectare: 'hectares',
                impactCategories: 'Impact categories'
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
    }

};

export default enUS;