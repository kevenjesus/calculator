import calcImpact from "utils/calcImpact"

describe('calcImpact', () => {
    it('O resultado deve dar 0.11442000000000001 se o valor for 5 e o price 10', () => {
        const toHectare = calcImpact(5, 10)
        expect(toHectare).toBe(0.11442000000000001)
    })
})