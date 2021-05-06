import hectareToGold from "utils/hectareToGold"

describe('hectareToGold', () => {
    it('Deve fazer a conversão do hectare em ouro', () => {
        const ouro = hectareToGold(5, 2.5)
        expect(ouro).toBe(8625)
    })
})