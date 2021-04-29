import bioprospecting from "pages/Calculator/Form/calculations/bioprospeccao"
import { ALLUVIUM } from "pages/Calculator/Form/consts"

describe('Bioprospecting', () => {
    it('Deve calcular a bio prospecção quando o tipo de garimpo for aluvião e valor de hipotese for conservador', () => {
        const bio = bioprospecting(ALLUVIUM, 20, 0.029)
        expect(bio).toBe(551.8354422075641)
    })
})