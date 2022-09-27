import lossQI from "pages/Calculator/Form/calculations/lossQI"
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts"


//Testes unitários do tipo de garimpo ALuvião input por ouro

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo aluvião com valor de hipotese conservador localização Acoizal-MT, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(ALLUVIUM, AMOUNT_GOLD, 8625, 0.29, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(perdaQI).toBe(45631.18685691467)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo aluvião com valor de hipotese princípio da precaução localização Acoizal-MT, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(ALLUVIUM, AMOUNT_GOLD, 8625, 0.343, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(perdaQI).toBe(145190.13999927393)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo aluvião com valor de hipotese conservador sem localização, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(ALLUVIUM, AMOUNT_GOLD, 8625, 0.29, 0.7353, 0.2647, 6.0, 8625, false)
        expect(perdaQI).toBe(42817.56253262762)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo aluvião com valor de hipotese princípio da precaução sem localização, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(ALLUVIUM, AMOUNT_GOLD, 8625, 0.343, 0.7353, 0.2647, 6.0, 8625, false)
        expect(perdaQI).toBe(136237.69896745152)
    } )
})

//Testes unitários do tipo de garimpo ALuvião input por hectare

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo aluvião com valor de hipotese conservador localização Acoizal-MT, considerando 5Ha', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(ALLUVIUM, IMPACTED_AREA, 5, 0.29, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(perdaQI).toBe(45631.18685691467)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo aluvião com valor de hipotese princípio da precaução localização Acoizal-MT, considerando 5Ha', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(ALLUVIUM, IMPACTED_AREA, 5, 0.343, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(perdaQI).toBe(145190.13999927393)
    } )
})


describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo aluvião com valor de hipotese conservador sem localização, considerando 5Ha', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(ALLUVIUM, IMPACTED_AREA, 5, 0.29, 0.7353, 0.2647, 6.0, 8625, false)
        expect(perdaQI).toBe(42817.56253262762)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo aluvião com valor de hipotese princípio da precaução sem localização, considerando 5Ha', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(ALLUVIUM, IMPACTED_AREA, 5, 0.343, 0.7353, 0.2647, 6.0, 8625, false)
        expect(perdaQI).toBe(136237.69896745152)
    } )
})

//Testes unitários do tipo de garimpo Poço input por ouro

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo POÇO com valor de hipotese conservador localização Acoizal-MT, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(PIT, AMOUNT_GOLD, 8625, 0.29, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(perdaQI).toBe(45631.18685691467)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo POÇO com valor de hipotese princípio da precaução localização Acoizal-MT, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(PIT, AMOUNT_GOLD, 8625, 0.343, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(perdaQI).toBe(145190.13999927393)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo POÇO com valor de hipotese conservador sem localização, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(PIT, AMOUNT_GOLD, 8625, 0.29, 0.7353, 0.2647, 6.0, 8625, false)
        expect(perdaQI).toBe(42817.56253262762)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo POÇO com valor de hipotese princípio da precaução sem localização, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(PIT, AMOUNT_GOLD, 8625, 0.343, 0.7353, 0.2647, 6.0, 8625, false)
        expect(perdaQI).toBe(136237.69896745152)
    } )
})

//Testes unitários do tipo de garimpo Poço input por ANOS DE GARIMPO

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo POÇO com valor de hipotese conservador localização Acoizal-MT, considerando 2 ANOS', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(PIT, YEARS_OF_MINING, 2, 0.29, 0.5306, 0.4694, 9.36112, 0, true)
        expect(perdaQI).toBe(250773.13124843547)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo POÇO com valor de hipotese princípio da precaução localização Acoizal-MT, considerando 2 ANOS', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(PIT, YEARS_OF_MINING, 2, 0.343, 0.5306, 0.4694, 9.36112, 0, true)
        expect(perdaQI).toBe(797914.5085177491)
    } )
})


describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo POÇO com valor de hipotese conservador sem localização, considerando 2 ANOS', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(PIT, YEARS_OF_MINING, 2, 0.29, 0.7353, 0.2647, 6.0, 0, false)
        expect(perdaQI).toBe(235310.43061409262)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo POÇO com valor de hipotese princípio da precaução sem localização, considerando 2 ANOS', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(PIT, YEARS_OF_MINING, 2, 0.343, 0.7353, 0.2647, 6.0, 0, false)
        expect(perdaQI).toBe(748715.0064993857)
    } )
})

//Testes unitários do tipo de garimpo balsa input por OURO

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo BALSA com valor de hipotese conservador localização Acoizal-MT, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(FERRY, AMOUNT_GOLD, 8625, 0.29, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(perdaQI).toBe(76051.97809485778)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo BALSA com valor de hipotese princípio da precaução localização Acoizal-MT, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(FERRY, AMOUNT_GOLD, 8625, 0.343, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(perdaQI).toBe(241983.5666654566)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo BALSA com valor de hipotese conservador sem localização, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(FERRY, AMOUNT_GOLD, 8625, 0.29, 0.7353, 0.2647, 6.0, 8625, false)
        expect(perdaQI).toBe(71362.60422104606)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo BALSA com valor de hipotese princípio da precaução sem localização, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(FERRY, AMOUNT_GOLD, 8625, 0.343, 0.7353, 0.2647, 6.0, 8625, false)
        expect(perdaQI).toBe(227062.8316124192)
    } )
})

//Testes unitários do tipo de garimpo balsa input por MESES DE GARIMPO

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo BALSA com valor de hipotese conservador localização Acoizal-MT, considerando 24 MESES', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(FERRY, MONTHS_OF_MINING, 24, 0.29, 0.5306, 0.4694, 9.36112, 0, true)
        expect(perdaQI).toBe(63910.114461626574)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo BALSA com valor de hipotese princípio da precaução localização Acoizal-MT, considerando 24 MESES', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(FERRY, MONTHS_OF_MINING, 24, 0.343, 0.5306, 0.4694, 9.36112, 0, true)
        expect(perdaQI).toBe(203350.36419608459)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo BALSA com valor de hipotese conservador sem localização, considerando 24 MESES', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(FERRY, MONTHS_OF_MINING, 24, 0.29, 0.7353, 0.2647, 6.0, 0, false)
        expect(perdaQI).toBe(59969.40932105991)
    } )
})

describe('lossQI', () => {
    it('Deve calcular a perda de QI quando selecionado tipo de garimpo BALSA com valor de hipotese princípio da precaução sem localização, considerando 24 MESES', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const perdaQI = lossQI(FERRY, MONTHS_OF_MINING, 24, 0.343, 0.7353, 0.2647, 6.0, 0, false)
        expect(perdaQI).toBe(190811.75693064515)
    } )
})

