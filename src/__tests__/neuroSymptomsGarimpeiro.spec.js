import neuroSymptomsGarimpeiro from "pages/Calculator/Form/calculations/neuroSymptomsGarimpeiro"
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts"

//Teste unitário tippo de garimpo aluvião

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese conservador, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(ALLUVIUM, AMOUNT_GOLD, 8625, 0.29, 8625)
        expect(neuroSintomas).toBe(671130.2129611167)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese principio da precaução, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(ALLUVIUM, AMOUNT_GOLD, 8625, 0.343, 8625)
        expect(neuroSintomas).toBe(793785.044985045)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese conservador, considerando 5Ha', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(ALLUVIUM, IMPACTED_AREA, 5, 0.29, 8625)
        expect(neuroSintomas).toBe(671130.2129611167)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese principio da precaução, considerando 5Ha', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(ALLUVIUM, IMPACTED_AREA, 5, 0.343, 8625)
        expect(neuroSintomas).toBe(793785.044985045)
    } )
})


//Teste unitário tippo de garimpo poço

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo POÇO com valor de hipotese conservador, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(PIT, AMOUNT_GOLD, 8625, 0.29, 8625)
        expect(neuroSintomas).toBe(671130.2129611167)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo POÇO com valor de hipotese principio da precaução, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(PIT, AMOUNT_GOLD, 8625, 0.343, 8625)
        expect(neuroSintomas).toBe(793785.044985045)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo POÇO com valor de hipotese conservador, considerando 2 ANOS', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(PIT, YEARS_OF_MINING, 2, 0.29, 0)
        expect(neuroSintomas).toBe(3688298.2138384846)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo POÇO com valor de hipotese principio da precaução, considerando 2 ANOS', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(PIT, YEARS_OF_MINING, 2, 0.343, 0)
        expect(neuroSintomas).toBe(4362366.508091725)
    } )
})


//Teste unitário tippo de garimpo balsa

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo BALSA com valor de hipotese conservador, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(FERRY, AMOUNT_GOLD, 8625, 0.29, 8625)
        expect(neuroSintomas).toBe(671130.2129611167)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo BALSA com valor de hipotese conservador, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(FERRY, AMOUNT_GOLD, 8625, 0.343, 8625)
        expect(neuroSintomas).toBe(793785.044985045)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo BALSA com valor de hipotese conservador, considerando 24 MESES', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(FERRY, MONTHS_OF_MINING, 24, 0.29, 0)
        expect(neuroSintomas).toBe(563982.8154831505)
    } )
})

describe('neuroSymptomsGarimpeiro', () => {
    it('Deve calcular o sintomas neuropsicológicos em garimpeiros quando selecionado tipo de garimpo BALSA com valor de hipotese conservador, considerando 24 MESES', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const neuroSintomas = neuroSymptomsGarimpeiro(FERRY, MONTHS_OF_MINING, 24, 0.343, 0)
        expect(neuroSintomas).toBe(667055.5369335195)
    } )
})


