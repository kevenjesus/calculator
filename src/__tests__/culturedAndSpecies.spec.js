import culturedAndSpecies  from "pages/Calculator/Form/calculations/culturedAndSpecies"
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts"

describe('culturedAndSpecies', () => {
    it('Deve calcular a cultura e especies quando o tipo de garimpo for aluvião localização Acorizal-MT, considerando 8625g Au ou 5 Ha', () => {
                // (likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        const culturaEspecies = culturedAndSpecies(ALLUVIUM, 6.56, 3, AMOUNT_GOLD, 5)
        expect(culturaEspecies).toBe(0.7957569401321898)
    })
})

describe('culturedAndSpecies', () => {
    it('Deve calcular a cultura e especies quando o tipo de garimpo for aluvião sem localização, considerando 8625g Au ou 5 Ha', () => {
                // (likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        const culturaEspecies = culturedAndSpecies(ALLUVIUM, 4.12, 69.21, AMOUNT_GOLD, 5)
        expect(culturaEspecies).toBe(495.0251527030158)
    })
})


describe('culturedAndSpecies', () => {
    it('Deve calcular a cultura e especies quando o tipo de garimpo for aluvião localização Acorizal-MT, considerando 5 Ha', () => {
                // (likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        const culturaEspecies = culturedAndSpecies(ALLUVIUM, 6.56, 3, IMPACTED_AREA, 5)
        expect(culturaEspecies).toBe(0.06631307834434914)
    })
})

describe('culturedAndSpecies', () => {
    it('Deve calcular a cultura e especies quando o tipo de garimpo for aluvião sem localização, considerando 5 Ha', () => {
                // (likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        const culturaEspecies = culturedAndSpecies(ALLUVIUM, 4.12, 69.21, IMPACTED_AREA, 5)
        expect(culturaEspecies).toBe(41.25209605858465)
    })
})

describe('culturedAndSpecies', () => {
    it('Deve calcular a cultura e especies quando o tipo de garimpo for poço localização Acorizal-MT, considerando 2 anos', () => {
                // (likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        const culturaEspecies = culturedAndSpecies(PIT, 6.56, 3, YEARS_OF_MINING, 0)
        expect(culturaEspecies).toBe(0.04933693028819577)
    })
})

describe('culturedAndSpecies', () => {
    it('Deve calcular a cultura e especies quando o tipo de garimpo for poço sem localização, considerando 2 anos', () => {
                // (likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        const culturaEspecies = culturedAndSpecies(PIT, 4.12, 69.21, YEARS_OF_MINING, 0)
        expect(culturaEspecies).toBe(30.691559467586977)
    })
})

describe('culturedAndSpecies', () => {
    it('Deve calcular a cultura e especies quando o tipo de garimpo for poço localização Acorizal-MT, considerando 8625g Au', () => {
                // (likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        const culturaEspecies = culturedAndSpecies(PIT, 6.56, 3, AMOUNT_GOLD, 0)
        expect(culturaEspecies).toBe(0.04933693028819577)
    })
})

describe('culturedAndSpecies', () => {
    it('Deve calcular a cultura e especies quando o tipo de garimpo for poço sem localização, considerando considerando 8625g Au', () => {
                // (likeMining, popDensity2010, species, typeValueLikeMining, hectareValue)
        const culturaEspecies = culturedAndSpecies(PIT, 4.12, 69.21, AMOUNT_GOLD, 0)
        expect(culturaEspecies).toBe(30.691559467586977)
    })
})

describe('culturedAndSpecies', () => {
    it('O calculo deve ser zerado quando selecionado balsa', () => {
        const culturaEspecies = culturedAndSpecies(FERRY)
        expect(culturaEspecies).toBe(0)
    })
})