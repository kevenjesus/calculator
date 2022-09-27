import heartAttack from "pages/Calculator/Form/calculations/heartAttack"
const { ALLUVIUM, AMOUNT_GOLD, IMPACTED_AREA, PIT, YEARS_OF_MINING, FERRY, MONTHS_OF_MINING } = require("pages/Calculator/Form/consts")

//Testes unitários para tipo de garimpo ALUVIÃO

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo aluvião com valor de hipotese conservador localização Acorizal-MT, considerando 8625g Au', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(ALLUVIUM, AMOUNT_GOLD, 8625, 0.29, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(infarto).toBe(656230.2025227809)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo aluvião com valor de hipotese princípio da precaução localização Acorizal-MT, considerando 8625g Au', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(ALLUVIUM, AMOUNT_GOLD, 8625, 0.343, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(infarto).toBe(2088005.1898452125)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo aluvião com valor de hipotese conservador sem localização, considerando 8625g Au', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(ALLUVIUM, AMOUNT_GOLD, 8625, 0.29, 0.7353, 0.2647, 6.0, 8625, false)
        expect(infarto).toBe(804384.5789370848)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo aluvião com valor de hipotese princípio da precaução sem localização, considerando 8625g Au', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(ALLUVIUM, AMOUNT_GOLD, 8625, 0.343, 0.7353, 0.2647, 6.0, 8625, false)
        expect(infarto).toBe(2559405.4784361795)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo aluvião com valor de hipotese conservador localização Acorizal-MT, considerando 5 Ha', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(ALLUVIUM, IMPACTED_AREA, 5, 0.29, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(infarto).toBe(656230.2025227809)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo aluvião com valor de hipotese princípio da precaução localização Acorizal-MT, considerando 5 Ha', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(ALLUVIUM, IMPACTED_AREA, 5, 0.343, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(infarto).toBe(2088005.1898452125)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo aluvião com valor de hipotese conservador sem localização, considerando 5 Ha', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(ALLUVIUM, IMPACTED_AREA, 5, 0.29, 0.7353, 0.2647, 6.0, 8625, false)
        expect(infarto).toBe(804384.5789370848)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo aluvião com valor de hipotese princípio da precaução sem localização, considerando 5 Ha', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(ALLUVIUM, IMPACTED_AREA, 5, 0.343, 0.7353, 0.2647, 6.0, 8625, false)
        expect(infarto).toBe(2559405.4784361795)
    })
})


//Testes unitários para tipo de garimpo POÇO

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese conservador localização Acorizal-MT, considerando 8625g Au', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(PIT, AMOUNT_GOLD, 8625, 0.29, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(infarto).toBe(656230.2025227809)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese princípio da precaução localização Acorizal-MT, considerando 8625g Au', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(PIT, AMOUNT_GOLD, 8625, 0.343, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(infarto).toBe(2088005.1898452125)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese conservador sem localização, considerando 8625g Au', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(PIT, AMOUNT_GOLD, 8625, 0.29, 0.7353, 0.2647, 6.0, 8625, false)
        expect(infarto).toBe(804384.5789370848)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese princípio da precaução sem localização, considerando 8625g Au', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(PIT, AMOUNT_GOLD, 8625, 0.343, 0.7353, 0.2647, 6.0, 8625, false)
        expect(infarto).toBe(2559405.4784361795)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese conservador localização Acorizal-MT, considerando 2 anos', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(PIT, YEARS_OF_MINING, 2, 0.29, 0.5306, 0.4694, 9.36112, 0, true)
        expect(infarto).toBe(3606412.9390817177)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese princípio da precaução localização Acorizal-MT, considerando 2 anos', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(PIT, YEARS_OF_MINING, 2, 0.343, 0.5306, 0.4694, 9.36112, 0, true)
        expect(infarto).toBe(11474950.260714557)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese conservador sem localização, considerando 2 anos', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(PIT, YEARS_OF_MINING, 2, 0.29, 0.7353, 0.2647, 6.0, 0, false)
        expect(infarto).toBe(4420617.859897719)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese princípio da precaução sem localização, considerando 2 anos', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(PIT, YEARS_OF_MINING, 2, 0.343, 0.7353, 0.2647, 6.0, 0, false)
        expect(infarto).toBe(14065602.281492742)
    })
})

//Testes unitários para tipo de garimpo BALSA

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese conservador localização Acorizal-MT, considerando 8625g Au', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(FERRY, AMOUNT_GOLD, 8625, 0.29, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(infarto).toBe(1093717.0042046346)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese princípio da precaução localização Acorizal-MT, considerando 8625g Au', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(FERRY, AMOUNT_GOLD, 8625, 0.343, 0.5306, 0.4694, 9.36112, 8625, true)
        expect(infarto).toBe(3480008.6497420194)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese conservador sem localização, considerando 8625g Au', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(FERRY, AMOUNT_GOLD, 8625, 0.29, 0.7353, 0.2647, 6.0, 8625, false)
        expect(infarto).toBe(1340640.9648951418)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese princípio da precaução sem localização, considerando 8625g Au', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(FERRY, AMOUNT_GOLD, 8625, 0.343, 0.7353, 0.2647, 6.0, 8625, false)
        expect(infarto).toBe(4265675.797393632)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese conservador localização Acorizal-MT, considerando 24 meses', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(FERRY, MONTHS_OF_MINING, 24, 0.29, 0.5306, 0.4694, 9.36112, 0, true)
        expect(infarto).toBe(919102.7068377037)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese princípio da precaução localização Acorizal-MT, considerando 24 meses', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(FERRY, MONTHS_OF_MINING, 24, 0.343, 0.5306, 0.4694, 9.36112, 0, true)
        expect(infarto).toBe(2924417.7035745108)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese conservador sem localização, considerando 24 meses', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(FERRY, MONTHS_OF_MINING, 24, 0.29, 0.7353, 0.2647, 6.0, 0, false)
        expect(infarto).toBe(1126604.7204127521)
    })
})

describe('heartAttack', () => {
    it('Deve calcular o infarto quando selecionado o tipo de garimpo poço com valor de hipotese princípio da precaução sem localização, considerando 24 meses', () => {
                //(likeMining, typeValueLikeMining, valueLikeMining, txPrevalence, urbanPopMunicipality, ruralPopMunicipality, popDensity2060, gold, isRegion)
        const infarto = heartAttack(FERRY, MONTHS_OF_MINING, 24, 0.343, 0.7353, 0.2647, 6.0, 0, false)
        expect(infarto).toBe(3584651.3831314845)
    })
})


