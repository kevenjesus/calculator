const { default: carbon } = require("pages/Calculator/Form/calculations/carbon")
const { ALLUVIUM, PIT, FERRY } = require("pages/Calculator/Form/consts")


describe('Carbon', () => {
    it('Deve calcular o carbono quando o tipo de garimpo for aluvião, considerando 8625g Au ou 5 Ha', () => {
        const carbono = carbon(ALLUVIUM, 5)
        expect(carbono).toBe(722216.089200134)
    })
})

describe('Carbon', () => {
    it('Deve calcular o carbono quando o tipo de garimpo for poço, considerando 8625g Au que equivale a 5 Ha', () => {
        const carbono = carbon(PIT, 5)
        expect(carbono).toBe(44777.39753040831)
    })
})

describe('Carbon', () => {
    it('Deve calcular o carbono quando o tipo de garimpo for poço, considerando 2 anos', () => {
        const carbono = carbon(PIT, 0)
        expect(carbono).toBe(44777.39753040831)
    })
})

describe('Carbon', () => {
    it('Valor do impacto carbono deve zerar quando selecionar balsa', () => {
        const carbono = carbon(FERRY)
        expect(carbono).toBe(0)
    })
})





