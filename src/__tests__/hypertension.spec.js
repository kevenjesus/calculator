import  hypertension from "pages/Calculator/Form/calculations/hypertension"
import { ALLUVIUM, AMOUNT_GOLD, FERRY, IMPACTED_AREA, MONTHS_OF_MINING, PIT, YEARS_OF_MINING } from "pages/Calculator/Form/consts"

//Testes unitários do tipo de garimpo ALuvião input por ouro

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo aluvião com valor de hipotese conservador localização Acoizal-MT, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(ALLUVIUM, AMOUNT_GOLD, 8625, 0.29, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(hipertensao).toBe(2134826.634952529)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo aluvião com valor de hipotese princípio da precaução localização Acoizal-MT, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(ALLUVIUM, AMOUNT_GOLD, 8625, 0.343, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(hipertensao).toBe(6882286.691307442)
    } )
})



describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo aluvião com valor de hipotese conservador sem localização, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(ALLUVIUM, AMOUNT_GOLD, 8625, 0.29, 0.7353, 0.2647, 6.0, 8625, false)
        expect(hipertensao).toBe(2620371.599626085)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo aluvião com valor de hipotese princípio da precaução sem localização, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(ALLUVIUM, AMOUNT_GOLD, 8625, 0.343, 0.7353, 0.2647, 6.0, 8625, false)
        expect(hipertensao).toBe(8472255.048191525)
    } )
})

//Testes unitários do tipo de garimpo ALuvião input por hectare

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo aluvião com valor de hipotese conservador localização Acoizal-MT, considerando 5Ha', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(ALLUVIUM, IMPACTED_AREA, 5, 0.29, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(hipertensao).toBe(2134826.634952529)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo aluvião com valor de hipotese princípio da precaução localização Acoizal-MT, considerando 5Ha', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(ALLUVIUM, IMPACTED_AREA, 5, 0.343, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(hipertensao).toBe(6882286.691307442)
    } )
})


describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo aluvião com valor de hipotese conservador sem localização, considerando 5Ha', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(ALLUVIUM, IMPACTED_AREA, 5, 0.29, 0.7353, 0.2647, 6.0, 8625, false)
        expect(hipertensao).toBe(2620371.599626085)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo aluvião com valor de hipotese princípio da precaução sem localização, considerando 5Ha', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(ALLUVIUM, IMPACTED_AREA, 5, 0.343, 0.7353, 0.2647, 6.0, 8625, false)
        expect(hipertensao).toBe(8472255.048191525)
    } )
})

//Testes unitários do tipo de garimpo Poço input por ouro

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo POÇO com valor de hipotese conservador localização Acoizal-MT, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(PIT, AMOUNT_GOLD, 8625, 0.29, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(hipertensao).toBe(2134826.634952529)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo POÇO com valor de hipotese princípio da precaução localização Acoizal-MT, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(PIT, AMOUNT_GOLD, 8625, 0.343, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(hipertensao).toBe(6882286.691307442)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo POÇO com valor de hipotese conservador sem localização, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(PIT, AMOUNT_GOLD, 8625, 0.29, 0.7353, 0.2647, 6.0, 8625, false)
        expect(hipertensao).toBe(2620371.599626085)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo POÇO com valor de hipotese princípio da precaução sem localização, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(PIT, AMOUNT_GOLD, 8625, 0.343, 0.7353, 0.2647, 6.0, 8625, false)
        expect(hipertensao).toBe(8472255.048191525)
    } )
})

//Testes unitários do tipo de garimpo Poço input por ANOS DE GARIMPO

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo POÇO com valor de hipotese conservador localização Acoizal-MT, considerando 2 ANOS', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(PIT, YEARS_OF_MINING, 2, 0.29, 0.5306, 0.4694, 9.36112, 0, true)
        expect(hipertensao).toBe(12051344.76226643)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo POÇO com valor de hipotese princípio da precaução localização Acoizal-MT, considerando 2 ANOS', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(PIT, YEARS_OF_MINING, 2, 0.343, 0.5306, 0.4694, 9.36112, 0, true)
        expect(hipertensao).toBe(41053010.4535895)
    } )
})


describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo POÇO com valor de hipotese conservador sem localização, considerando 2 ANOS', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(PIT, YEARS_OF_MINING, 2, 0.29, 0.7353, 0.2647, 6.0, 0, false)
        expect(hipertensao).toBe(14880069.38630358)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo POÇO com valor de hipotese princípio da precaução sem localização, considerando 2 ANOS', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(PIT, YEARS_OF_MINING, 2, 0.343, 0.7353, 0.2647, 6.0, 0, false)
        expect(hipertensao).toBe(51414184.00361513)
    } )
})

//Testes unitários do tipo de garimpo balsa input por OURO

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo BALSA com valor de hipotese conservador localização Acoizal-MT, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(FERRY, AMOUNT_GOLD, 8625, 0.29, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(hipertensao).toBe(3572394.173586856)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo BALSA com valor de hipotese princípio da precaução localização Acoizal-MT, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(FERRY, AMOUNT_GOLD, 8625, 0.343, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(hipertensao).toBe(11615754.537433773)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo BALSA com valor de hipotese conservador sem localização, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(FERRY, AMOUNT_GOLD, 8625, 0.29, 0.7353, 0.2647, 6.0, 8625, false)
        expect(hipertensao).toBe(4388846.5747407405)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo BALSA com valor de hipotese princípio da precaução sem localização, considerando 8625g Au', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(FERRY, AMOUNT_GOLD, 8625, 0.343, 0.7353, 0.2647, 6.0, 8625, false)
        expect(hipertensao).toBe(14338703.632557347)
    } )
})

//Testes unitários do tipo de garimpo balsa input por MESES DE GARIMPO

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo BALSA com valor de hipotese conservador localização Acoizal-MT, considerando 24 MESES', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(FERRY, MONTHS_OF_MINING, 24, 0.29, 0.5306, 0.4694, 9.36112, 0, true)
        expect(hipertensao).toBe(2997240.640376342)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo BALSA com valor de hipotese princípio da precaução localização Acoizal-MT, considerando 24 MESES', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(FERRY, MONTHS_OF_MINING, 24, 0.343, 0.5306, 0.4694, 9.36112, 0, true)
        expect(hipertensao).toBe(9712547.04314196)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo BALSA com valor de hipotese conservador sem localização, considerando 24 MESES', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(FERRY, MONTHS_OF_MINING, 24, 0.29, 0.7353, 0.2647, 6.0, 0, false)
        expect(hipertensao).toBe(3680926.080173396)
    } )
})

describe('hypertension', () => {
    it('Deve calcular a hipertensão quando selecionado tipo de garimpo BALSA com valor de hipotese princípio da precaução sem localização, considerando 24 MESES', () => {
                            //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const hipertensao = hypertension(FERRY, MONTHS_OF_MINING, 24, 0.343, 0.7353, 0.2647, 6.0, 0, false)
        expect(hipertensao).toBe(11976285.968049653)
    } )
})