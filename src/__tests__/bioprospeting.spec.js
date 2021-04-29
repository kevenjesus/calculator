import bioprospecting from "pages/Calculator/Form/calculations/bioprospecting"
import { ALLUVIUM, FERRY, PIT } from "pages/Calculator/Form/consts"

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for aluvião e valor de hipotese for conservador, considerando 8625g Au ou 5 Ha', () => {
        const bio = bioprospecting(ALLUVIUM, 5, 0.29)
        expect(bio).toBe(55475.60673458125)
    })
})

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for aluvião e valor de hipotese for princípio de precaução, considerando 8625g Au ou 5 Ha', () => {
        const bio = bioprospecting(ALLUVIUM, 5, 0.343)
        expect(bio).toBe(95144.04175992485)
    })
})

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for poço e valor de hipotese for conservador, considerando 8625g Au que equivale a 5 Ha', () => {
        const bio = bioprospecting(PIT, 5, 0.29)
        expect(bio).toBe(3439.4876175440368)
    })
})

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for poço e valor de hipotese for princípio de precaução, considerando 8625g Au que equivale a 5 Ha', () => {
        const bio = bioprospecting(PIT, 5, 0.343)
        expect(bio).toBe(5898.930589115341)
    })
})

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for poço e valor de hipotese for conservador, considerando 2 anos de garimpo', () => {
        const bio = bioprospecting(PIT, 0, 0.29)
        expect(bio).toBe(3439.4876175440368)
    })
})

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for poço e valor de hipotese for princípio de precaução, considerando 2 anos de garimpo', () => {
        const bio = bioprospecting(PIT, 0, 0.343)
        expect(bio).toBe(5898.930589115341)
    })
})

describe('Bioprospecting', () => {
    it('Quando o tipo de garimpo for balsa, o valor esperado é ZERO', () => {
        const bio = bioprospecting(FERRY, 5, 0.29)
        expect(bio).toBe(0)
    })
})

