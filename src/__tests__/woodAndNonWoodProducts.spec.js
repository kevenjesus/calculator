import woodAndNonWoodProducts from "pages/Calculator/Form/calculations/woodAndNonWoodProducts"
const { ALLUVIUM, AMOUNT_GOLD, IMPACTED_AREA, PIT, YEARS_OF_MINING, FERRY } = require("pages/Calculator/Form/consts")

//Testes unitários tipo de garimpo Aluvião input por ouro

describe('woodAndNonWoodProducts', () => {
    it('Deve calcular remediação de mercúrio no solo por tipo de garimpo ALUVIÃO com valor de hipotese conservador, considerando 8625g Au', () => {
                                        //(likeMining, typeValueLikeMining, hectare)
        const produtosMadereiros = woodAndNonWoodProducts(ALLUVIUM, AMOUNT_GOLD, 5)
        expect(produtosMadereiros).toBe(621548.0795603468)
    })
})

//Testes unitários tipo de garimpo Aluvião input por hectare

describe('woodAndNonWoodProducts', () => {
    it('Deve calcular remediação de mercúrio no solo por tipo de garimpo ALUVIÃO com valor de hipotese conservador, considerando 5Ha', () => {
                                        //(likeMining, typeValueLikeMining, hectare)
        const produtosMadereiros = woodAndNonWoodProducts(ALLUVIUM, IMPACTED_AREA, 5)
        expect(produtosMadereiros).toBe(51795.67329669557)
    })
})

//Testes unitários tipo de garimpo poço input por ouro

describe('woodAndNonWoodProducts', () => {
    it('Deve calcular remediação de mercúrio no solo por tipo de garimpo POÇO com valor de hipotese conservador, considerando 8625g Au', () => {
                                        //(likeMining, typeValueLikeMining, hectare)
        const produtosMadereiros = woodAndNonWoodProducts(PIT, AMOUNT_GOLD, 0)
        expect(produtosMadereiros).toBe(38535.9809327415)
    })
})

//Testes unitários tipo de garimpo poço input por anos de garimpo

describe('woodAndNonWoodProducts', () => {
    it('Deve calcular remediação de mercúrio no solo por tipo de garimpo POÇO com valor de hipotese conservador, considerando 2 anos', () => {
                                        //(likeMining, typeValueLikeMining, hectare)
        const produtosMadereiros = woodAndNonWoodProducts(PIT, YEARS_OF_MINING, 0)
        expect(produtosMadereiros).toBe(38535.9809327415)
    })
})

//Teste unitário para o tipo de garimpo BALSA 

describe('woodAndNonWoodProducts', () => {
    it('Quando selecionado Balsa o calculo deve ser ZERADO', () => {
        const produtosMadereiros = woodAndNonWoodProducts(FERRY)
        expect(produtosMadereiros).toBe(0)
    })
})