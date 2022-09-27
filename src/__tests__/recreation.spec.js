import recreation from "pages/Calculator/Form/calculations/recreation"
const { ALLUVIUM, AMOUNT_GOLD, IMPACTED_AREA, PIT, YEARS_OF_MINING, FERRY } = require("pages/Calculator/Form/consts")

//Testes unitários para o tipo de garimpo Aluvião input por ouro

describe('recreation', () => {
    it('Deve calcular a recreação quando o tipo de garimpo for ALUVIÃO localização Acorizal-MT, considerando 8625g Au', () => {
                        //(likeMining, popDensity2010, species, typeValueLikeMining, hectare)
        const recreacao = recreation(ALLUVIUM, 6.56, 3, AMOUNT_GOLD, 5)
        expect(recreacao).toBe(2565.913971543667)
    })
})

describe('recreation', () => {
    it('Deve calcular a recreação quando o tipo de garimpo for ALUVIÃO sem localização, considerando 8625g Au', () => {
                        //(likeMining, popDensity2010, species, typeValueLikeMining, hectare)
        const recreacao = recreation(ALLUVIUM, 4.12, 69.21, AMOUNT_GOLD, 5)
        expect(recreacao).toBe(69190.63140082013)
    })
})

//Testes unitários para o tipo de garimpo Aluvião input por hectare

describe('recreation', () => {
    it('Deve calcular a recreação quando o tipo de garimpo for ALUVIÃO localização Acorizal-MT, considerando 5Ha', () => {
                        //(likeMining, popDensity2010, species, typeValueLikeMining, hectare)
        const recreacao = recreation(ALLUVIUM, 6.56, 3, IMPACTED_AREA, 5)
        expect(recreacao).toBe(213.82616429530557)
    })
})

describe('recreation', () => {
    it('Deve calcular a recreação quando o tipo de garimpo for ALUVIÃO sem localização, considerando 5Ha', () => {
                        //(likeMining, popDensity2010, species, typeValueLikeMining, hectare)
        const recreacao = recreation(ALLUVIUM, 4.12, 69.21, IMPACTED_AREA, 5)
        expect(recreacao).toBe(5765.885950068345)
    })
})

//Testes unitários para o tipo de garimpo poço input por ouro

describe('recreation', () => {
    it('Deve calcular a recreação quando o tipo de garimpo for POÇO localização Acorizal-MT, considerando 8625g Au', () => {
                        //(likeMining, popDensity2010, species, typeValueLikeMining, hectare)
        const recreacao = recreation(PIT, 6.56, 3, AMOUNT_GOLD, 0)
        expect(recreacao).toBe(159.08666623570736)
    })
})

describe('recreation', () => {
    it('Deve calcular a recreação quando o tipo de garimpo for POÇO sem localização, considerando 8625g Au', () => {
                        //(likeMining, popDensity2010, species, typeValueLikeMining, hectare)
        const recreacao = recreation(PIT, 4.12, 69.21, AMOUNT_GOLD, 0)
        expect(recreacao).toBe(4289.8191468508485)
    })
})

//Testes unitários para o tipo de garimpo poço input por ANOS DE GARIMPO

describe('recreation', () => {
    it('Deve calcular a recreação quando o tipo de garimpo for POÇO localização Acorizal-MT, considerando 2 ANOS', () => {
                        //(likeMining, popDensity2010, species, typeValueLikeMining, hectare)
        const recreacao = recreation(PIT, 6.56, 3, YEARS_OF_MINING, 0)
        expect(recreacao).toBe(159.08666623570736)
    })
})

describe('recreation', () => {
    it('Deve calcular a recreação quando o tipo de garimpo for POÇO sem localização, considerando 2 ANOS', () => {
                        //(likeMining, popDensity2010, species, typeValueLikeMining, hectare)
        const recreacao = recreation(PIT, 4.12, 69.21, YEARS_OF_MINING, 0)
        expect(recreacao).toBe(4289.8191468508485)
    })
})

describe('recreation', () => {
    it('Quando o tipo de garimpo for balsa o calculo sera zerado', () => {
        const recreacao = recreation(FERRY)
        expect(recreacao).toBe(0)
    })
})
