import erosionSiltingUp from "pages/Calculator/Form/calculations/erosionSiltingUp"
const { ALLUVIUM, AMOUNT_GOLD, IMPACTED_AREA, PIT, YEARS_OF_MINING, FERRY } = require("pages/Calculator/Form/consts")


describe('erosionSiltingUp', () => {
    it('Deve calcular a erosão e assoreamento quando o tipo de garimpo for aluvião e valor de hipotese for conservador, considerando 8625g Au', () => {
                //(likeMining, txPrevalence, typeValueLikeMining, hectare)
        const erosaoAssoreamento = erosionSiltingUp(ALLUVIUM, 0.29, AMOUNT_GOLD, 5)
        expect(erosaoAssoreamento).toBe(54035.632780625994)
    })
})

describe('erosionSiltingUp', () => {
    it('Deve calcular a erosão e assoreamento quando o tipo de garimpo for aluvião e valor de hipotese for conservador, considerando 5 Ha', () => {
                //(likeMining, txPrevalence, typeValueLikeMining, hectare)
        const erosaoAssoreamento = erosionSiltingUp(ALLUVIUM, 0.29, IMPACTED_AREA, 5)
        expect(erosaoAssoreamento).toBe(4502.9693983854995)
    })
})

describe('erosionSiltingUp', () => {
    it('Deve calcular a erosão e assoreamento quando o tipo de garimpo for poço e valor de hipotese for conservador, considerando 8625g Au', () => {
                //(likeMining, txPrevalence, typeValueLikeMining, hectare)
        const erosaoAssoreamento = erosionSiltingUp(PIT, 0.29, AMOUNT_GOLD, 0)
        expect(erosaoAssoreamento).toBe(3350.2092323988118)
    })
})

describe('erosionSiltingUp', () => {
    it('Deve calcular a erosão e assoreamento quando o tipo de garimpo for poço e valor de hipotese for conservador, considerando 2 anos', () => {
                //(likeMining, txPrevalence, typeValueLikeMining, hectare)
        const erosaoAssoreamento = erosionSiltingUp(PIT, 0.29, YEARS_OF_MINING, 0)
        expect(erosaoAssoreamento).toBe(3350.2092323988118)
    })
})

describe('erosionSiltingUp', () => {
    it('Deve calcular a erosão e assoreamento quando o tipo de garimpo for aluvião e valor de hipotese for princípio da precaução, considerando 8625g Au', () => {
                //(likeMining, txPrevalence, typeValueLikeMining, hectare)
        const erosaoAssoreamento = erosionSiltingUp(ALLUVIUM, 0.343, AMOUNT_GOLD, 5)
        expect(erosaoAssoreamento).toBe(206562.76883629314)
    })
})

describe('erosionSiltingUp', () => {
    it('Deve calcular a erosão e assoreamento quando o tipo de garimpo for aluvião e valor de hipotese for princípio da precaução, considerando 5 Ha', () => {
                //(likeMining, txPrevalence, typeValueLikeMining, hectare)
        const erosaoAssoreamento = erosionSiltingUp(ALLUVIUM, 0.343, IMPACTED_AREA, 5)
        expect(erosaoAssoreamento).toBe(17213.564069691096)
    })
})

describe('erosionSiltingUp', () => {
    it('Deve calcular a erosão e assoreamento quando o tipo de garimpo for poço e valor de hipotese for princípio da precaução, considerando 8625g Au', () => {
                //(likeMining, txPrevalence, typeValueLikeMining, hectare)
        const erosaoAssoreamento = erosionSiltingUp(PIT, 0.343, AMOUNT_GOLD, 0)
        expect(erosaoAssoreamento).toBe(12806.891667850176)
    })
})

describe('erosionSiltingUp', () => {
    it('Deve calcular a erosão e assoreamento quando o tipo de garimpo for poço e valor de hipotese for princípio da precaução, considerando 2 anos', () => {
                //(likeMining, txPrevalence, typeValueLikeMining, hectare)
        const erosaoAssoreamento = erosionSiltingUp(PIT, 0.343, YEARS_OF_MINING, 0)
        expect(erosaoAssoreamento).toBe(12806.891667850176)
    })
})

describe('erosionSiltingUp', () => {
    it('O calculo deve ser zerado quando selecionado balsa', () => {
        const erosaoAssoreamento = erosionSiltingUp(FERRY)
        expect(erosaoAssoreamento).toBe(0)
    })
})