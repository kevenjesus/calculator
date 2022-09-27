import recoveryOfTopsoil from "pages/Calculator/Form/calculations/recoverOfTopsoil"
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts"

//Testes unitários do tipo de garimpo Aluvião input por ouro

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese conservador localização Acorizal-MT, considerando 8625g Au', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(ALLUVIUM, 177.94244305284, 8625, 0.0005797101449275362, 0.29, AMOUNT_GOLD)
        expect(recuperacaoSuperficial).toBe(888682.8283092666)
    } )
})

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese conservador sem localização, considerando 8625g Au', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(ALLUVIUM, 212.74, 8625, 0.0005797101449275362, 0.29, AMOUNT_GOLD)
        expect(recuperacaoSuperficial).toBe(890107.02272)
    } )
})

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese princípio da precaução localização Acorizal-MT, considerando 8625g Au', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(ALLUVIUM, 177.94244305284, 8625, 0.0005797101449275362, 0.343, AMOUNT_GOLD)
        expect(recuperacaoSuperficial).toBe(1411282.8283092666)
    } )
})

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese princípio da precaução sem localização, considerando 8625g Au', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(ALLUVIUM, 212.74, 8625, 0.0005797101449275362, 0.343, AMOUNT_GOLD)
        expect(recuperacaoSuperficial).toBe(1412707.02272)
    } )
})


//Testes unitários do tipo de garimpo Aluvião input por hectare


describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese conservador localização Acorizal-MT, considerando 5Ha', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(ALLUVIUM, 177.94244305284, 8625, 0.0005797101449275362, 0.29, IMPACTED_AREA)
        expect(recuperacaoSuperficial).toBe(80732.82830926664)
    } )
})

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese conservador sem localização, considerando 5Ha', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(ALLUVIUM, 212.74, 8625, 0.0005797101449275362, 0.29, IMPACTED_AREA)
        expect(recuperacaoSuperficial).toBe(82157.02272000001)
    } )
})

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese princípio da precaução localização Acorizal-MT, considerando 5Ha', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(ALLUVIUM, 177.94244305284, 8625, 0.0005797101449275362, 0.343, IMPACTED_AREA)
        expect(recuperacaoSuperficial).toBe(124282.82830926664)
    } )
})

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo ALUVIÃO com valor de hipotese princípio da precaução sem localização, considerando 5Ha', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(ALLUVIUM, 212.74, 8625, 0.0005797101449275362, 0.343, IMPACTED_AREA)
        expect(recuperacaoSuperficial).toBe(125707.02272000001)
    } )
})

//Testes unitários do tipo de garimpo Poço input por ouro

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo POÇO com valor de hipotese conservador localização Acorizal-MT, considerando 8625g Au', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(PIT, 177.94244305284, 8625, 0, 0.29, AMOUNT_GOLD)
        expect(recuperacaoSuperficial).toBe(56467.50707731665)
    } )
})

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo POÇO com valor de hipotese conservador sem localização, considerando 8625g Au', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(PIT, 212.74, 8625, 0, 0.29, AMOUNT_GOLD)
        expect(recuperacaoSuperficial).toBe(56823.55568)
    } )
})

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo POÇO com valor de hipotese princípio da precaução localização Acorizal-MT, considerando 8625g Au', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(PIT, 177.94244305284, 8625, 0, 0.343, AMOUNT_GOLD)
        expect(recuperacaoSuperficial).toBe(88868.70707731666)
    } )
})

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo POÇO com valor de hipotese princípio da precaução sem localização, considerando 8625g Au', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(PIT, 212.74, 8625, 0, 0.343, AMOUNT_GOLD)
        expect(recuperacaoSuperficial).toBe(89224.75568)
    } )
})

//Testes unitários do tipo de garimpo Poço input por anos de garimpo

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo POÇO com valor de hipotese conservador localização Acorizal-MT, considerando 2 anos', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(PIT, 177.94244305284, 0, 0, 0.29, YEARS_OF_MINING)
        expect(recuperacaoSuperficial).toBe(56467.50707731665)
    } )
})

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo POÇO com valor de hipotese conservador sem localização, considerando 2 anos', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(PIT, 212.74, 0, 0, 0.29, YEARS_OF_MINING)
        expect(recuperacaoSuperficial).toBe(56823.55568)
    } )
})

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo POÇO com valor de hipotese princípio da precaução localização Acorizal-MT, considerando 2 anos', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(PIT, 177.94244305284, 0, 0, 0.343, YEARS_OF_MINING)
        expect(recuperacaoSuperficial).toBe(88868.70707731666)
    } )
})

describe('recoverOfTopsoil', () => {
    it('Deve calcular a recuperação superficial do solo quando selecionado tipo de garimpo POÇO com valor de hipotese princípio da precaução sem localização, considerando 2 anos', () => {
                            //(likeMining, distanceanningCenter, gold, goldenGramPerHa, txPrevalence)
        const recuperacaoSuperficial = recoveryOfTopsoil(PIT, 212.74, 0, 0, 0.343, YEARS_OF_MINING)
        expect(recuperacaoSuperficial).toBe(89224.75568)
    } )
})

//Teste unitário para o tipo de garimpo BALSA

describe('recoverOfTopsoil', () => {
    it('Quando o tipo de garimpo for BALSA o calculo deve ser zerado', () =>{
        const recuperacaoSuperficial = recoveryOfTopsoil(FERRY)
        expect(recuperacaoSuperficial).toBe(0)
    })
})