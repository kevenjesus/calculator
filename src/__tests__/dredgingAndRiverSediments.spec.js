import dredgingAndRiverSediments from "pages/Calculator/Form/calculations/dredgingAndRiverSediments"
const { ALLUVIUM, AMOUNT_GOLD, PIT, YEARS_OF_MINING, FERRY, MONTHS_OF_MINING } = require("pages/Calculator/Form/consts")


describe('dredgingAndRiverSediments', () => {
    it('Deve calcular dragagem e sedimentos dos rios quando o tipo de garimpo for aluvião localização Acorizal-MT, considerando 8625g Au ou 5 Ha', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, distanceanningCenter, pitDepth, hectare)
        const dragagemESedimentosNosRios = dredgingAndRiverSediments(ALLUVIUM, AMOUNT_GOLD, 8625, 177.94244305284, 2.5, 5)
        expect(dragagemESedimentosNosRios).toBe(530041.1538267492)
    })
})

describe('dredgingAndRiverSediments', () => {
    it('Deve calcular dragagem e sedimentos dos rios quando o tipo de garimpo for aluvião sem localização, considerando 8625g Au ou 5 Ha', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, distanceanningCenter, pitDepth, hectare)
        const dragagemESedimentosNosRios = dredgingAndRiverSediments(ALLUVIUM, AMOUNT_GOLD, 8625, 212.74, 2.5, 5)
        expect(dragagemESedimentosNosRios).toBe(530550.31168)
    })
})

describe('dredgingAndRiverSediments', () => {
    it('Deve calcular dragagem e sedimentos dos rios quando o tipo de garimpo for poço localização Acorizal-MT, considerando 8625g Au', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, distanceanningCenter, pitDepth, hectare)
        const dragagemESedimentosNosRios = dredgingAndRiverSediments(PIT, AMOUNT_GOLD, 8625, 177.94244305284, 0, 0)
        expect(dragagemESedimentosNosRios).toBe(530041.1538267492)
    })
})

describe('dredgingAndRiverSediments', () => {
    it('Deve calcular dragagem e sedimentos dos rios quando o tipo de garimpo for poço sem localização, considerando 8625g Au', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, distanceanningCenter, pitDepth, hectare)
        const dragagemESedimentosNosRios = dredgingAndRiverSediments(PIT, AMOUNT_GOLD, 8625, 212.74, 0, 0)
        expect(dragagemESedimentosNosRios).toBe(530550.31168)
    })
})

describe('dredgingAndRiverSediments', () => {
    it('Deve calcular dragagem e sedimentos dos rios quando o tipo de garimpo for poço localização Acorizal-MT, considerando 2 anos', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, distanceanningCenter, pitDepth, hectare)
        const dragagemESedimentosNosRios = dredgingAndRiverSediments(PIT, YEARS_OF_MINING, 2, 177.94244305284, 0, 0)
        expect(dragagemESedimentosNosRios).toBe(2901216.6973050097)
    })
})

describe('dredgingAndRiverSediments', () => {
    it('Deve calcular dragagem e sedimentos dos rios quando o tipo de garimpo for poço sem localização, considerando 2 anos', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, distanceanningCenter, pitDepth, hectare)
        const dragagemESedimentosNosRios = dredgingAndRiverSediments(PIT, YEARS_OF_MINING, 2, 212.74, 0, 0)
        expect(dragagemESedimentosNosRios).toBe(2901725.8551582606)
    })
})

describe('dredgingAndRiverSediments', () => {
    it('Deve calcular dragagem e sedimentos dos rios quando o tipo de garimpo for balsa localização Acorizal-MT ou sem localização, considerando 8625g Au', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, distanceanningCenter, pitDepth, hectare)
        const dragagemESedimentosNosRios = dredgingAndRiverSediments(FERRY, AMOUNT_GOLD, 8625, 0, 0, 0)
        expect(dragagemESedimentosNosRios).toBe(286070.7811004785)
    })
})

describe('dredgingAndRiverSediments', () => {
    it('Deve calcular dragagem e sedimentos dos rios quando o tipo de garimpo for balsa localização Acorizal-MT ou sem localização, considerando 24 meses', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, distanceanningCenter, pitDepth, hectare)
        const dragagemESedimentosNosRios = dredgingAndRiverSediments(FERRY, MONTHS_OF_MINING, 24, 0, 0, 0)
        expect(dragagemESedimentosNosRios).toBe(261536.91743540674)
    })
})


