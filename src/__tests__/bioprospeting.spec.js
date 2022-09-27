import bioprospecting from "pages/Calculator/Form/calculations/bioprospecting"
import { ALLUVIUM, FERRY, PIT } from "pages/Calculator/Form/consts"

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for aluvião e valor de hipotese for conservador, considerando 5 Ha', () => {
        const bio = bioprospecting(ALLUVIUM, 1, 0.29, 5)
        expect(bio).toBe(4622.967227881771)
    })
})

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for aluvião e valor de hipotese for princípio de precaução, considerando 5 Ha', () => {
        const bio = bioprospecting(ALLUVIUM, 1, 0.343, 5)
        expect(bio).toBe(7928.6701466604045)
    })
})

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for aluvião e valor de hipotese for conservador, considerando 8625g Au, equivale a 5 Ha', () => {
        const bio = bioprospecting(ALLUVIUM, 2, 0.29, 5)
        expect(bio).toBe(55475.60673458125)
    })
})

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for aluvião e valor de hipotese for princípio de precaução, considerando 8625g Au, equivale a 5 Ha', () => {
        const bio = bioprospecting(ALLUVIUM, 2, 0.343, 5)
        expect(bio).toBe(95144.04175992485)
    })
})

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for poço e valor de hipotese for conservador, considerando 8625g Au que equivale a 5 Ha', () => {
        const bio = bioprospecting(PIT, 2, 0.29, 5)
        expect(bio).toBe(3439.4876175440368)
    })
})

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for poço e valor de hipotese for princípio de precaução, considerando 8625g Au que equivale a 5 Ha', () => {
        const bio = bioprospecting(PIT, 2, 0.343, 5)
        expect(bio).toBe(5898.930589115341)
    })
})

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for poço e valor de hipotese for conservador, considerando 2 anos de garimpo', () => {
        const bio = bioprospecting(PIT, 3, 0.29, 0)
        expect(bio).toBe(3439.4876175440368)
    })
})

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for poço e valor de hipotese for princípio de precaução, considerando 2 anos de garimpo', () => {
        const bio = bioprospecting(PIT, 3, 0.343, 0)
        expect(bio).toBe(5898.930589115341)
    })
})

describe('Bioprospecting', () => {
    it('Quando o tipo de garimpo for balsa, o valor esperado é ZERO', () => {
        const bio = bioprospecting(FERRY)
        expect(bio).toBe(0)
    })
})

