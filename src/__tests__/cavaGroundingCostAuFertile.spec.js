const { default: cavaGroundingCostAuFertile } = require("pages/Calculator/Form/calculations/cavaGroundingCostAuFertile")
const { ALLUVIUM, AMOUNT_GOLD, IMPACTED_AREA, PIT, YEARS_OF_MINING, FERRY } = require("pages/Calculator/Form/consts")

describe('aterramentoCavaFertil', () => {
    it('Deve calcular o aterramento de cava fertil quando o tipo de garimpo for aluvião localização Acorizal-MT, considerando 8625g Au, equivale a 5 Ha', () =>{
                    //(likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, gold)
        const aterramentoFertil = cavaGroundingCostAuFertile(ALLUVIUM, AMOUNT_GOLD, 8625, 2.5, 177.94244305284, 8625) 
        expect(aterramentoFertil).toBe(256603.65382674919)
    })
})

describe('aterramentoCavaFertil', () => {
    it('Deve calcular o aterramento de cava fertil quando o tipo de garimpo for aluvião sem localização, considerando 5 Ha', () =>{
                    //(likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, gold)
        const aterramentoFertil = cavaGroundingCostAuFertile(ALLUVIUM, IMPACTED_AREA, 5, 2.5, 212.74, 8625) 
        expect(aterramentoFertil).toBe(257112.81168000004)
    })
})

describe('aterramentoCavaFertil', () => {
    it('Deve calcular o aterramento de cava fertil quando o tipo de garimpo for poço localização Acorizal-MT, considerando 8625g Au, equivale a 5 Ha', () =>{
                    //(likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, gold)
        const aterramentoFertil = cavaGroundingCostAuFertile(PIT, AMOUNT_GOLD, 8625, 0, 177.94244305284, 8625) 
        expect(aterramentoFertil).toBe(66103.65382674916)
    })
})

describe('aterramentoCavaFertil', () => {
    it('Deve calcular o aterramento de cava fertil quando o tipo de garimpo for poço sem localização, considerando 8625g Au, equivale a 5 Ha', () =>{
                    //(likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, gold)
        const aterramentoFertil = cavaGroundingCostAuFertile(PIT, AMOUNT_GOLD, 8625, 0, 212.74, 8625) 
        expect(aterramentoFertil).toBe(66612.81168000001)
    })
})

describe('aterramentoCavaFertil', () => {
    it('Deve calcular o aterramento de cava fertil quando o tipo de garimpo for poço localização Acorizal-MT, considerando 2 anos', () =>{
                    //(likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, gold)
        const aterramentoFertil = cavaGroundingCostAuFertile(PIT, YEARS_OF_MINING, 2, 0, 177.94244305284, 0) 
        expect(aterramentoFertil).toBe(351577.56687022746)
    })
})

describe('aterramentoCavaFertil', () => {
    it('Deve calcular o aterramento de cava fertil quando o tipo de garimpo for poço sem localização, considerando 2 anos', () =>{
                    //(likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, gold)
        const aterramentoFertil = cavaGroundingCostAuFertile(PIT, YEARS_OF_MINING, 2, 0, 212.74, 0) 
        expect(aterramentoFertil).toBe(352086.7247234783)
    })
})

describe('aterramentoCavaFertil', () => {
    it('Quando selecionado balsa, o calculo deve ser zerado', () =>{
        const aterramentoFertil = cavaGroundingCostAuFertile(FERRY) 
        expect(aterramentoFertil).toBe(0)
    })
})