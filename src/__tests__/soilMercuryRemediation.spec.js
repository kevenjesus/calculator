import soilMercuryRemediation from "pages/Calculator/Form/calculations/soilMercuryRemediation"
const { ALLUVIUM, AMOUNT_GOLD, IMPACTED_AREA, PIT, YEARS_OF_MINING, FERRY } = require("pages/Calculator/Form/consts")

//Testes unitários tipo de garimpo Aluvião input por ouro

describe('soilMercuryRemediation', () => {
    it('Deve calcular remediação de mercúrio no solo por tipo de garimpo ALUVIÃO com valor de hipotese conservador, considerando 8625g Au', () => {
                                        //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const remediacaoMercurioSolo = soilMercuryRemediation(ALLUVIUM, AMOUNT_GOLD, 8625, 0.29, 8625)
        expect(remediacaoMercurioSolo).toBe(828828)
    })
})

describe('soilMercuryRemediation', () => {
    it('Deve calcular remediação de mercúrio no solo por tipo de garimpo ALUVIÃO com valor de hipotese princípio da precaução, considerando 8625g Au', () => {
                                        //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const remediacaoMercurioSolo = soilMercuryRemediation(ALLUVIUM, AMOUNT_GOLD, 8625, 0.343, 8625)
        expect(remediacaoMercurioSolo).toBe(1318590.0000000002)
    })
})

//Testes unitários tipo de garimpo Aluvião input por hectare

describe('soilMercuryRemediation', () => {
    it('Deve calcular remediação de mercúrio no solo por tipo de garimpo ALUVIÃO com valor de hipotese conservador, considerando 5Ha', () => {
                                        //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const remediacaoMercurioSolo = soilMercuryRemediation(ALLUVIUM, IMPACTED_AREA, 5, 0.29, 8625)
        expect(remediacaoMercurioSolo).toBe(828828)
    })
})

describe('soilMercuryRemediation', () => {
    it('Deve calcular remediação de mercúrio no solo por tipo de garimpo ALUVIÃO com valor de hipotese princípio da precaução, considerando 5Ha', () => {
                                        //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const remediacaoMercurioSolo = soilMercuryRemediation(ALLUVIUM, IMPACTED_AREA, 5, 0.343, 8625)
        expect(remediacaoMercurioSolo).toBe(1318590.0000000002)
    })
})

//Testes unitários tipo de garimpo poço input por ouro

describe('soilMercuryRemediation', () => {
    it('Deve calcular remediação de mercúrio no solo por tipo de garimpo POÇO com valor de hipotese conservador, considerando 8625g Au', () => {
                                        //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const remediacaoMercurioSolo = soilMercuryRemediation(PIT, AMOUNT_GOLD, 8625, 0.29, 8625)
        expect(remediacaoMercurioSolo).toBe(828828)
    })
})

describe('soilMercuryRemediation', () => {
    it('Deve calcular remediação de mercúrio no solo por tipo de garimpo POÇO com valor de hipotese princípio da precaução, considerando 8625g Au', () => {
                                        //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const remediacaoMercurioSolo = soilMercuryRemediation(PIT, AMOUNT_GOLD, 8625, 0.343, 8625)
        expect(remediacaoMercurioSolo).toBe(1318590.0000000002)
    })
})

//Testes unitários tipo de garimpo poço input por anos de garimpo

describe('soilMercuryRemediation', () => {
    it('Deve calcular remediação de mercúrio no solo por tipo de garimpo POÇO com valor de hipotese conservador, considerando 2 anos', () => {
                                        //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const remediacaoMercurioSolo = soilMercuryRemediation(PIT, YEARS_OF_MINING, 2, 0.29, 0)
        expect(remediacaoMercurioSolo).toBe(4554950.4)
    })
})

describe('soilMercuryRemediation', () => {
    it('Deve calcular remediação de mercúrio no solo por tipo de garimpo ALUVIÃO com valor de hipotese princípio da precaução, considerando 2 anos', () => {
                                        //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, gold)
        const remediacaoMercurioSolo = soilMercuryRemediation(PIT, YEARS_OF_MINING, 2, 0.343, 0)
        expect(remediacaoMercurioSolo).toBe(4554950.4)
    })
})

//Teste unitário para o tipo de garimpo BALSA 

describe('soilMercuryRemediation', () => {
    it('Quando selecionado Balsa o calculo deve ser ZERADO', () => {
        const remediacaoMercurioSolo = soilMercuryRemediation(FERRY)
        expect(remediacaoMercurioSolo).toBe(0)
    })
})