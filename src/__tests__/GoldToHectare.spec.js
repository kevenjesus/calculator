import goldToHecatere from "utils/GoldToHectare"

describe('GoldToHectare', () => {
    it('Deve ser feita a conversão do ouro para hectare', () => {
        const hectare = goldToHecatere(8625, 2.5)
        expect(hectare).toBe(5)
    })
})