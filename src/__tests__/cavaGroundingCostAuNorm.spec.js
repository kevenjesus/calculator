import cavaGroundingCostAuNorm from "pages/Calculator/Form/calculations/cavaGroundingCostAuNorm"
import { ALLUVIUM, AMOUNT_GOLD, FERRY, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts"


describe('cavaGroundingCostAuNorm', () => {
    it('Deve calcular o aterramento de cava normal quando o tipo de garimpo for aluvião localização Acorizal-MT, considerando 8625g Au ou 5 Ha', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, hectare)
        const aterramentoCavaNormal = cavaGroundingCostAuNorm(ALLUVIUM, AMOUNT_GOLD, 8625, 2.5, 177.94244305284, 5)
        expect(aterramentoCavaNormal).toBe(107603.65382674916)
    })
})

describe('cavaGroundingCostAuNorm', () => {
    it('Deve calcular o aterramento de cava normal quando o tipo de garimpo for aluvião sem localização, considerando 8625g Au ou 5 Ha', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, hectare)
        const aterramentoCavaNormal = cavaGroundingCostAuNorm(ALLUVIUM, AMOUNT_GOLD, 8625, 2.5, 212.74, 5)
        expect(aterramentoCavaNormal).toBe(108112.81168)
    })
})

describe('cavaGroundingCostAuNorm', () => {
    it('Deve calcular o aterramento de cava normal quando o tipo de garimpo for poço localização Acorizal-MT, considerando 8625g Au', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, hectare)
        const aterramentoCavaNormal = cavaGroundingCostAuNorm(PIT, AMOUNT_GOLD, 8625, 0, 177.94244305284, 0)
        expect(aterramentoCavaNormal).toBe(122603.65382674917)
    })
})

describe('cavaGroundingCostAuNorm', () => {
    it('Deve calcular o aterramento de cava normal quando o tipo de garimpo for poço sem localização, considerando 8625g Au', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, hectare)
        const aterramentoCavaNormal = cavaGroundingCostAuNorm(PIT, AMOUNT_GOLD, 8625, 0, 212.74, 0)
        expect(aterramentoCavaNormal).toBe(123112.81168000001)
    })
})

describe('cavaGroundingCostAuNorm', () => {
    it('Deve calcular o aterramento de cava normal quando o tipo de garimpo for poço e localização Acorizal-MT, considerando 2 anos', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, hectare)
        const aterramentoCavaNormal = cavaGroundingCostAuNorm(PIT, YEARS_OF_MINING, 2, 0, 177.94244305284, 0)
        expect(aterramentoCavaNormal).toBe(664685.5685230636)
    })
})

describe('cavaGroundingCostAuNorm', () => {
    it('Deve calcular o aterramento de cava normal quando o tipo de garimpo for poço sem localização, considerando 2 anos', () => {
                // (likeMining, typeValueLikeMining, valueLikeMining, pitDepth, distanceFromUrbanCenterToFreight, hectare)
        const aterramentoCavaNormal = cavaGroundingCostAuNorm(PIT, YEARS_OF_MINING, 2, 0, 212.74, 0)
        expect(aterramentoCavaNormal).toBe(665703.8842295653)
    })
})

describe('cavaGroundingCostAuNorm', () =>{
    it('Se selecionado o tipo de garimpo Balsa o resultado deve ser zerado', () => {
        const aterramentoCavaNormal = cavaGroundingCostAuNorm(FERRY)
        expect(aterramentoCavaNormal).toBe(0)
    })
})