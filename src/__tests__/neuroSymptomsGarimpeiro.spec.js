import neuroSymptomsGarimpeiro from "pages/Calculator/Form/calculations/neuroSymptomsGarimpeiro"
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts"

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese conservador, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(ALLUVIUM, AMOUNT_GOLD, 8625, 0.29, 8625)
        expect(neuroSintomas).toBe(726447.162113659)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese conservador, considerando 5Ha', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(ALLUVIUM, IMPACTED_AREA, 5, 0.29, 8625)
        expect(neuroSintomas).toBe(726447.162113659)
    } )
})


describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo POÇO com valor de hipotese conservador, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(PIT, AMOUNT_GOLD, 8625, 0.29, 8625)
        expect(neuroSintomas).toBe(726447.162113659)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo BALSA com valor de hipotese conservador, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(FERRY, AMOUNT_GOLD, 8625, 0.29, 8625)
        expect(neuroSintomas).toBe(726447.162113659)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo POÇO com valor de hipotese conservador, considerando 2 ANOS', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(PIT, YEARS_OF_MINING, 2, 0.29, 0)
        expect(neuroSintomas).toBe(3992300.9257028913)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo BALSA com valor de hipotese conservador, considerando 24 MESES', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(FERRY, MONTHS_OF_MINING, 24, 0.29, 0)
        expect(neuroSintomas).toBe(610468.2934492523)
    } )
})


